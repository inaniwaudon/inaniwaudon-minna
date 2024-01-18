import { NextRequest, NextResponse } from "next/server";

import { maxReactionCount, tankaReactions } from "@/app/tanka/tanka";

export interface TankaReactionPOSTSchema {
  tanka_id: number;
  reaction: string;
}

export interface TankaReactionPOSTResult {
  executed: boolean;
}

export const POST = async (req: NextRequest) => {
  try {
    const { tanka_id, reaction } =
      (await req.json()) as TankaReactionPOSTSchema;

    // Bad Request
    if (tanka_id == null) {
      return new NextResponse("Bad Request: tanka_id is empty.", {
        status: 400,
      });
    }
    if (!reaction) {
      return new NextResponse("Bad Request: reaction is empty.", {
        status: 400,
      });
    }
    if (!tankaReactions.includes(reaction)) {
      return new NextResponse("Bad Request: reaction is not defined.", {
        status: 400,
      });
    }

    // 同一短歌に対するリアクション数を取得
    const ip = req.headers.get("CF-Connecting-IP") ?? "Undefined";
    const result = (await process.env.DB.prepare(
      "SELECT count(*) FROM tanka_reaction WHERE tanka_id = ? AND ip = ?",
    )
      .bind(tanka_id, ip)
      .first()) as { "count(*)": number };

    // 指定回数以上のリアクション
    if (result["count(*)"] + 1 > maxReactionCount) {
      const response: TankaReactionPOSTResult = { executed: false };
      return NextResponse.json(response, { status: 201 });
    }

    // リアクションの追加
    await process.env.DB.prepare(
      "INSERT INTO tanka_reaction (tanka_id, ip, reaction) VALUES (?, ?, ?)",
    )
      .bind(tanka_id, ip, reaction)
      .run();

    const response: TankaReactionPOSTResult = { executed: true };
    return NextResponse.json(response, { status: 201 });
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};
