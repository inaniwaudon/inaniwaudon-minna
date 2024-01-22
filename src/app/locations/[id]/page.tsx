import { styled } from "@linaria/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdAdd } from "react-icons/md";

import PageWrapper from "@/components/common/PageWrapper";
import { fetchTransportation } from "../_lib/api";
import CheckinContent from "./CheckinContent";
import Timeline from "./Timeline";

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

const Content = styled.div`
  display: flex;
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
  bottom: 32px;
  right: 32px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

interface PageProps {
  params: { id: string };
  searchParams: { checkin?: string };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const result = await fetchTransportation(params.id);
  if (!result.success) {
    notFound();
  }
  const { title, date, checkins } = result.value;

  const paramsIndex = checkins.findIndex(
    (checkin) => checkin.id === searchParams.checkin,
  );
  const selectedIndex = paramsIndex > -1 ? paramsIndex : 0;

  return (
    <PageWrapper title={title} path={`/locations/${params.id}`}>
      <Header>
        <Time>{date}</Time>
        <Title>{title}</Title>
      </Header>
      <Content>
        <Timeline id={params.id} checkins={checkins} />
        <CheckinContent id={params.id} checkin={checkins[selectedIndex]} />
      </Content>
      <Link href={`/locations/${params.id}/checkin`} legacyBehavior>
        <CheckinAnchor>
          <MdAdd />
        </CheckinAnchor>
      </Link>
    </PageWrapper>
  );
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const result = await fetchTransportation(params.id);
  if (!result.success) {
    return {};
  }
  return {
    title: result.value.title,
  };
};

export default Page;
