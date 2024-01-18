import { styled } from "@linaria/react";
import { Checkin } from "./parser";

const Main = styled.main`
  width: 500px;
`;

const Header = styled.header`
  margin-bottom: 24px;
`;

const Location = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Description = styled.p`
  margin-top: 0;
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
  checkin: Checkin;
}

const CheckinContent = ({ checkin }: CheckinContentProps) => {
  return (
    <Main>
      <Header>
        <Location>{checkin.location}</Location>
        <time>{checkin.datetime?.toISOString()}</time>
      </Header>
      {checkin.description.length > 0 && (
        <Description>{checkin.description}</Description>
      )}
      <FigureWrapper>
        {checkin.photos.map((photo, index) => (
          <Figure key={index}>
            <Image src={photo.src} alt={photo.alt} />
            {photo.caption && <Figcaption>{photo.caption}</Figcaption>}
          </Figure>
        ))}
      </FigureWrapper>
    </Main>
  );
};

export default CheckinContent;
