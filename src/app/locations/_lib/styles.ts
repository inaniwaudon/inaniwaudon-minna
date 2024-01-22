import { styled } from "@linaria/react";

const inputCss = `
  width: calc(100% - 8px * 2);
  color: inherit;
  font-size: 16px;
  padding: 8px;
  border-bottom: solid 1px #ccc;
  border-radius: 0;
`;

export const buttonCss = `
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  background: hsl(40, 60%, 50%);

  &:hover {
    background: hsla(40, 60%, 50%, 0.8);
  }

  &:disabled {
    color: #999;
    background: #ccc;
  }
`;

export const Input = styled.input`
  ${inputCss}
`;

export const Textarea = styled.textarea`
  ${inputCss}
`;
