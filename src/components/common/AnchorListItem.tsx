import { styled } from "@linaria/react";

import Anchor from "./Anchor";
import AnchorOnClick from "./AnchorOnClick";

const Header = styled.header`
  font-size: 14px;
  margin-bottom: -2px;
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
  margin-top: 2px;
`;

type AnchorListItemProps = {
  title: string;
  date?: string;
  description?: string;
  content?: React.ReactNode;
} & ({ href: string } | { onClick: () => void });

const AnchorListItem = (props: AnchorListItemProps) => {
  const { title, date, description, content } = props;

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
        {"href" in props ? (
          <Anchor href={props.href}>{title}</Anchor>
        ) : (
          <AnchorOnClick onClick={props.onClick}>{title}</AnchorOnClick>
        )}
      </div>
      {content && <Content>{content}</Content>}
    </li>
  );
};

export default AnchorListItem;
