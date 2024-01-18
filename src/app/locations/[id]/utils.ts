import { notFound } from "next/navigation";
import { parseTransportation } from "./parser";

const microCMSHeader = {
  "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY!,
};

export const getTransportation = async (id: string) => {
  const response = await fetch(
    `https://inaniwaudon-minna.microcms.io/api/v1/transportations/${id}`,
    { headers: microCMSHeader },
  );

  let data: string;
  if (response.ok) {
    const json = await response.json();
    data = json.body;
  } else {
    notFound();
  }
  return parseTransportation(data);
};

export const getTransportationList = async () => {
  const response = await fetch(
    "https://inaniwaudon-minna.microcms.io/api/v1/transportations",
    { headers: microCMSHeader },
  );

  const txt = await response.text();
  console.log(txt);

  /*let data: string;
  if (response.ok) {
    const json = await response.json();
    data = json.body;
  } else {
    data = "# テスト\n- date: test";
  }
  return parseTransportation(data);*/
  return [];
};
