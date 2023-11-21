import { NextRequest, NextResponse } from 'next/server';
import { Database } from '@cloudflare/d1';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: Database;
    }
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { tanka, name, comment } = body;
    if (!tanka) {
      return new NextResponse('Bad Request', { status: 400 });
    }
    const ip = req.headers.get('X-Forwarded-For') ?? 'Undefined';

    await process.env.DB.prepare('INSERT INTO tanka (tanka, name, ip, comment) VALUES (?, ?, ?, ?)')
      .bind(tanka, name, ip, comment)
      .all();
    return new NextResponse('Created', { status: 201 });
  } catch (e: any) {
    return new Response(e, { status: 500 });
  }
};
