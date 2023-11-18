import { Metadata } from 'next';
import { styled } from '@linaria/react';

import PageAnchor from '@/components/common/PageAnchor';
import PageWrapper from '@/components/common/PageWrapper';

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

const title = 'つくばらーめん・飲食店情報 2023 正誤表';

export const metadata: Metadata = {
  title,
};

const Page = () => {
  return (
    <PageWrapper title={title} path="/tsukuba-meshi/eratta">
      <main>
        <h1>{title}</h1>
        <p>
          <PageAnchor href="/tsukuba-meshi">つくばらーめん・飲食店情報</PageAnchor>
        </p>
        <p>RanRan</p>
        <Deletion>ミニ BIG 丼（550円）</Deletion>
        <Addition>ミニ BIG 丼（580円）</Addition>
        <p>必道</p>
        <Deletion>Twitter: Dark_Horce0331</Deletion>
        <Addition>Twitter: Dark_Horse0331</Addition>
        <p>活龍</p>
        <Deletion>月　水木金土日</Deletion>
        <Addition>月火水木金土日</Addition>
      </main>
    </PageWrapper>
  );
};

export default Page;
