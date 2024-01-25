import imageCompression from "browser-image-compression";

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
  photos: Photo[];
}

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export interface FoursquarePlace {
  fsqId: string;
  name: string;
  latitude?: number;
  longitude?: number;
  formattedAddress: string;
}

export interface FoursquareOriginalPlace {
  fsq_id: string;
  geocodes?: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
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

export const convertImageToWebp = (file: File) =>
  new Promise<Result<string, null>>((resolve) => {
    const MAX_SIZE = 2500;

    (async () => {
      // Safari では WebP には変換されない
      const compressed = await imageCompression(file, {
        fileType: "image/webp",
        maxSizeMB: 1,
        maxWidthOrHeight: MAX_SIZE,
        initialQuality: 0.7,
      });
      console.log(file.size, compressed.size);
      const reader = new FileReader();
      reader.readAsDataURL(compressed);
      reader.onload = () => {
        resolve(succeed(reader.result as string));
      };
      reader.onerror = () => {
        resolve(fail(null));
      };
    })();
  });

export const isBase64Image = (src: string) => {
  return src.startsWith("data:image/");
};

export const getImageUrl = (id: string, src: string) => {
  if (src.startsWith("http") || src.startsWith("https")) {
    return src;
  }
  if (isBase64Image(src)) {
    return src;
  }
  const url = new URL(
    `/locations/${id}/${src}.webp`,
    process.env.NEXT_PUBLIC_PHOTO_URL,
  );
  return url.href;
};

export const tempImagePrefix = "@temp:";

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
