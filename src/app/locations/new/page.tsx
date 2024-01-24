import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import PageWrapper from "@/components/common/PageWrapper";
import Content from "./Content";

const Page = () => {
  // 未ログインの場合はログインページへ
  const cookieStore = cookies();
  const headerList = headers();

  if (!cookieStore.has("auth")) {
    const currentUrl = new URL(headerList.get("x-url")!);
    const url = new URL("/auth/signin", process.env.NEXT_PUBLIC_BACKEND_URL);
    const callbackUrl = new URL("/auth", currentUrl.origin);
    callbackUrl.searchParams.append(
      "callback",
      currentUrl.pathname + currentUrl.hash,
    );
    url.searchParams.append("callback", callbackUrl.href);
    redirect(url.href);
  }

  return (
    <PageWrapper title="新規登録" path="/locations/register">
      <Content />
    </PageWrapper>
  );
};

export default Page;
