import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  // クッキーを削除
  cookies().delete("auth");

  const url = new URL("/auth/signout", process.env.NEXT_PUBLIC_BACKEND_URL);
  fetch(url.href);

  const callback = req.nextUrl.searchParams.get("callback");
  redirect(callback ?? "/");
};
