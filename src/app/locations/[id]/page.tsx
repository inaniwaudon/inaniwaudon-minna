import { styled } from "@linaria/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdAdd } from "react-icons/md";

import PageWrapper from "@/components/common/PageWrapper";
import { fetchTransportation } from "../_lib/api";
import { getImageUrl } from "../_lib/utils";
import CheckinContent from "./CheckinContent";
import Timeline from "./Timeline";

const Header = styled.header`
  margin-bottom: 24px;
`;

const HeaderAnchor = styled.a`
  color: inherit;
  text-decoration: inherit;

  &:hover {
    color: #999;
  }
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

const TimelineWrapper = styled.div<{ hidable: boolean }>`
  flex: 0 0 340px;

  @media (width < 800px) {
    display: ${({ hidable }) => (hidable ? "none" : "block")};
  }
`;

const CheckinContentWrapper = styled.div<{ hidable: boolean }>`
  max-width: 500px;
  flex: 1 0 500px;

  @media (width < 800px) {
    display: ${({ hidable }) => (hidable ? "none" : "block")};
  }
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
  // TODO: タイルビュー と タイムラインビュー
  const result = await fetchTransportation(params.id);
  if (!result.success) {
    notFound();
  }
  const { title, date, checkins } = result.value;

  const paramsIndex = checkins.findIndex(
    (checkin) => checkin.id === searchParams.checkin,
  );
  const selectedIndex = paramsIndex > -1 ? paramsIndex : 0;
  const path = `/locations/${params.id}`;

  return (
    <PageWrapper title={title} path={path}>
      <Link href={path} legacyBehavior>
        <HeaderAnchor>
          <Header>
            <Time>{date}</Time>
            <Title>{title}</Title>
          </Header>
        </HeaderAnchor>
      </Link>
      <Content>
        <TimelineWrapper hidable={searchParams.checkin !== undefined}>
          <Timeline id={params.id} checkins={checkins} />
        </TimelineWrapper>
        <CheckinContentWrapper hidable={searchParams.checkin === undefined}>
          <CheckinContent id={params.id} checkin={checkins[selectedIndex]} />
        </CheckinContentWrapper>
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
  searchParams,
}: PageProps): Promise<Metadata> => {
  const result = await fetchTransportation(params.id);
  if (!result.success) {
    return {};
  }

  const { checkins } = result.value;
  const paramsIndex = checkins.findIndex(
    (checkin) => checkin.id === searchParams.checkin,
  );
  const checkin = checkins[paramsIndex];
  const title = checkin
    ? `${checkin.location} – ${result.value.title}`
    : result.value.title;
  const description = checkin ? checkin.description : "";

  const images = checkin?.photos[0]
    ? [getImageUrl(params.id, checkin.photos[0]?.src)]
    : undefined;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images,
    },
    twitter: {
      title: title,
      description: description,
      card: "summary",
      images,
    },
  };
};

export default Page;
