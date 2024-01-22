import { styled } from "@linaria/react";
import { IoLogoTwitter } from "react-icons/io5";

import { stringifyDate } from "@/lib/utils";
import { Checkin } from "../utils";

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
  background: transparent;

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
  checkin?: Checkin;
}

const CheckinContent = ({ checkin }: CheckinContentProps) => {
  const tweetText = `I'm at ${checkin?.location} in hogehoge. ${location.href}`;
  const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText,
  )}`;

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
                <Image src={photo.src} alt={photo.alt} />
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
