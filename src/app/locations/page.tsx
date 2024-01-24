import { Metadata } from "next";

import PageWrapper from "@/components/common/PageWrapper";

const title = "移動記";

export const metadata: Metadata = {
  title,
  description: "21世紀はチェックインの世紀",
};

const Page = async () => {
  return (
    <PageWrapper title={title} path="/locations">
      <ul>
        <li>海浜幕張</li>
      </ul>
    </PageWrapper>
  );
};

export default Page;
