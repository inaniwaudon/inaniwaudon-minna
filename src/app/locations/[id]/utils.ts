import { notFound } from "next/navigation";

export interface Transportation {
  title: string;
  date: string;
  checkins: Checkin[];
}

export interface Checkin {
  location: string;
  id: string;
  datetime: string;
  photos: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  description: string;
}

export const getTransportation = async (id: string) => {
  const url = new URL(`/locations/${id}`, process.env.NEXT_PUBLIC_BACKEND_URL);
  const response = await fetch(url, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    notFound();
  }
  return (await response.json()) as Transportation;
};

export const getTransportationList = async () => {
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
