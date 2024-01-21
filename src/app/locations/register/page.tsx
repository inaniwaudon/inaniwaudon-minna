"use client";

import PageWrapper from "@/components/common/PageWrapper";
import { styled } from "@linaria/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px:
`;

const Input = styled.input`
  width: calc(100% - 8px * 2);
  font-size: 16px;
  padding: 8px;
  border-top: none;
  border-right: none;
  border-bottom: solid 1px #ccc;
  border-left: none;
`;

const Button = styled.input`
  width: calc(100% - 8px * 2);
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: hsl(40, 60%, 50%);
`;

const Page = () => {
  const onClick = () => {};

  return (
    <PageWrapper title="新規登録" path="/locations/register">
      <Wrapper>
        <Part>
          <label>ID（イミュータブル）</label>
          <Input type="text" />
        </Part>
        <Part>
          <label>名称</label>
          <Input type="text" />
        </Part>
        <Part>
          <label>日付</label>
          <Input type="text" />
        </Part>
        <Button value="登録" onClick={onClick} />
      </Wrapper>
    </PageWrapper>
  );
};

export default Page;
