'use client';

import { useCallback, useRef, useState } from 'react';
import { styled } from '@linaria/react';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormHeading = styled.h2`
  margin: 0;
`;

const Label = styled.label`
  width: 8rem;
  display: inline-block;
`;

const TankaInput = styled.input`
  width: 31em;
`;

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  const [inputTanka, setInputTanka] = useState('');

  const onChange = useCallback(() => {
    const value = inputRef.current?.value;
    setInputTanka(value ?? '');
    setCount(value?.length ?? 0);
  }, [inputRef.current, setCount]);

  const onSubmit = useCallback(async () => {
    const response = await fetch('/api/tanka', { method: 'POST' });
    const json = await response.json();
  }, []);

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormHeading>投稿</FormHeading>
      <div>
        <Label htmlFor="tanka">短歌</Label>
        <TankaInput type="text" value={inputTanka} id="tanka" ref={inputRef} onChange={onChange} />
        （{count} 字）
      </div>
      <div>
        <Label htmlFor="nickname">ニックネーム</Label>
        <input type="text" id="nickname" />
      </div>
      <div>
        <small>
          公序良俗に反した投稿はお控えください（IP
          アドレスが公開されます）。短歌は予告なく削除される可能性があります。
        </small>
      </div>
      <div>
        <button type="submit">投稿！</button>
      </div>
    </FormWrapper>
  );
};

export default Form;
