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

export const AnchorContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      {children}
      <Line />
    </Content>
  );
};

interface PageAnchorProps {
  href: string;
  children: React.ReactNode;
}

const Anchor = ({ href, children }: PageAnchorProps) => {
  if (href.startsWith("https://") || href.startsWith("http://")) {
    return (
      <a href={href}>
        <AnchorContent>{children}</AnchorContent>
      </a>
    );
  }
  return (
    <Link href={href}>
      <AnchorContent>{children}</AnchorContent>
    </Link>
  );
};

export default Anchor;
