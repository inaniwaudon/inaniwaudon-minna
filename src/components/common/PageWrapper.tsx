import { styled } from "@linaria/react";
import { ReactNode } from "react";

import Footer from "@/components/common/Footer";

const Wrapper = styled.div`
  margin: 30px 50px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

interface PageWrapperProps {
  title: string;
  path: string;
  children: ReactNode;
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
