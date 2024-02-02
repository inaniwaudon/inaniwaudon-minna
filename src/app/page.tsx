import { Metadata } from "next";

import { SearchParams } from "@/lib/utils";
import Main from "./_index/components/Main";

export const metadata: Metadata = {
  title: "いなにわうどん.みんな",
  description: "回鍋肉と C# が好きです。",
};

interface PageProps {
  searchParams: SearchParams;
}

const Page = ({ searchParams }: PageProps) => {
  return <Main searchParams={searchParams} />;
};

export default Page;
