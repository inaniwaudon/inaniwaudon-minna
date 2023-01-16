import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const color = '#06c';
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
  background: ${color};
  display: block;
`;

interface PageAnchorProps {
  href: string;
  children: ReactNode;
}

const PageAnchor = ({ href, children }: PageAnchorProps) => (
  <Link href={href}>
    <Content>
      {children}
      <Line />
    </Content>
  </Link>
);

export default PageAnchor;
