import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useCustomParams = (
  paramKey: string,
  multiple: boolean,
  defaultTag?: string,
) => {
  const params = useSearchParams();
  const [data, setData] = useState<Record<string, string>>({});

  const tagDelimiter = "+";

  const isSelectedTag = useCallback(
    (tag: string) => {
      console.log(data[paramKey]);
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
