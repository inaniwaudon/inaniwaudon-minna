"use client";

import { styled } from "@linaria/react";
import { useCallback, useState } from "react";

import { PostTankaReactionBody, postTankaReaction } from "./api";

export const maxReactionCount = 10;

const Wrapper = styled.button`
  color: #20b2aa;
  line-height: 1;
  text-align: center;
  font-size: 12px;
  font-family: sans-serif;
  padding: 3px 2px 4px 2px;
  border: solid 1px #20b2aa;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  transition: color 0.2s, background 0.2s;
  background: #fff;

  &:hover {
    color: #fff;
    background: #20b2aa;
  }
`;

interface PlusOneProps {
  tankaId: number;
  initialCount: number;
}

const PlusOne = ({ tankaId, initialCount }: PlusOneProps) => {
  const [count, setCount] = useState(initialCount);

  const onClick = useCallback(async () => {
    const body: PostTankaReactionBody = {
      tanka_id: tankaId,
      reaction: "plusone",
    };
    const result = await postTankaReaction(body);
    if (!result.success) {
      alert("じゃあ反応できてないじゃん残念でした");
      return;
    }

    if (!result.value.executed) {
      alert(
        `同一 IP から ${maxReactionCount} 回以上のリアクションはできません`,
      );
      return;
    }
    setCount((value) => value + 1);
  }, [tankaId]);

  return <Wrapper onClick={onClick}>＋{count}</Wrapper>;
};

export default PlusOne;
