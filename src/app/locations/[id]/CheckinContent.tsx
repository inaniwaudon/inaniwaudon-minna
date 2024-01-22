"use client";

import { styled } from "@linaria/react";
import { IoLogoTwitter } from "react-icons/io5";

import { stringifyDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Checkin, getImageUrl } from "../_lib/utils";

const Main = styled.main`
  width: 500px;
`;

const Header = styled.header`
  margin-bottom: 24px;
`;

const FirstRow = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const Time = styled.time`
  color: #999;
  display: block;
`;

const Location = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const TweetAnchor = styled.a`
  width: 24px;
  height: 24px;
  line-height: 24px;
  color: rgba(29, 161, 242, 0.8);
  font-size: 24px;
  border: none;
  cursor: pointer;

  &:hover {
    color: rgba(29, 161, 242, 0.6);
  }
`;
const Description = styled.p`
  margin: 0;
`;

const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Figure = styled.figure`
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
`;

const Figcaption = styled.figcaption`
  color: #666;
  margin-top: 4px;
  text-align: center;
`;

interface CheckinContentProps {
  id: string;
  checkin?: Checkin;
}

const CheckinContent = ({ id, checkin }: CheckinContentProps) => {
  const [tweetHref, setTweetHref] = useState("");

  const getTweetHref = () => {
    if (!checkin) {
      return "";
    }
    // 30分以上前のチェックインは I was at にする
    const diff = Date.now() - new Date(checkin.datetime).getTime();
    const be = diff > 60 * 30 * 1000 ? " was" : "'m";
    const text = `I${be} at ${checkin.location} in hogehoge. ${location.href}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  };

  useEffect(() => {
    setTweetHref(getTweetHref());
  }, [getTweetHref]);

  return (
    <Main>
      {!checkin ? (
        <p>チェックインがありません</p>
      ) : (
        <>
          <Header>
            <FirstRow>
              <div>
                <Time>{stringifyDate(new Date(checkin.datetime), false)}</Time>
                <Location>{checkin.location}</Location>
              </div>
              <TweetAnchor href={tweetHref}>
                <IoLogoTwitter />
              </TweetAnchor>
            </FirstRow>
            {checkin.description.length > 0 && (
              <Description>{checkin.description}</Description>
            )}
          </Header>
          <FigureWrapper>
            {checkin.photos.map((photo, index) => (
              <Figure key={index}>
                <Image src={getImageUrl(id, photo.src)} alt={photo.alt} />
                {photo.caption && <Figcaption>{photo.caption}</Figcaption>}
              </Figure>
            ))}
          </FigureWrapper>
        </>
      )}
    </Main>
  );
};

export default CheckinContent;
