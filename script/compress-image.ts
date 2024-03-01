import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { ArgumentParser } from "argparse";
import exif from "exif-reader";
import { glob } from "glob";
import natsort from "natsort";
import sharp, { Sharp } from "sharp";

import { PhotoData, PhotoInfo } from "../src/lib/photo";

interface InputArguments {
  key: string;
  input_dir: string;
}

interface ExifData {
  date: string | null;
  orientation: number;
}

const FULL_MAX_SIZE = 2500;
const FULL_QUALITY = 65;

const THUMBNAIL_MAX_SIZE = 1000;
const THUMBNAIL_QUALITY = 50;

const getExistingData = (tsPath: string) => {
  if (!fs.existsSync(tsPath)) {
    return null;
  }
  const content = fs
    .readFileSync(tsPath, { encoding: "utf-8" })
    .replace('import { PhotoData } from "@/lib/photo";', "")
    .replace("const data: PhotoData =", "global.tempData =")
    .replace("export default data;", "");
  eval(content);

  // @ts-ignore
  return typeof tempData !== "undefined"
    ? // @ts-ignore
      (tempData as PhotoData)
    : null;
};

/**
 * 画像の撮影日時を取得
 */
const getExif = (exifBuffer?: Buffer): ExifData => {
  if (!exifBuffer) {
    return { date: null, orientation: 1 };
  }
  const exifData = exif(exifBuffer);
  const pad = (n: number) => n.toString().padStart(2, "0");
  let dateStr = "";
  let orientation = 1;

  if (exifData.Photo?.DateTimeOriginal) {
    const date = new Date(exifData.Photo.DateTimeOriginal);
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const h = pad((date.getHours() - 9 + 24) % 24);
    const m = pad(date.getMinutes());
    dateStr = `${yy}/${mm}/${dd} ${h}:${m}`;
  }
  if (exifData.Image?.Orientation) {
    orientation = exifData.Image?.Orientation;
  }
  return {
    date: dateStr,
    orientation,
  };
};

/**
 * EXIF の Orientation に沿って画像を回転する
 */
const rotateWithOrientation = (
  img: Sharp,
  orientation: number,
  width: number,
  height: number,
): [Sharp, number, number] => {
  let rotation = 0;
  switch (orientation) {
    case 3:
      rotation = 180;
      break;
    case 6:
      rotation = 90;
      break;
    case 8:
      rotation = 270;
  }
  return [
    img.rotate(rotation),
    rotation % 180 === 0 ? width : height,
    rotation % 180 === 0 ? height : width,
  ];
};

/**
 * 画像をリサイズする
 */
const resize = (img: Sharp, maxSize: number, width: number, height: number) => {
  const fullRatio = Math.min(maxSize / Math.max(width, height), 1.0);
  const newWidth = Math.round(width * fullRatio);
  const newHeight = Math.round(height * fullRatio);
  return [img.resize(newWidth, newHeight), newWidth, newHeight] as const;
};

const createPhotos = async (args: InputArguments) => {
  // 既存のデータを読み込み
  const tsPath = path.join("src/app/photos/_const/", `${args.key}.ts`);
  const existingData = getExistingData(tsPath);

  // ディレクトリを作成
  const tempDirPath = path.join(args.input_dir, "dst");
  const thumbnailDirPath = path.join(args.input_dir, "dst/thumbnail");
  if (!fs.existsSync(tempDirPath)) {
    fs.mkdirSync(tempDirPath);
    fs.mkdirSync(thumbnailDirPath);
  }

  const jpgPath = path.join(args.input_dir, "*.jpg");
  const jpegPath = path.join(args.input_dir, "*.jpeg");
  const imgPaths = [...glob.sync(jpgPath), ...glob.sync(jpegPath)].sort(
    (a, b) => natsort()(a, b),
  );

  const photoInfos: PhotoInfo[] = [];
  const processedSrcs: string[] = [];

  for (let i = 0; i < imgPaths.length; i++) {
    console.log(`processing: ${imgPaths[i]} (${i}/${imgPaths.length})`);

    const img = sharp(imgPaths[i]);
    const metadata = await img.metadata();
    if (metadata.width === undefined || metadata.height === undefined) {
      throw new Error("width or height is undefined");
    }
    const exif = getExif(metadata.exif);

    // 画像を回転
    const [rotatedImg, rotatedWidth, rotatedHeight] = rotateWithOrientation(
      img,
      exif.orientation,
      metadata.width,
      metadata.height,
    );

    const basename = path.parse(imgPaths[i]).name;
    const filename = `${basename}.webp`;

    // フルサイズの画像を作成
    const [fullResized, fullWidth, fullHeight] = resize(
      rotatedImg,
      FULL_MAX_SIZE,
      rotatedWidth,
      rotatedHeight,
    );
    const fullPath = path.join(tempDirPath, filename);
    fullResized.webp({ quality: FULL_QUALITY }).toFile(fullPath);

    // サムネイルを作成
    const thumbnailResized = resize(
      rotatedImg,
      THUMBNAIL_MAX_SIZE,
      rotatedWidth,
      rotatedHeight,
    )[0];
    const thumbnailPath = path.join(thumbnailDirPath, filename);
    thumbnailResized.webp({ quality: THUMBNAIL_QUALITY }).toFile(thumbnailPath);

    const existingPhotoInfo = existingData?.photos?.find(
      (photo) => photo.src === filename,
    );

    photoInfos.push({
      src: filename,
      title: existingPhotoInfo?.title ?? "",
      place: existingPhotoInfo?.place ?? "",
      date: exif.date ?? "",
      width: fullWidth,
      height: fullHeight,
    });
    processedSrcs.push(filename);
  }

  // データを作成
  const title = existingData?.title ?? "";
  const date = existingData?.date ?? "";
  // 今回処理していない画像
  const existingPhotos = existingData
    ? existingData.photos.filter((photo) => !processedSrcs.includes(photo.src))
    : [];
  const photos = [...existingPhotos, ...photoInfos].sort((a, b) =>
    natsort()(a.src, b.src),
  );

  const data: PhotoData = {
    title,
    date,
    key: args.key,
    photos,
  };
  const ts = `import { PhotoData } from "@/lib/photo";

  const data: PhotoData = ${JSON.stringify(data, null, "  ")};

  export default data;`;

  fs.writeFileSync(tsPath, ts);
  execSync(`npx biome format ${tsPath} --write`);
};

const parser = new ArgumentParser();
parser.add_argument("key");
parser.add_argument("input_dir");

const args: InputArguments = parser.parse_args();
createPhotos(args);
