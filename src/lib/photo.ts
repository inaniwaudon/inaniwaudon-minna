export interface PhotoData {
  title: string;
  date: string;
  key: string;
  photos: PhotoInfo[];
}

export interface PhotoInfo {
  src: string;
  title: string;
  place: string;
  date: string;
  width: number;
  height: number;
}
