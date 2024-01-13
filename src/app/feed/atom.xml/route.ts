import { getFeed } from "@/lib/feed";

export const GET = async () => {
  return new Response(getFeed().atom1(), {
    headers: { "Content-Type": "application/rss+xml" },
  });
};
