import { ArgumentParser } from 'argparse';
import fs from 'fs';
import { glob } from 'glob';
import natsort from 'natsort';
import path from 'path';
import sharp, { Sharp } from 'sharp';
import { PhotoData, PhotoInfo } from '../src/lib/photo';

interface InputArguments {
  key: string;
  input_dir: string;
}

const FULL_MAX_SIZE = 2500;
const FULL_QUALITY = 65;

const THUMBNAIL_MAX_SIZE = 1000;
const THUMBNAIL_QUALITY = 50;

const getExistingData = (jsonPath: string) => {
  if (!fs.existsSync(jsonPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf-8' })) as PhotoData;
};

const resize = (img: Sharp, maxSize: number, width: number, height: number) => {
  const fullRatio = Math.min(maxSize / Math.max(width, height), 1.0);
  const newWidth = Math.round(width * fullRatio);
  const newHeight = Math.round(height * fullRatio);
  return [img.resize(newWidth, newHeight), newWidth, newHeight] as const;
};

const createPhotos = async (args: InputArguments) => {
  // create directories
  const tempDirPath = path.join(args.input_dir, 'temp');
  const thumbnailDirPath = path.join(args.input_dir, 'temp/thumbnail');
  if (!fs.existsSync(tempDirPath)) {
    fs.mkdirSync(tempDirPath);
    fs.mkdirSync(thumbnailDirPath);
  }

  const jpgPath = path.join(args.input_dir, '*.jpg');
  const jpegPath = path.join(args.input_dir, '*.jpeg');
  const imgPaths = [...glob.sync(jpgPath), ...glob.sync(jpegPath)];

  const photoInfos: PhotoInfo[] = [];

  for (let i = 0; i < imgPaths.length; i++) {
    console.log(`processing: ${imgPaths[i]} (${i}/${imgPaths.length})`);

    const img = sharp(imgPaths[i]);
    const metadata = await img.metadata();

    if (metadata.width === undefined || metadata.height === undefined) {
      throw new Error('width or height is undefined');
    }

    const basename = path.parse(imgPaths[i]).name;
    const filename = `${basename}.webp`;

    // create a full size image
    const [fullResized, fullWidth, fullHeight] = resize(
      img,
      FULL_MAX_SIZE,
      metadata.width,
      metadata.height
    );
    const fullPath = path.join(tempDirPath, filename);
    fullResized.webp({ quality: FULL_QUALITY }).toFile(fullPath);

    // create a thumbnail
    const thumbnailResized = resize(img, THUMBNAIL_MAX_SIZE, metadata.width, metadata.height)[0];
    const thumbnailPath = path.join(thumbnailDirPath, filename);
    thumbnailResized.webp({ quality: THUMBNAIL_QUALITY }).toFile(thumbnailPath);

    photoInfos.push({
      src: filename,
      title: '',
      place: '',
      date: '',
      width: fullWidth,
      height: fullHeight,
    });
  }

  // create data
  const jsonPath = path.join('src/data/photo', `${args.key}.json`);
  const existingData = getExistingData(jsonPath);
  const title = existingData?.title ?? '';
  const date = existingData?.date ?? '';
  const photos = [...(existingData?.photos ?? []), ...photoInfos].sort((a, b) =>
    natsort()(a.src, b.src)
  );

  const data: PhotoData = {
    title,
    date,
    key: args.key,
    photos,
  };
  fs.writeFileSync(path.join(jsonPath), JSON.stringify(data, null, '  '));
};

const parser = new ArgumentParser();
parser.add_argument('key');
parser.add_argument('input_dir');

const args: InputArguments = parser.parse_args();
createPhotos(args);
