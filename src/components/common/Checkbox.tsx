import { useCallback } from 'react';
import { styled } from '@linaria/react';

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

const Button = styled.button<{ selected: boolean; keyColor: string }>`
  height: 14px;
  line-height: 14px;
  color: ${({ selected, keyColor }) => (selected ? '#fff' : keyColor)};
  font-size: 14px;
  padding: 6px 8px 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
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
  options: Option[];
  multiple: boolean;
  selectedOptions: string[];
  setSelectedOptions: (value: string[]) => void;
}

const Checkbox = ({ options, selectedOptions, setSelectedOptions }: CheckboxProps) => {
  const onClickCategoryItem = useCallback(
    (key: string) => {
      setSelectedOptions(
        selectedOptions.includes(key)
          ? selectedOptions.filter((option) => option !== key)
          : [...selectedOptions, key]
      );
    },
    [selectedOptions, setSelectedOptions]
  );

  return (
    <CategoryList>
      {options.map((option) => {
        const selected = selectedOptions.includes(option.key);
        return (
          <li key={option.key}>
            <Button
              selected={selected}
              keyColor={option.keyColor}
              onClick={() => onClickCategoryItem(option.key)}
            >
              <CategoryItemCheck selected={selected} keyColor={option.keyColor} />
              {option.label}
            </Button>
          </li>
        );
      })}
    </CategoryList>
  );
};

export default Checkbox;
