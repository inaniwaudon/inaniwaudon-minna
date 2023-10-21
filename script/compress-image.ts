import { ArgumentParser } from 'argparse';
import fs from 'fs';
import { glob } from 'glob';
import natsort from 'natsort';
import path from 'path';
import sharp, { Sharp } from 'sharp';

interface InputArguments {
  input_dir: string;
  output_dir: string;
  json_path: string;
}

interface PhotoInfo {
  src: string;
  title: string;
  place: string;
  date: string;
  width: number;
  height: number;
}

const FULL_MAX_SIZE = 2500;
const FULL_QUALITY = 65;

const THUMBNAIL_MAX_SIZE = 1000;
const THUMBNAIL_QUALITY = 50;

const resize = (img: Sharp, maxSize: number, width: number, height: number) => {
  const fullRatio = Math.min(maxSize / Math.max(width, height), 1.0);
  const newWidth = Math.round(width * fullRatio);
  const newHeight = Math.round(height * fullRatio);
  return [img.resize(newWidth, newHeight), newWidth, newHeight] as const;
};

const createPhotos = async (args: InputArguments) => {
  const thumbnailDirPath = path.join(args.output_dir, 'thumbnail');
  if (!fs.existsSync(args.output_dir)) {
    fs.mkdirSync(args.output_dir);
    fs.mkdirSync(thumbnailDirPath);
  }

  const jpgPath = path.join(args.input_dir, '*.jpg');
  const jpegPath = path.join(args.input_dir, '*.jpeg');
  const imgPaths = [...glob.sync(jpgPath), ...glob.sync(jpegPath)];

  const photoInfos: PhotoInfo[] = [];

  for (let i = 0; i < imgPaths.length; i++) {
    console.log(`processing: ${path} (${i}/${imgPaths.length})`);

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
    const fullPath = path.join(args.output_dir, filename);
    fullResized.webp({ quality: FULL_QUALITY }).toFile(fullPath);

    // create a thumbnail
    const thumbnailResized = resize(img, THUMBNAIL_MAX_SIZE, metadata.width, metadata.height)[0];
    const thumbnailPath = path.join(args.output_dir, 'thumbnail', filename);
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

  const data = {
    title: '',
    date: '',
    dir: '/' + args.output_dir,
    photos: photoInfos.sort((a, b) => natsort()(a.src, b.src)),
  };
  fs.writeFileSync(args.json_path, JSON.stringify(data, null, '  '));
};

const parser = new ArgumentParser();
parser.add_argument('input_dir');
parser.add_argument('output_dir');
parser.add_argument('json_path');

const args: InputArguments = parser.parse_args();
createPhotos(args);
