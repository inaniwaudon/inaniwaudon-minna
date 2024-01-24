import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import PageWrapper from "@/components/common/PageWrapper";
import { fetchTransportation } from "../../_lib/api";
import Content from "./Content";

interface PageProps {
  params: { id: string };
  searchParams: { checkin?: string };
}

const Page = async ({ params, searchParams }: PageProps) => {
  // 未ログインの場合はログインページへ
  const cookieStore = cookies();
  const headerList = headers();

  if (!cookieStore.has("auth")) {
    const currentUrl = new URL(headerList.get("x-url")!);
    const url = new URL("/auth/signin", process.env.NEXT_PUBLIC_BACKEND_URL);
    const callbackUrl = new URL("/auth/callback", currentUrl.origin);
    callbackUrl.searchParams.append(
      "callback",
      currentUrl.pathname + currentUrl.hash,
    );
    url.searchParams.append("callback", callbackUrl.href);
    redirect(url.href);
  }

  // checkin が指定された場合はそのチェックイン情報を取得
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
