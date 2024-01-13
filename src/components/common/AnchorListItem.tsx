import { styled } from "@linaria/react";

import Anchor from "./Anchor";

const Header = styled.header`
  font-size: 14px;
  margin-bottom: 2px;
`;

const Time = styled.time`
  font-family: 'Courier New';
  font-weight: 700;
`;

const Description = styled.span`
  color: #666;
  font-size: 13px;
`;

const Content = styled.div`
  margin-top: 4px;
`;

interface AnchorListItemProps {
  href: string;
  title: string;
  date?: string;
  description?: string;
  content?: React.ReactNode;
}

const AnchorListItem = ({
  href,
  title,
  date,
  description,
  content,
}: AnchorListItemProps) => {
  return (
    <li>
      <Header>
        {date && <Time>{date}</Time>}
        {description && (
          <>
            {" "}
            – <Description>{description}</Description>
          </>
        )}
      </Header>
      <div>
        <Anchor href={href}>{title}</Anchor>
      </div>
      {content && <Content>{content}</Content>}
    </li>
  );
};

export default AnchorListItem;
