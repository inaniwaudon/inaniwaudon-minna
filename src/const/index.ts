import gitHubIcon from '@/assets/icons/github.svg';
import hatenablogIcon from '@/assets/icons/hatenablog.svg';
import keybaseIcon from '@/assets/icons/keybase.svg';
import misskeyIcon from '@/assets/icons/misskey.png';
import noteIcon from '@/assets/icons/note.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import zennIcon from '@/assets/icons/zenn.svg';

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
  {
    platform: 'Keybase',
    name: 'inaniwaudon',
    url: 'https://keybase.io/inaniwaudon',
    color: '#33a0ff',
    icon: {
      url: keybaseIcon.src,
      scale: 1.1,
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
