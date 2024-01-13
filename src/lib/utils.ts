export type SearchParams = { [key: string]: string | string[] | undefined };

export const getStringParams = (searchParams: SearchParams) => {
  const stringParams: { [key in string]: string } = {};
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") {
      stringParams[key] = value;
    }
  }
  return stringParams;
};

export const tagDelimiter = "+";

export const isSelectedTag = (
  key: string,
  param: string | undefined,
  defaultKey?: string,
) => {
  if (param === undefined) {
    return key === defaultKey;
  }
  return param.split(tagDelimiter).includes(key);
};

export const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
