import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const color = '#777';
const underlineColor = '#ccc';
const hoverColor = '#0cf';

const Content = styled.div`
  color: ${color};
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    color: ${hoverColor};
  }
`;

const Line = styled.span`
  height: 1px;
  background: ${underlineColor};
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
