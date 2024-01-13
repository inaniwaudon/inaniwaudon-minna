import { styled } from "@linaria/react";
import Link from "next/link";

import { linkColor, linkHoverColor, linkUnderlineColor } from "@/const/style";

const Content = styled.span`
  line-height: 1.3;
  color: ${linkColor};
  font-weight: 600;
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
  children: React.ReactNode;
}

const Anchor = ({ href, children }: PageAnchorProps) => {
  const content = (
    <Content>
      {children}
      <Line />
    </Content>
  );

  if (href.startsWith("https://") || href.startsWith("http://")) {
    return <a href={href}>{content}</a>;
  }
  return <Link href={href}>{content}</Link>;
};

export default Anchor;
