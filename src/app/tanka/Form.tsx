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

const Caution = styled.ul`
  line-height: 1.5;
  font-size: 14px;
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 4px;
`;

const TankaInput = styled(Input)`
  width: min(31em, 100% - 10rem);
`;

const SubmitButton = styled.input`
  color: #fff;
  font-size: 16px;
  padding: 4px 18px 4px 24px;
  border: none;
  border-radius: 16px;
  appearance: none;
  --webkit-appearance: none;
  background: #20b2aa;
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
        <Input type="text" id="name" onChange={(e) => setInputName(e.currentTarget.value)} />
      </div>
      <div>
        <Label htmlFor="comment">ひとこと</Label>
        <Input type="text" id="comment" onChange={(e) => setInputComment(e.currentTarget.value)} />
      </div>
      <Caution>
        <li>公序良俗に反した投稿はお控えください（IP アドレスが公開されます）。</li>
        <li>短歌は予告なく削除される可能性があります。</li>
      </Caution>
      <div>
        <SubmitButton type="submit" value="投稿！" />
      </div>
    </FormWrapper>
  );
};

export default Form;
