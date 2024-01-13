import { NextResponse } from "next/server";

export const middleware = (request: Request) => {
  // URL をヘッダに追加する
  // cf. https://github.com/vercel/next.js/issues/43704#issuecomment-1411186664
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
