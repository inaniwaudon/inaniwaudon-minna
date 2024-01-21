import { styled } from "@linaria/react";
import Link from "next/link";
import { MdAdd } from "react-icons/md";

import Content from "./Content";
import { getTransportation } from "./utils";

const Warpper = styled.div`
  padding: 40px 64px;
  box-sizing: border-box;
`;

const Header = styled.header`
  margin-bottom: 32px;
`;

const Time = styled.time`
  color: #999;
  display: block;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
`;

const CheckinAnchor = styled.a`
  width: 32px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  background: hsla(40, 60%, 50%, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

interface PageProps {
  params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const { title, date, checkins } = await getTransportation(params.id);

  return (
    <Warpper>
      <Header>
        <Time>{date}</Time>
        <Title>{title}</Title>
      </Header>
      <Content checkins={checkins} />
      <Link href={`/locations/register?id=${params.id}`} legacyBehavior>
        <CheckinAnchor>
          <MdAdd />
        </CheckinAnchor>
      </Link>
    </Warpper>
  );
};

export default Page;
