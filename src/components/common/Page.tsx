import { ReactNode } from 'react';
import Head from 'next/head';
import { styled } from '@linaria/react';

import Footer from '@/components/common/Footer';

const Wrapper = styled.div`
  margin: 30px 50px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => (
  <>
    <Head>
      <title>{`${title}｜いなにわうどん.みんな`}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="回鍋肉と C# が好きです。" />
    </Head>
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  </>
);

export default Page;
