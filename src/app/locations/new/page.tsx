"use client";

import { styled } from "@linaria/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PageWrapper from "@/components/common/PageWrapper";
import { postTransportation } from "../utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  border-radius: 6px;
  background: hsl(40, 60%, 50%);

  &:disabled {
    color: #999;
    background: #ccc;
  }
`;

const Page = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  const isDisabledButton = id === "" || title === "" || date === "";

  const onClick = async () => {
    const result = await postTransportation(id, title, date);
    if (!result.success) {
      alert(`登録に失敗しました: ${result.value}`);
      return;
    }
    alert("登録しました");
    router.push(`/locations/${id}`);
  };

  return (
    <PageWrapper title="新規登録" path="/locations/register">
      <Wrapper>
        <Part>
          <label htmlFor="id">ID（イミュータブル）</label>
          <Input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.currentTarget.value)}
          />
        </Part>
        <Part>
          <label htmlFor="title">タイトル</label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </Part>
        <Part>
          <label htmlFor="date">日付</label>
          <Input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </Part>
        <Button
          type="button"
          value="登録"
          disabled={isDisabledButton}
          onClick={onClick}
        />
      </Wrapper>
    </PageWrapper>
  );
};

export default Page;
