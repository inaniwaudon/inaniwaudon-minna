import { PhotoData } from "@/lib/photo";
import data2022kyushu from "./2022kyushu";
import data2023hokkaido from "./2023hokkaido";
import data210301ysfh from "./210301ysfh";
import dataKirigirisu from "./kirigirisu";
import dataKiroro from "./kiroro";

interface Photo {
  id: string;
  title: string;
  data?: PhotoData;
}

export const photos: Photo[] = [
  {
    id: "kiroro",
    title: "キロロ",
    data: dataKiroro,
  },
  {
    id: "kirigirisu",
    title: "キリギリス",
    data: dataKirigirisu,
  },
  {
    id: "2023hokkaido",
    title: "北海道旅行（札幌・小樽・苫小牧、2023/1/13–15）",
    data: data2023hokkaido,
  },
  {
    id: "2022kyushu",
    title: "九州旅行（長崎・福岡、2022/2/21–25）",
    data: data2022kyushu,
  },
  {
    id: "210301ysfh",
    title: "卒業式前日（横浜サイエンスフロンティア高校、2021/3/1）",
    data: data210301ysfh,
  },
  {
    id: "2023setouchi",
    title: "瀬戸内旅行（倉敷・岡山・直島・小豆島・姫路、2023/3/12–15）",
  },
  { id: "210217mot", title: "東京都現代美術館（2022/2/17）" },
  {
    id: "tokyo2020",
    title: "東京オリンピック開会式・聖火・閉会式（2021/8）",
  },
];
