import { fail, succeed } from "@/lib/utils";
import { Checkin, FoursquareOriginalPlace, Transportation } from "./utils";

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
      next: { revalidate: 10 },
    },
  );

  const txt = await response.text();
  // TODO
  console.log(txt);
  return [];
};

export const postTransportation = async (
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
      mode: "cors",
      credentials: "include",
      cache: "no-store",
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

export const putCheckin = async (
  id: string,
  checkinId: string,
  checkin: Checkin,
) => {
  const url = new URL(
    `/locations/${id}/checkins/${checkinId}`,
    process.env.NEXT_PUBLIC_BACKEND_URL,
  );
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkin),
      mode: "cors",
      credentials: "include",
      cache: "no-store",
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    return succeed(null);
  } catch (e) {
    return fail(e);
  }
};

export const deleteCheckin = async (id: string, checkinId: string) => {
  const url = new URL(
    `/locations/${id}/checkins/${checkinId}`,
    process.env.NEXT_PUBLIC_BACKEND_URL,
  );
  try {
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      cache: "no-store",
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    return succeed(null);
  } catch (e) {
    return fail(e);
  }
};

export const postImages = async (id: string, images: string[]) => {
  const url = new URL(
    `/locations/${id}/images`,
    process.env.NEXT_PUBLIC_BACKEND_URL,
  );
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ images }),
      mode: "cors",
      credentials: "include",
      cache: "no-store",
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    const filenames = (await response.json()) as string[];
    return succeed(filenames);
  } catch (e) {
    return fail(e);
  }
};

export const fetchPlaces = async (
  latitude: string,
  longitude: string,
  query?: string,
) => {
  const searchParams = new URLSearchParams({
    latitude,
    longitude,
  });
  if (query) {
    searchParams.set("query", query);
  }
  const url = new URL(
    `/locations/places?${searchParams.toString()}`,
    process.env.NEXT_PUBLIC_BACKEND_URL,
  );
  try {
    const response = await fetch(url, {
      mode: "cors",
      credentials: "include",
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    const places = (await response.json()) as FoursquareOriginalPlace[];
    return succeed(places);
  } catch (e) {
    return fail(e);
  }
};
