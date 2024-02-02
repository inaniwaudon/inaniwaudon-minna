export type SearchParams = { [key: string]: string | string[] | undefined };

type Success<T> = { success: true; value: T };
type Failure<T> = { success: false; value: T };

export type Result<T, U> = Success<T> | Failure<U>;

export const succeed = <T>(value: T): Success<T> => ({
  success: true,
  value,
});
export const fail = <T>(value: T): Failure<T> => ({
  success: false,
  value,
});

export const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const pad = (n: number) => n.toString().padStart(2, "0");

export const stringifyDate = (date: Date, showsSeconds: boolean): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  let str = `${year}/${month}/${dayOfMonth} ${hours}:${minutes}`;
  if (showsSeconds) {
    str += `:${seconds}`;
  }
  return str;
};

export const dateToInput = (date: Date): string => {
  const YY = date.getFullYear();
  const MM = pad(date.getMonth() + 1);
  const DD = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  return `${YY}-${MM}-${DD}T${hh}:${mm}`;
};
