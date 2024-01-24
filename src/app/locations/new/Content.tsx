"use client";

import { styled } from "@linaria/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { postTransportation } from "../_lib/api";
import { Button, Input } from "../_lib/styles";

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

const RegisterButton = styled(Button)`
  width: calc(100% - 8px * 2);
  text-align: center;
  padding: 8px;
`;

const Content = () => {
  const router = useRouter();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

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
      <RegisterButton
        type="button"
        disabled={isDisabledButton}
        onClick={onClick}
      >
        登録
      </RegisterButton>
    </Wrapper>
  );
};

export default Content;
