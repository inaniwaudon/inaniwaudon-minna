import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  // クッキーを付与
  const ttl = 60 * 60 * 24;
  cookies().set("auth", "true", { maxAge: ttl });

  const callback = req.nextUrl.searchParams.get("callback");
  redirect(callback ?? "/");
};
