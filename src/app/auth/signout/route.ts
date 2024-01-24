import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  // クッキーを削除
  cookies().delete("auth");

  const callback = req.nextUrl.searchParams.get("callback");
  redirect(callback ?? "/");
};
