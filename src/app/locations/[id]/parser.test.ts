import { Transportation, parseTransportation } from "./parser";

it("移動データをパースできるか", () => {
  const data = `
# 鶴見散歩

- date: 2024-01-01

## 鶴見
- date: 2024-01-01T06:22:00+09:00

## 鶴見小野

鶴見線はいいですね〜〜

ローカル路線

## ふれ〜ゆ

- date: 2024-01-01T09:16:00+09:00
プール

## 海芝浦

![海芝浦駅](https://example.com/image0.webp)

![京浜工業地帯](https://example.com/image1.webp)
*ホームからは京浜工業地帯が一望できる*
`;

  const result = parseTransportation(data);
  const expected: Transportation = {
    title: "鶴見散歩",
    date: "2024-01-01",
    checkins: [
      {
        location: "鶴見",
        datetime: new Date("2024-01-01T06:22:00+09:00"),
        photos: [],
        description: "",
      },
      {
        location: "鶴見小野",
        photos: [],
        description: "鶴見線はいいですね〜〜\nローカル路線",
      },
      {
        location: "ふれ〜ゆ",
        datetime: new Date("2024-01-01T09:16:00+09:00"),
        photos: [],
        description: "プール",
      },
      {
        location: "海芝浦",
        photos: [
          {
            src: "https://example.com/image0.webp",
            alt: "海芝浦駅",
          },
          {
            src: "https://example.com/image1.webp",
            alt: "京浜工業地帯",
            caption: "ホームからは京浜工業地帯が一望できる",
          },
        ],
        description: "",
      },
    ],
  };
  expect(result).toEqual(expected);
});
