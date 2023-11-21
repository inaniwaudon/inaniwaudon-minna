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
  width: 5rem;
  display: inline-block;
`;

const TankaInput = styled.input`
  width: 31em;
`;

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  const [inputTanka, setInputTanka] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputComment, setInputComment] = useState('');

  const onChange = useCallback(() => {
    const value = inputRef.current?.value;
    setInputTanka(value ?? '');
    setCount(value?.length ?? 0);
  }, [inputRef.current, setCount]);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (inputTanka.length === 0) {
        alert('短歌を入力してください');
        return;
      }
      if (inputName.length === 0) {
        alert('名前を入力してください');
        return;
      }

      const data = {
        tanka: inputTanka,
        name: inputName,
        comment: inputComment,
      };
      const response = await fetch('/api/tanka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert('じゃあ投稿できてないじゃん残念でした');
        return;
      }

      alert('投稿しました！');
      location.reload();
      return;
    },
    [inputTanka, inputName, inputComment]
  );

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormHeading>投稿</FormHeading>
      <div>
        <Label htmlFor="tanka">短歌</Label>
        <TankaInput type="text" value={inputTanka} id="tanka" ref={inputRef} onChange={onChange} />
        （{count} 字）
      </div>
      <div>
        <Label htmlFor="name">なまえ</Label>
        <input type="text" id="name" onChange={(e) => setInputName(e.currentTarget.value)} />
      </div>
      <div>
        <Label htmlFor="comment">ひとこと</Label>
        <input type="text" id="comment" onChange={(e) => setInputComment(e.currentTarget.value)} />
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
