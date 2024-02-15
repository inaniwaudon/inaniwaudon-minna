import markdown2021autumn from "./2021autumn.md";
import markdown2021spring from "./2021spring.md";
import markdown2022autumn from "./2022autumn.md";
import markdown2022spring from "./2022spring.md";
import markdown2023autumn from "./2023autumn.md";
import markdown2023spring from "./2023spring.md";

export const classImpressions: {
  year: number;
  term: "spring" | "autumn";
  description: string;
  article: string;
}[] = [
  {
    year: 2021,
    term: "spring",
    description: "ワクワクドキドキ初めての筑波大学",
    article: markdown2021spring,
  },
  {
    year: 2021,
    term: "autumn",
    description: "筑波の秋は綺麗です",
    article: markdown2021autumn,
  },
  {
    year: 2022,
    term: "spring",
    description: "いやーマジで苦しかった春 AB モジュールが終わりましたねー",
    article: markdown2022spring,
  },
  {
    year: 2022,
    term: "autumn",
    description: "飽きがきた秋学期",
    article: markdown2022autumn,
  },
  {
    year: 2023,
    term: "spring",
    description: "春はいつだって気持ち新たに",
    article: markdown2023spring,
  },
  {
    year: 2023,
    term: "autumn",
    description: "学群最後の授業",
    article: markdown2023autumn,
  },
];
