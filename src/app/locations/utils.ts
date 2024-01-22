import { fail, succeed } from "@/lib/utils";

export interface Transportation {
  title: string;
  date: string;
  checkins: Checkin[];
}

export interface Checkin {
  location: string;
  id: string;
  datetime: string;
  description: string;
  photos: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export const fetchTransportation = async (id: string) => {
  const url = new URL(`/locations/${id}`, process.env.NEXT_PUBLIC_BACKEND_URL);
  const response = await fetch(url, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    return fail(await response.text());
  }
  const transportation = (await response.json()) as Transportation;
  return succeed(transportation);
};

export const fetchTransportationList = async () => {
  const response = await fetch(
    "https://inaniwaudon-minna.microcms.io/api/v1/transportations",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY!,
      },
    },
  );

  const txt = await response.text();
  console.log(txt);
  return [];
};

export const createTransportation = async (
  id: string,
  title: string,
  date: string,
) => {
  const url = new URL("/locations", process.env.NEXT_PUBLIC_BACKEND_URL);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, date }),
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      return fail(await response.text());
    }
    const transportation = (await response.json()) as Transportation;
    return succeed(transportation);
  } catch (e) {
    return fail(e);
  }
};
