"use client";

import { styled } from "@linaria/react";
import { useState } from "react";
import { MdPlace } from "react-icons/md";
import { v4 as uuidV4 } from "uuid";

import PageWrapper from "@/components/common/PageWrapper";
import Modal from "./Modal";

const buttonCss = `
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  box-sizing: content-box;
  background: hsl(40, 60%, 50%);

  &:hover {
    background: hsla(40, 60%, 50%, 0.8);
  }

  &:disabled {
    color: #999;
    background: #ccc;
  }
`;

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

const inputCss = `
  width: calc(100% - 8px * 2);
  color: #000;
  font-size: 16px;
  padding: 8px;
  border-top: none;
  border-right: none;
  border-bottom: solid 1px #ccc;
  border-left: none;
  border-radius: 0;
  background: #fff;
`;

const Input = styled.input`
  ${inputCss}
`;

const Textarea = styled.textarea`
  ${inputCss}
`;

const LocationWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const LocationButton = styled.button`
  width: 24px;
  line-height: 24px;
  font-size: 24px;
  padding: 0px 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  ${buttonCss}
`;

const Button = styled.button`
  width: calc(100% - 8px * 2);
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding: 8px;
  ${buttonCss}
`;

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  const dateStr = (() => {
    const pad = (n: number) => `0${n}`.slice(-2);
    const date = new Date();
    const YY = date.getFullYear();
    const MM = pad(date.getMonth() + 1);
    const DD = pad(date.getDate());
    const hh = pad(date.getHours());
    const mm = pad(date.getMinutes());
    return `${YY}-${MM}-${DD}T${hh}:${mm}`;
  })();

  const [displaysModal, setDisplaysModal] = useState(false);

  const [checkinId, _] = useState(uuidV4());
  const [location, setLocation] = useState("");
  const [datetime, setDatetime] = useState(dateStr);
  const [description, setDescription] = useState("");

  const isDisabledButton =
    location === "" || datetime === "" || description === "";

  const onClick = async () => {
    console.log(checkinId);
    /*const result = await createTransportation(id, title, date);
    if (!result.success) {
      alert(`登録に失敗しました: ${result.value}`);
      return;
    }
    alert("登録しました");
    router.push(`/locations/${id}`);*/
  };

  return (
    <>
      <PageWrapper title="新規登録" path="/locations/register">
        <Wrapper>
          <Part>
            <label htmlFor="id">ID</label>
            <Input type="text" id="id" value={params.id} readOnly />
          </Part>
          <Part>
            <label htmlFor="location">場所</label>
            <LocationWrapper>
              <Input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.currentTarget.value)}
              />
              <LocationButton onClick={() => setDisplaysModal(true)}>
                <MdPlace />
              </LocationButton>
            </LocationWrapper>
          </Part>
          <Part>
            <label htmlFor="datetime">日時</label>
            <Input
              type="datetime-local"
              id="datetime"
              value={datetime}
              onChange={(e) => setDatetime(e.currentTarget.value)}
            />
          </Part>
          <Part>
            <label htmlFor="image">画像</label>
            <Input
              type="file"
              id="image"
              multiple
              accept="image/*"
              onChange={(e) => setDatetime(e.currentTarget.value)}
            />
          </Part>
          <Part>
            <label htmlFor="date">説明</label>
            <Textarea
              id="date"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </Part>
          <Button disabled={isDisabledButton} onClick={onClick}>
            チェックイン
          </Button>
        </Wrapper>
      </PageWrapper>
      <Modal displays={displaysModal} setDisplays={setDisplaysModal} />
    </>
  );
};

export default Page;
