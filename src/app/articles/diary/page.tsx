import { styled } from "@linaria/react";
import { Metadata } from "next";

import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import text from "./text";

const title = "日記";

const Main = styled.main`
  max-width: 800px;
  text-align: justify;
`;

const Paragraph = styled.p`
  margin: 0 0 12px 0;
`;

const PhotoWrapper = styled.a`
  width: 100%;
  height: 20px;
  margin: 0 0 12px 0;
  border-radius: 4px;
  overflow: hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  opacity: 0.6;
  transition: transform 0.2s ease-out, opacity 0.2s;

  &:hover {
    transform: scale(1.1);
    opacity: 1.0;
  }
`;

export const metadata: Metadata = {
  title: title,
};

const Page = () => {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const items: {
    date: string;
    body: string;
    photo?: { src: string; alt: string };
  }[] = [];
  for (const line of lines) {
    if (line.match(/^\d{4}\/\d{1,2}/)) {
      items.push({ date: line, body: "" });
    } else {
      if (line.startsWith("!")) {
        const splited = line.slice(1).split("|");
        items.at(-1)!.photo = { src: splited[0], alt: splited[1] ?? "" };
      } else {
        items.at(-1)!.body += line;
      }
    }
  }

  return (
    <PageWrapper title={title} path="/articles">
      <Main>
        <PageTitle>日記</PageTitle>
        {items.map(({ date, body, photo }) => (
          <div key={date}>
            <H3>{date}</H3>
            <Paragraph>{body}</Paragraph>
            {photo && (
              <PhotoWrapper href={`/assets/diary/${photo.src}`}>
                <Photo src={`/assets/diary/${photo.src}`} alt={photo.alt} />
              </PhotoWrapper>
            )}
          </div>
        ))}
      </Main>
    </PageWrapper>
  );
};

export default Page;
