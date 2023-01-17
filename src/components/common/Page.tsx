import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from '@/components/common/Footer';

const Wrapper = styled.div`
  margin: 30px 50px;
`;

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => (
  <>
    <Head>
      <title>{title}｜いなにわうどん.みんな</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  </>
);

export default Page;
