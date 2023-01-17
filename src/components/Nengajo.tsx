import { useState } from 'react';
import styled from 'styled-components';
import { nengajo } from '@/const';

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

const Button = styled.input`
  padding: 2px 8px;
  border-radius: 2px;
  border: solid 1px #ccc;
  cursor: pointer;
  appearance: none;
  background: #fff;
`;

const Img = styled.img<{ displays: boolean }>`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  display: ${(props) => (props.displays ? 'block' : 'none')};
`;

const Nengajo = () => {
  const [year, setYear] = useState(nengajo[0].year);

  return (
    <div>
      <Header>
        <H3>年賀状</H3>
        <ButtonList>
          {nengajo.map((item) => (
            <Button
              type="button"
              value={item.year}
              onClick={() => setYear(item.year)}
              key={item.year}
            />
          ))}
        </ButtonList>
      </Header>
      {nengajo.map((item) => (
        <Img src={item.src} alt={item.alt} displays={item.year === year} key={item.year} />
      ))}
    </div>
  );
};

export default Nengajo;
