'use client';

import Link from 'next/link';
import { styled } from '@linaria/react';
import { useSearchParams } from 'next/navigation';

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
  background: ${({ selected, keyColor }) => (selected ? '#fff' : keyColor)};
  opacity: ${({ selected }) => (selected ? 1 : 0.2)};
  transition: opacity 0.2s;
`;

const Anchor = styled.div`
  text-decoration: none;
`;

const Button = styled.div<{ selected: boolean; keyColor: string }>`
  height: 14px;
  line-height: 14px;
  color: ${({ selected, keyColor }) => (selected ? '#fff' : keyColor)};
  font-size: 14px;
  padding: 6px 8px 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  background: ${({ selected, keyColor }) => (selected ? keyColor : '#fff')};
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: content-box;
  transition: color 0.2s, background 0.2s;

  &:hover ${CategoryItemCheck} {
    opacity: 1;
  }
`;

interface Option {
  key: string;
  label: string;
  keyColor: string;
}

interface CheckboxProps {
  query: string;
  options: Option[];
  multiple: boolean;
  selectedOptions: string[];
}

const Checkbox = ({ query, options, selectedOptions }: CheckboxProps) => {
  return (
    <CategoryList>
      {options.map((option) => {
        const selected = selectedOptions.includes(option.key);
        return (
          <li key={option.key}>
            <Link href={`?${query}=${option.key}`} legacyBehavior>
              <Anchor>
                <Button selected={selected} keyColor={option.keyColor}>
                  <CategoryItemCheck selected={selected} keyColor={option.keyColor} />
                  {option.label}
                </Button>
              </Anchor>
            </Link>
          </li>
        );
      })}
    </CategoryList>
  );
};

export default Checkbox;
