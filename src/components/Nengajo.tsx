import { useState } from 'react';
import styled from 'styled-components';
import { nengajo } from '@/const';
import { keyColor } from '@/const/style';

const Header = styled.header`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const H3 = styled.h3`
  margin: 0;
`;

const ButtonList = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.a`
  color: #666;
  padding: 2px 8px;
  cursor: pointer;
  appearance: none;
  background: #fff;
  display: flex;
  align-items: center;
`;

const ButtonDot = styled.div<{ selected: boolean }>`
  width: 6px;
  height: 6px;
  margin-right: 8px;
  border-radius: 50%;
  opacity: ${({ selected }) => (selected ? 1.0 : 0.0)};
  background: ${keyColor};
`;

const ImgWrapper = styled.div<{ displays: boolean }>`
  display: ${(props) => (props.displays ? 'block' : 'none')};
`;

const Img = styled.img`
  max-width: 500px;
  max-height: 500px;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

const Nengajo = () => {
  const [year, setYear] = useState(nengajo[0].year);

  return (
    <div>
      <Header>
        <H3>年賀状</H3>
        <ButtonList>
          {nengajo.map((item) => (
            <Button type="button" onClick={() => setYear(item.year)} key={item.year}>
              <ButtonDot selected={item.year === year} />
              {item.year}
            </Button>
          ))}
        </ButtonList>
      </Header>
      {nengajo.map((item) => (
        <ImgWrapper displays={item.year === year} key={item.year}>
          <Img src={item.src} alt={item.alt} />
        </ImgWrapper>
      ))}
    </div>
  );
};

export default Nengajo;
