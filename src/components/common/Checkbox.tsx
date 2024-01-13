import { styled } from "@linaria/react";
import Link from "next/link";

import {
  SearchParams,
  getStringParams,
  isSelectedTag,
  tagDelimiter,
} from "@/lib/utils";

const CategoryList = styled.ul`
  margin: 0;
  padding: 4px 0 0 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryItemCheck = styled.div<{ selected: boolean; keyColor: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ selected, keyColor }) => (selected ? "#fff" : keyColor)};
  opacity: ${({ selected }) => (selected ? 1 : 0.2)};
  transition: opacity 0.2s;
`;

const Anchor = styled.a<{ selected: boolean; keyColor: string }>`
  height: 14px;
  line-height: 14px;
  color: ${({ selected, keyColor }) => (selected ? "#fff" : keyColor)};
  text-decoration: none;
  font-size: 14px;
  padding: 6px 8px 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  background: ${({ selected, keyColor }) => (selected ? keyColor : "#fff")};
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: content-box;
  transition: color 0.2s, background 0.2s;

  &:hover ${CategoryItemCheck} {
    opacity: 1;
  }
`;

interface Tag {
  key: string;
  label: string;
  keyColor: string;
}

interface CheckboxProps {
  paramKey: string;
  tags: Tag[];
  multiple: boolean;
  searchParams: SearchParams;
}

const Checkbox = ({
  paramKey,
  tags,
  multiple,
  searchParams,
}: CheckboxProps) => {
  const stringParams = getStringParams(searchParams);

  const getNewParams = (tagKey: string) => {
    const newParams = structuredClone(stringParams);

    // single
    if (!multiple) {
      newParams[paramKey] = tagKey;
    }
    // multiple
    else {
      if (!newParams[paramKey]) {
        newParams[paramKey] = tagKey;
      } else {
        let newKeys = newParams[paramKey].split(tagDelimiter);
        if (newKeys.includes(tagKey)) {
          newKeys = newKeys.filter((key) => key !== tagKey);
        } else {
          newKeys.push(tagKey);
        }
        if (newKeys.length > 0) {
          newParams[paramKey] = newKeys.join(tagDelimiter);
        } else {
          delete newParams[paramKey];
        }
      }
    }
    return new URLSearchParams(newParams);
  };

  return (
    <CategoryList>
      {tags.map((tag) => {
        const selected = isSelectedTag(
          tag.key,
          stringParams[paramKey],
          !multiple ? tags[0].key : undefined,
        );
        return (
          <li key={tag.key}>
            <Link href={`?${getNewParams(tag.key)}`} replace legacyBehavior>
              <Anchor selected={selected} keyColor={tag.keyColor}>
                <CategoryItemCheck
                  selected={selected}
                  keyColor={tag.keyColor}
                />
                {tag.label}
              </Anchor>
            </Link>
          </li>
        );
      })}
    </CategoryList>
  );
};

export default Checkbox;
