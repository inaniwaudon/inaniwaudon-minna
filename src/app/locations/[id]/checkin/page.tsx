"use client";

import PageWrapper from "@/components/common/PageWrapper";
import { fetchTransportation } from "../../_lib/api";
import Content from "./Content";

interface PageProps {
  params: { id: string };
  searchParams: { checkin?: string };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const initialCheckin = await (async () => {
    if (searchParams.checkin) {
      const result = await fetchTransportation(params.id);
      if (result.success) {
        return result.value.checkins.find(
          (checkin) => checkin.id === searchParams.checkin,
        );
      }
    }
    return undefined;
  })();

  return (
    <>
      <PageWrapper title="新規登録" path="/locations/register">
        <Content id={params.id} initialCheckin={initialCheckin} />
      </PageWrapper>
    </>
  );
};

export default Page;
