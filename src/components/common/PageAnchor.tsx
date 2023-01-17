import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { linkColor, linkHoverColor, linkUnderlineColor } from '@/const/style';

const Content = styled.div`
  line-height: 1.3;
  color: ${linkColor};
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    color: ${linkHoverColor};
  }
`;

const Line = styled.span`
  height: 1px;
  margin-top: 2px;
  background: ${linkUnderlineColor};
  display: block;
`;

interface PageAnchorProps {
  href: string;
  children: ReactNode;
}

const PageAnchor = ({ href, children }: PageAnchorProps) => {
  const content = (
    <Content>
      {children}
      <Line />
    </Content>
  );
  return (
    <>
      {href.startsWith('https://') || href.startsWith('http://') ? (
        <a href={href}>{content}</a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </>
  );
};

export default PageAnchor;
