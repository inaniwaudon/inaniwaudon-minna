import { useState } from 'react';
import { styled } from '@linaria/react';

import Checkbox from '@/components/common/Checkbox';
import { nengajo } from '@/const';

const Header = styled.header`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const H3 = styled.h3`
  margin: 0;
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

const tags = [
  { key: '2022', label: '2022', keyColor: '#ff32ab' },
  { key: '2023', label: '2023', keyColor: '#2656f3' },
];

const Nengajo = () => {
  const [year, setYear] = useState(nengajo[0].year);

  return (
    <div>
      <Header>
        <H3>年賀状</H3>
        <Checkbox
          options={tags}
          multiple={true}
          selectedOptions={[year.toString()]}
          setSelectedOptions={(option) => setYear(parseInt(option.at(-1)!))}
        />
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
