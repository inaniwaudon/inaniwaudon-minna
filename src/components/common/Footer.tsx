import { styled } from "@linaria/react";

import Anchor from "./Anchor";

const Wrapper = styled.footer`
  font-size: 14px;
  margin-top: 20px;
  padding-top: 10px;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
`;

const Split = styled.span`
  margin: 0 4px;
`;

interface FooterProps {
  title: string;
  path: string;
}

const Footer = ({ title, path }: FooterProps) => {
  return (
    <Wrapper>
      現在のページ：
      <Anchor href={path}>
        {title}（{path}）
      </Anchor>
      <Split>｜</Split>
      <Anchor href="/">トップページ</Anchor> –{" "}
      <Anchor href="#">ページ上部</Anchor>
    </Wrapper>
  );
};

export default Footer;
