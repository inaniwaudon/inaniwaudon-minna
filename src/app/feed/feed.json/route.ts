import { getFeed } from '@/lib/feed';

export const GET = async () => {
  return Response.json(JSON.parse(getFeed().json1()));
};
