import { styled } from '@linaria/react';

import Checkbox from '@/components/common/Checkbox';
import { nengajo } from '@/const';
import { SearchParams, getStringParams } from '@/lib/utils';

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
  { key: '2024', label: '2024', keyColor: '#fa981c' },
  { key: '2023', label: '2023', keyColor: '#ff32ab' },
  { key: '2022', label: '2022', keyColor: '#2656f3' },
];

interface NengajoProps {
  searchParams: SearchParams;
}

const Nengajo = ({ searchParams }: NengajoProps) => {
  const stringParams = getStringParams(searchParams);
  const year = ['2024', '2023', '2022'].includes(stringParams['year'])
    ? parseInt(stringParams['year'])
    : 2024;

  return (
    <div>
      <Header>
        <H3>年賀状</H3>
        <Checkbox paramKey="year" tags={tags} multiple={false} searchParams={searchParams} />
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
