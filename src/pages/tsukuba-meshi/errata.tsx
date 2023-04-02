import Page from '@/components/common/Page';
import styled from 'styled-components';

const Deletion = styled.div`
  background: #ffebe9;

  &::before {
    width: 1em;
    content: '–';
    text-align: center;
    padding: 0 10px;
    display: inline-block;
  }
`;

const Addition = styled.div`
  background: #e6ffec;

  &::before {
    width: 1em;
    content: '+';
    text-align: center;
    padding: 0 10px;
    display: inline-block;
  }
`;

const Index = () => {
  const title = '2023 年度版 つくばらーめん・飲食店情報 正誤表';

  return (
    <Page title={title}>
      <main>
        <h1>{title}</h1>
        <p>RanRan</p>
        <Deletion>ミニ BIG 丼（550円）</Deletion>
        <Addition>ミニ BIG 丼（580円）</Addition>
        <p>活龍</p>
        <Deletion>月　水木金土日</Deletion>
        <Addition>月火水木金土日</Addition>
      </main>
    </Page>
  );
};

export default Index;
