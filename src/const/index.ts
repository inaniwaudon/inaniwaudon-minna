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
  { id: '2022kyushu', title: '九州旅行（長崎・福岡、2022/2/21―25）' },
  {
    id: '210301ysfh',
    title: '卒業式前日（横浜サイエンスフロンティア高校、2022/3/1）',
  },
  {
    id: 'tokyo2020',
    title: '東京オリンピック開会式・聖火・閉会式 （2021/8）',
    deleted: true,
  },
  { id: '210217mot', title: '東京都現代美術館（2022/2/17）', deleted: true },
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
