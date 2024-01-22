"use client";

import { styled } from "@linaria/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdPlace } from "react-icons/md";
import { v4 as uuidV4 } from "uuid";

import { dateToInput } from "@/lib/utils";
import { postImages, putCheckin } from "../../_lib/api";
import { Input, Textarea, buttonCss } from "../../_lib/styles";
import { Checkin, FoursquarePlace, convertImageToWebp } from "../../_lib/utils";
import Modal from "./Modal";

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

const LocationWrapper = styled.div`
  display: flex;
  gap: 16px;
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
  text-align: center;
  padding: 8px;
  ${buttonCss}
`;

interface ContentProps {
  id: string;
  initialCheckin?: Checkin;
}

const Content = ({ id, initialCheckin }: ContentProps) => {
  const router = useRouter();

  const [displaysModal, setDisplaysModal] = useState(false);
  const [webpBase64s, setWebpBase64s] = useState<string[] | null>([]);

  // 初期値の設定
  const [checkinId, _] = useState(initialCheckin?.id ?? uuidV4());
  const [location, setLocation] = useState(initialCheckin?.location ?? "");
  const [fsqPlace, setFsqPlace] = useState<FoursquarePlace | undefined>(
    initialCheckin?.fsqPlace ?? undefined,
  );
  const [description, setDescription] = useState(
    initialCheckin?.description ?? "",
  );

  const initialDate = initialCheckin
    ? new Date(initialCheckin.datetime)
    : new Date();
  const [datetime, setDatetime] = useState(dateToInput(initialDate));

  const isDisabledButton = location === "" || datetime === "";

  // 画像を WebP に変換
  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) {
      return;
    }
    setWebpBase64s(null);

    const converted = await Promise.all(
      [...e.currentTarget.files].map((file) => convertImageToWebp(file)),
    );
    const tempBase64s = converted.flatMap((result) =>
      result.success ? result.value : [],
    );
    setWebpBase64s(tempBase64s);
  };

  // チェックイン
  const onClick = async () => {
    if (webpBase64s === null) {
      alert("画像を変換中です");
      return;
    }

    // 画像の投稿
    const imageResult = await postImages(id, webpBase64s);
    if (!imageResult.success) {
      alert(`画像のアップロードに失敗しました: ${imageResult.value}`);
      return;
    }

    const checkin: Checkin = {
      location,
      id: checkinId,
      datetime: new Date(datetime).toISOString(),
      fsqPlace,
      description,
      photos: imageResult.value.map((imageId) => ({ src: imageId, alt: "" })),
    };

    const checkinResult = await putCheckin(id, checkinId, checkin);
    if (!checkinResult.success) {
      alert(`チェックインに失敗しました: ${checkinResult.value}`);
      return;
    }
    alert("チェックインしました");
    router.push(`/locations/${id}?checkin=${checkinId}`);
  };

  useEffect(() => {
    if (fsqPlace) {
      setLocation(fsqPlace.name);
    }
  }, [fsqPlace]);

  return (
    <>
      <Wrapper>
        <Part>
          <label htmlFor="id">ID</label>
          <Input type="text" id="id" value={id} readOnly />
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
            {fsqPlace ? (
              <LocationButton onClick={() => setFsqPlace(undefined)}>
                <MdClose />
              </LocationButton>
            ) : (
              <LocationButton onClick={() => setDisplaysModal(true)}>
                <MdPlace />
              </LocationButton>
            )}
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
            onChange={onChangeImage}
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
      <Modal
        displays={displaysModal}
        setFsqPlace={setFsqPlace}
        setDisplays={setDisplaysModal}
      />
    </>
  );
};

export default Content;