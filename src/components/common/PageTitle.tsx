import { styled } from "@linaria/react";

const H1 = styled.h1`
  font-size: 28px;
  margin: 0 0 10px 0;
`;

interface PageTitleProps {
  children: string;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return <H1>{children}</H1>;
};

export default PageTitle;
