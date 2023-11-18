import { getFeed } from '@/lib/feed';

export const GET = async () => {
  return new Response(getFeed().rss2(), {
    headers: { 'Content-Type': 'application/xml' },
  });
};
