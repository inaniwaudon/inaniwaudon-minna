import { styled } from "@linaria/react";
import { Metadata } from "next";

import AdobeFonts from "@/components/common/AdobeFonts";
import { PhotoInfo } from "@/lib/photo";
import { SearchParams } from "@/lib/utils";
import { notFound } from "next/navigation";
import { photos } from "../_const";
import Main from "./Main";

const Footer = styled.footer`
  width: calc(100% - 80px);
  color: #fff;
  text-align: right;
  padding: 20px 40px 20px 40px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

  h1,
  .date {
    text-shadow: 0 1px 4px #000;
    font-family: kinuta-maruminold-stdn, serif;
    font-weight: 400;
    font-style: normal;
  }

  h1 {
    line-height: 2.5rem;
    font-size: 2.2rem;
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 1.8rem;
    }
  }

  .date {
    line-height: 1.2rem;
    font-size: 1.2rem;
    margin: 4px 0 0 0;
  }
`;

const Copyright = styled.p`
  line-height: 1rem;
  margin: 4px 0 0 0;

  small {
    font-size: 0.6rem;
    opacity: 0.6;
  }

  a {
    color: #add8e6;
  }
`;

const Half = styled.span`
  width: 0.5em;
  display: inline-block;
`;

export type PhotoList = ({
  thumbnail_src: string;
} & PhotoInfo)[];

interface PageProps {
  params: { id: string };
  searchParams: SearchParams;
}

const Page = ({ params, searchParams }: PageProps) => {
  const { id } = params;
  const photoData = photos.find((photo) => photo.data?.key === id)?.data;
  if (!photoData) {
    notFound();
  }

  const { title, date } = photoData;
  const dir = `${process.env.NEXT_PUBLIC_PHOTO_URL}/photo/${id}`;
  const titleLast = title[title.length - 1];

  const newPhotos = photoData.photos.map((photo) => ({
    src: `${dir}/${photo.src}`,
    thumbnail_src: `${dir}/thumbnail/${photo.src}`,
    title: photo.title,
    place: photo.place,
    date: photo.date,
    width: photo.width,
    height: photo.height,
  }));

  return (
    <>
      <AdobeFonts />
      <Main photos={newPhotos} searchParams={searchParams} />
      <Footer>
        <h1>
          {title.substring(0, title.length - 1)}
          {["）", "」", "』", "】", "］", "〉", "》", "。", "、"].includes(
            titleLast,
          ) ? (
            <Half>）</Half>
          ) : (
            <span>{titleLast}</span>
          )}
        </h1>
        <p className={"date"}>{date}</p>
        <Copyright>
          <small>
            © いなにわうどん．{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">
              クリエイティブ・コモンズ 表示 4.0 国際 (CC BY 4.0)
            </a>
          </small>
        </Copyright>
      </Footer>
    </>
  );
};

export const generateStaticParams = () => {
  return photos.flatMap((photo) => (photo.data ? photo.data.key : []));
};

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const { id } = params;
  const photo = photos.find((photo) => photo.data?.key === id);
  return photo
    ? {
        title: photo.data!.title,
        formatDetection: { telephone: false },
      }
    : {};
};

export default Page;
