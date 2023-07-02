import gitHubIcon from '@/assets/icons/github.svg';
import hatenablogIcon from '@/assets/icons/hatenablog.svg';
import misskeyIcon from '@/assets/icons/misskey.png';
import noteIcon from '@/assets/icons/note.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import zennIcon from '@/assets/icons/zenn.svg';

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
  icon: {
    url: string;
    scale: number;
  };
}

export const photos: Photo[] = [
  { id: 'kiroro', title: 'キロロ' },
  { id: 'kirigirisu', title: 'キリギリス' },
  { id: '2023hokkaido', title: '北海道旅行（札幌・小樽・苫小牧、2023/1/13–15）' },
  { id: '2022kyushu', title: '九州旅行（長崎・福岡、2022/2/21–25）' },
  {
    id: '210301ysfh',
    title: '卒業式前日（横浜サイエンスフロンティア高校、2021/3/1）',
  },
  {
    id: '2023setouchi',
    title: '瀬戸内旅行（倉敷・岡山・直島・小豆島・姫路、2023/3/12–15）',
    deleted: true,
  },
  { id: '210217mot', title: '東京都現代美術館（2022/2/17）', deleted: true },
  {
    id: 'tokyo2020',
    title: '東京オリンピック開会式・聖火・閉会式（2021/8）',
    deleted: true,
  },
];

export const links: Link[] = [
  {
    platform: 'Twitter',
    name: '@kyoto_inaniwa',
    url: 'https://twitter.com/kyoto_inaniwa',
    color: '#1da1f2',
    icon: {
      url: twitterIcon.src,
      scale: 1.0,
    },
  },
  {
    platform: 'GitHub',
    name: 'inaniwaudon',
    url: 'https://github.com/inaniwaudon',
    color: '#171515',
    icon: {
      url: gitHubIcon.src,
      scale: 1.1,
    },
  },
  {
    platform: 'はてなブログ',
    name: 'いなにわうどん',
    url: 'https://soudakyoto-ikou.hatenadiary.jp',
    color: '#333',
    icon: {
      url: hatenablogIcon.src,
      scale: 1.6,
    },
  },
  {
    platform: 'Zenn',
    name: 'inaniwaudon',
    url: 'https://zenn.dev/inaniwaudon',
    color: '#3ea8ff',
    icon: {
      url: zennIcon.src,
      scale: 1.0,
    },
  },
  {
    platform: 'Misskey',
    name: '@inaniwaudon@misskey.io',
    url: 'https://misskey.io/@inaniwaudon',
    color: '#55c500',
    icon: {
      url: misskeyIcon.src,
      scale: 1.6,
    },
  },
  {
    platform: 'note',
    name: 'いなにわうどん',
    url: 'https://note.com/soudakyoto_ikou',
    color: 'rgba(44, 182, 150)',
    icon: {
      url: noteIcon.src,
      scale: 1.7,
    },
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
