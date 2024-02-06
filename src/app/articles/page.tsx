import { Metadata } from "next";

import PageWrapper from "@/components/common/PageWrapper";
import { SearchParams } from "@/lib/utils";
import { Main } from "./Main";

const title = "書いたもの・こと";

export const metadata: Metadata = {
  title: title,
};

interface PageProps {
  searchParams: SearchParams;
}

const Page = ({ searchParams }: PageProps) => {
  return (
    <PageWrapper title={title} path="/articles">
      <Main title={title} searchParams={searchParams} />
    </PageWrapper>
  );
};

export default Page;
