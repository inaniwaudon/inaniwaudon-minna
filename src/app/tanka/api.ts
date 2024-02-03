import { fail, succeed } from "@/lib/utils";

interface Tanka {
  id: number;
  tanka: string;
  name: string;
  ip: string;
  comment: string | null;
  supplement: string | null;
  plusone_count: number;
}

export const fetchTankas = async () => {
  const url = new URL("/api/tanka", process.env.NEXT_PUBLIC_BACKEND_URL);
  try {
    const response = await fetch(url, {
      cache: "no-store",
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    const tankas = (await response.json()) as Tanka[];
    return succeed(tankas);
  } catch (e) {
    return fail(e);
  }
};

export interface PostTankaBody {
  tanka: string;
  name: string;
  comment: string;
  color1680: boolean;
}

export const postTanka = async (body: PostTankaBody) => {
  const url = new URL("/api/tanka", process.env.NEXT_PUBLIC_BACKEND_URL);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    return succeed(null);
  } catch (e) {
    return fail(e);
  }
};

export interface PostTankaReactionBody {
  tanka_id: number;
  reaction: "plusone";
}

export interface PostTankaReactionResult {
  executed: boolean;
}

export const postTankaReaction = async (body: PostTankaReactionBody) => {
  const url = new URL(
    "/api/tanka/reaction",
    process.env.NEXT_PUBLIC_BACKEND_URL,
  );
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    const result = (await response.json()) as PostTankaReactionResult;
    return succeed(result);
  } catch (e) {
    return fail(e);
  }
};
