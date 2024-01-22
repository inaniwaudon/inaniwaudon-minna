import { Result, fail, succeed } from "@/lib/utils";

export interface Transportation {
  title: string;
  date: string;
  checkins: Checkin[];
}

export interface Checkin {
  location: string;
  id: string;
  datetime: string;
  fsqPlace?: FoursquarePlace;
  description: string;
  photos: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface FoursquarePlace {
  fsqId: string;
  name: string;
  latitude: number;
  longitude: number;
  formattedAddress: string;
}

export interface FoursquareOriginalPlace {
  fsq_id: string;
  geocodes: {
    latitude: number;
    longitude: number;
  };
  distance: number;
  location: {
    address?: string;
    address_extended?: string;
    country: string;
    cross_street?: string;
    formatted_address: string;
    locality?: string;
    postcode?: string;
    region: string;
  };
  name: string;
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

export const getImageUrl = (id: string, src: string) => {
  if (src.startsWith("http") || src.startsWith("https")) {
    return src;
  }
  const url = new URL(
    `/locations/${id}/${src}.webp`,
    process.env.NEXT_PUBLIC_PHOTO_URL,
  );
  return url.href;
};

export const getCurrentPosition = () =>
  new Promise<Result<{ latitude: number; longitude: number }, string>>(
    (resolve) => {
      navigator.geolocation.getCurrentPosition(
        (result) => {
          resolve(
            succeed({
              latitude: result.coords.latitude,
              longitude: result.coords.longitude,
            }),
          );
        },
        (e) => {
          resolve(fail(e.message));
        },
      );
    },
  );
