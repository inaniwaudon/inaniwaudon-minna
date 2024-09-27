"use client";

import { AnchorContent } from "./Anchor";

interface PageAnchorProps {
  children: React.ReactNode;
  onClick: () => void;
}

const AnchorOnClick = ({ children, onClick }: PageAnchorProps) => {
  return (
    <span onClick={onClick}>
      <AnchorContent>{children}</AnchorContent>
    </span>
  );
};

export default AnchorOnClick;
