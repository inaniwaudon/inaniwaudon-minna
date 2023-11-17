'use client';

import Link from 'next/link';
import { styled } from '@linaria/react';

import { linkColor, linkHoverColor } from '@/const/style';

const Wrapper = styled.footer`
  font-size: 14px;
  margin-top: 20px;
  padding-top: 10px;
  border-top: solid 1px rgba(0, 0, 0, 0.2);

  a {
    color: ${linkColor};

    &:hover {
      color: ${linkHoverColor};
    }
  }
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
      <Link href={path}>
        {title}（{path}）
      </Link>
      <Split>｜</Split>
      <Link href="/">トップページ</Link> - <a href="#">ページ上部</a>
    </Wrapper>
  );
};

export default Footer;
