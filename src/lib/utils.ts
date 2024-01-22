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

export const stringifyDate = (date: Date, showsMinutes: boolean): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let str = `${year}/${month}/${dayOfMonth} ${hours}:${minutes}`;
  if (showsMinutes) {
    str += `:${seconds}`;
  }
  return str;
};
