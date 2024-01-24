import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  // URL をヘッダに追加する
  // cf. https://github.com/vercel/next.js/issues/43704#issuecomment-1411186664
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  // 以下のパスでは認証状態を確認する
  // /locations/new
  // /locations/:id/checkin
  const authPaths = [/\/locations\/new/, /^\/locations\/[^/]+\/checkin/];
  if (authPaths.some((path) => path.test(request.nextUrl.pathname))) {
    if (!request.cookies.has("auth")) {
      const currentUrl = new URL(request.url);
      const url = new URL("/auth/signin", process.env.NEXT_PUBLIC_BACKEND_URL);
      const callbackUrl = new URL("/auth/callback", currentUrl.origin);
      callbackUrl.searchParams.append(
        "callback",
        currentUrl.pathname + currentUrl.hash,
      );
      url.searchParams.append("callback", callbackUrl.href);
      return NextResponse.redirect(url.href);
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
