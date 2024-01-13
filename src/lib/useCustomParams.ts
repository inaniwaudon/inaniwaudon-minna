import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SearchParams } from "./utils";

// Server Components として実装すると切り替え時にページリロードが走るため、Client Components として実装
export const useCustomParams = (
  paramKey: string,
  multiple: boolean,
  defaultTag?: string,
  defaultParams?: SearchParams,
) => {
  const params = useSearchParams();

  const initialData: Record<string, string> = {};
  if (defaultParams) {
    for (const key in defaultParams) {
      const value = defaultParams[key];
      if (typeof value === "string") {
        initialData[key] = value;
      }
    }
  }

  const [data, setData] = useState<Record<string, string>>(initialData);

  const tagDelimiter = "+";

  const isSelectedTag = useCallback(
    (tag: string) => {
      if (!data[paramKey]) {
        return tag === defaultTag;
      }
      return data[paramKey].split(tagDelimiter).includes(tag);
    },
    [paramKey, defaultTag, data],
  );

  const getNewTags = useCallback(
    (tag: string) => {
      if (!multiple || !data[paramKey]) {
        return [tag];
      }
      const newKeys = data[paramKey].split(tagDelimiter);
      return newKeys.includes(tag)
        ? newKeys.filter((key) => key !== tag)
        : [...newKeys, tag];
    },
    [paramKey, multiple, data],
  );

  const switchTag = (tag: string) => {
    const newTags = getNewTags(tag);
    setData({ ...data, [paramKey]: newTags.join(tagDelimiter) });

    // SearchParam を更新
    const newParams = new URLSearchParams(params);
    if (newTags.length > 0) {
      newParams.set(paramKey, newTags.join(tagDelimiter));
    } else {
      newParams.delete(paramKey);
    }
    const url = new URL(window.location.href);
    url.search = newParams.toString();
    const newUrl = url.toString();
    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      "",
      newUrl,
    );
  };

  useEffect(() => {
    // data を SearchParam と同期
    const newData: Record<string, string> = {};
    for (const [key, value] of params) {
      if (value) {
        newData[key] = value;
      }
    }
    setData(newData);
  }, [params]);

  return { isSelectedTag, switchTag };
};
