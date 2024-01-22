import { styled } from "@linaria/react";

import Footer from "@/components/common/Footer";

const Wrapper = styled.div`
  margin: 40px 56px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

interface PageWrapperProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children, path }: PageWrapperProps) => {
  return (
    <>
      <Wrapper>
        {children}
        <Footer title={title} path={path} />
      </Wrapper>
    </>
  );
};

export default PageWrapper;
