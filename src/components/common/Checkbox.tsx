"use client";

import { styled } from "@linaria/react";

import { useCustomParams } from "@/lib/useCustomParams";

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
  customParams: ReturnType<typeof useCustomParams>;
}

const Checkbox = ({ tags, customParams }: CheckboxProps) => {
  const { isSelectedTag, switchTag } = customParams;

  return (
    <CategoryList>
      {tags.map((tag) => {
        const selected = isSelectedTag(tag.key);
        return (
          <li key={tag.key}>
            <Anchor
              selected={selected}
              keyColor={tag.keyColor}
              onClick={() => switchTag(tag.key)}
            >
              <CategoryItemCheck selected={selected} keyColor={tag.keyColor} />
              {tag.label}
            </Anchor>
          </li>
        );
      })}
    </CategoryList>
  );
};

export default Checkbox;
