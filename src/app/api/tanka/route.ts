import { NextRequest, NextResponse } from 'next/server';
import { Database } from '@cloudflare/d1';
import { tankaMaxLength } from '@/const/tanka';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: Database;
    }
  }
}

export const GET = async () => {
  try {
    const { results } = await process.env.DB.prepare(
      'SELECT * FROM tanka WHERE deleted_at IS NULL ORDER BY id DESC'
    ).all();
    return NextResponse.json(results);
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};

interface POSTSchema {
  tanka: string;
  name: string;
  comment: string;
  color1680: boolean;
}

export const POST = async (req: NextRequest) => {
  try {
    const { tanka, name, comment, color1680 } = (await req.json()) as POSTSchema;

    // Bad Request
    if (!tanka || tanka.length === 0) {
      return new NextResponse('Bad Request: tanka is empty.', { status: 400 });
    }
    if (name.length === 0) {
      return new NextResponse('Bad Request: name is empty.', { status: 400 });
    }
    if (color1680 === undefined) {
      return new NextResponse('Bad Request: color1680 does not exist', { status: 400 });
    }
    if (tanka.length > tankaMaxLength) {
      return new NextResponse('Bad Request: tanka length exceeds 40 characters.', { status: 400 });
    }

    const ip = req.headers.get('CF-Connecting-IP') ?? 'Undefined';
    const supplement = color1680 ? '1680' : '';

    // 短歌の追加
    await process.env.DB.prepare(
      'INSERT INTO tanka (tanka, name, ip, comment, supplement) VALUES (?, ?, ?, ?, ?)'
    )
      .bind(tanka, name, ip, comment, supplement)
      .run();
    return new NextResponse('Created', { status: 201 });
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};
