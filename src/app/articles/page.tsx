import { Metadata } from "next";

import PageWrapper from "@/components/common/PageWrapper";
import { Main } from "./main";

const title = "書いたもの・こと";

export const metadata: Metadata = {
  title: title,
};

const Page = () => {
  return (
    <PageWrapper title={title} path="/articles">
      <Main title={title} />
    </PageWrapper>
  );
};

export default Page;
