import { NextRequest, NextResponse } from 'next/server';
import { Database } from '@cloudflare/d1';

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

export const POST = async (req: NextRequest) => {
  try {
    const { tanka, name, comment } = await req.json();
    if (!tanka || tanka.length === 0) {
      return new NextResponse('Bad Request: tanka is empty', { status: 400 });
    }
    if (name.length === 0) {
      return new NextResponse('Bad Request: name is empty', { status: 400 });
    }
    const ip = req.headers.get('CF-Connecting-IP') ?? 'Undefined';

    await process.env.DB.prepare('INSERT INTO tanka (tanka, name, ip, comment) VALUES (?, ?, ?, ?)')
      .bind(tanka, name, ip, comment)
      .all();
    return new NextResponse('Created', { status: 201 });
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};
