import { NextRequest, NextResponse } from "next/server";
import { Database } from "@cloudflare/d1";
import { Tanka, tankaMaxLength } from "@/const/tanka";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: Database;
    }
  }
}

export type TankaGETResult = Tanka[];

export const GET = async () => {
  try {
    const executed = await process.env.DB.prepare(
      `SELECT t.id, t.tanka, t.name, t.ip, t.comment, t.supplement, COUNT(tr.id) AS plusone_count
        FROM tanka AS t
        LEFT OUTER JOIN tanka_reaction tr ON t.id = tr.tanka_id AND tr.reaction = 'plusone'
        WHERE deleted_at IS NULL
        GROUP BY t.id
        ORDER BY t.id DESC;`,
    ).all();
    const results = executed.results as any as TankaGETResult;
    return NextResponse.json(results);
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};

export interface TankaPOSTSchema {
  tanka: string;
  name: string;
  comment: string;
  color1680: boolean;
}

export const POST = async (req: NextRequest) => {
  try {
    const { tanka, name, comment, color1680 } =
      (await req.json()) as TankaPOSTSchema;

    // Bad Request
    if (!tanka || tanka.length === 0) {
      return new NextResponse("Bad Request: tanka is empty.", { status: 400 });
    }
    if (name.length === 0) {
      return new NextResponse("Bad Request: name is empty.", { status: 400 });
    }
    if (color1680 === undefined) {
      return new NextResponse("Bad Request: color1680 does not exist", {
        status: 400,
      });
    }
    if (tanka.length > tankaMaxLength) {
      return new NextResponse(
        "Bad Request: tanka length exceeds 40 characters.",
        { status: 400 },
      );
    }

    const ip = req.headers.get("CF-Connecting-IP") ?? "Undefined";
    const supplement = color1680 ? "1680" : "";

    // 短歌の追加
    await process.env.DB.prepare(
      "INSERT INTO tanka (tanka, name, ip, comment, supplement) VALUES (?, ?, ?, ?, ?)",
    )
      .bind(tanka, name, ip, comment, supplement)
      .run();
    return new NextResponse("Created", { status: 201 });
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};
