interface Photo {
  id: string;
  title: string;
  deleted?: boolean;
}

interface Link {
  platform: string;
  name: string;
  url: string;
  color: string;
}

export const photos: Photo[] = [
  { id: 'kiroro', title: 'キロロ' },
  { id: '2023hokkaido', title: '北海道旅行（札幌・小樽・苫小牧、2022/01/13―15）' },
  { id: '2022kyushu', title: '九州旅行（長崎・福岡、2022/02/21―25）' },
  {
    id: '210301ysfh',
    title: '卒業式前日（横浜サイエンスフロンティア高校、2022/03/01）',
  },
  {
    id: 'tokyo2020',
    title: '東京オリンピック開会式・聖火・閉会式（2021/08）',
    deleted: true,
  },
  { id: '210217mot', title: '東京都現代美術館（2022/02/17）', deleted: true },
];

export const links: Link[] = [
  {
    platform: 'Twitter',
    name: '@kyoto_mast21',
    url: 'https://twitter.com/kyoto_mast21',
    color: '#1da1f2',
  },
  {
    platform: 'GitHub',
    name: 'inaniwaudon',
    url: 'https://github.com/inaniwaudon',
    color: '#171515',
  },
  {
    platform: 'はてなブログ',
    name: 'いなにわうどん',
    url: 'https://soudakyoto-ikou.hatenadiary.jp',
    color: '#333',
  },
  {
    platform: 'Zenn',
    name: 'inaniwaudon',
    url: 'https://zenn.dev/inaniwaudon',
    color: '#3ea8ff',
  },
  {
    platform: 'Qiita',
    name: 'inaniwaudon',
    url: 'ttps://qiita.com/inaniwaudon',
    color: '#55c500',
  },
];

export const nengajo = [
  {
    year: 2022,
    src: './assets/nengajo2022.webp',
    width: 2551,
    height: 3776,
    alt: `「あけましておめでとうございます。旧年中は大変お世話になりました。本年もどうぞよろしくお願い申し上げます。の文言が左上に添えられています。
左下で黄色いまんまるのぬいぐるみが微笑んでいます。
背後にはクリスマスイルミネーションに照らされた東京駅が写っており、色鮮やかな花火が空を夜空を彩っています。`,
  },
  {
    year: 2023,
    src: './assets/nengajo2023.webp',
    width: 4196,
    height: 2835,
    alt: `「あけましておめでとうございます。旧年中は大変お世話になりました。今年もどうぞよろしくお願い申し上げます。」の文言が左上に添えられています。
下部には、細長く耳が伸びた黄色いまんまるのぬいぐるみが微笑んでいます。
背後には色鮮やかに桜が咲いており、春の予感を到来させます。`,
  },
];
