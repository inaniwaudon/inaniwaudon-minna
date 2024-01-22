import { fail, succeed } from "@/lib/utils";

export interface Transportation {
  title: string;
  date: string;
  checkins: Checkin[];
}

export interface Checkin {
  location: string;
  id: string;
  datetime: string;
  description: string;
  photos: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const loadImage = (file: File) =>
  new Promise<HTMLImageElement>((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });

export const convertImageToWebp = async (file: File) => {
  const image = await loadImage(file);
  const MAX_SIZE = 2500;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return fail(null);
  }

  let width: number;
  let height: number;
  if (image.naturalWidth > image.naturalHeight) {
    width = Math.min(image.naturalWidth, MAX_SIZE);
    height = image.naturalHeight * (width / image.naturalWidth);
  } else {
    height = Math.min(image.naturalHeight, MAX_SIZE);
    width = image.naturalWidth * (height / image.naturalHeight);
  }

  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);
  return succeed(canvas.toDataURL("image/webp"));
};
