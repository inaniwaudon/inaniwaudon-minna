import gitHubIcon from "@/assets/icons/github.svg";
import hatenablogIcon from "@/assets/icons/hatenablog.svg";
import keybaseIcon from "@/assets/icons/keybase.svg";
import misskeyIcon from "@/assets/icons/misskey.webp";
import noteIcon from "@/assets/icons/note.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import zennIcon from "@/assets/icons/zenn.svg";

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
    platform: "Twitter",
    name: "@kyoto_inaniwa",
    url: "https://twitter.com/kyoto_inaniwa",
    color: "#1da1f2",
    icon: {
      url: twitterIcon.src,
      scale: 1.0,
    },
  },
  {
    platform: "GitHub",
    name: "inaniwaudon",
    url: "https://github.com/inaniwaudon",
    color: "#171515",
    icon: {
      url: gitHubIcon.src,
      scale: 1.1,
    },
  },
  {
    platform: "はてなブログ",
    name: "いなにわうどん",
    url: "https://soudakyoto-ikou.hatenadiary.jp",
    color: "#333",
    icon: {
      url: hatenablogIcon.src,
      scale: 1.6,
    },
  },
  {
    platform: "Zenn",
    name: "inaniwaudon",
    url: "https://zenn.dev/inaniwaudon",
    color: "#3ea8ff",
    icon: {
      url: zennIcon.src,
      scale: 1.0,
    },
  },
  {
    platform: "Misskey",
    name: "@inaniwaudon@misskey.io",
    url: "https://misskey.io/@inaniwaudon",
    color: "#55c500",
    icon: {
      url: misskeyIcon.src,
      scale: 1.6,
    },
  },
  {
    platform: "note",
    name: "いなにわうどん",
    url: "https://note.com/soudakyoto_ikou",
    color: "rgba(44, 182, 150)",
    icon: {
      url: noteIcon.src,
      scale: 1.7,
    },
  },
  {
    platform: "Keybase",
    name: "inaniwaudon",
    url: "https://keybase.io/inaniwaudon",
    color: "#33a0ff",
    icon: {
      url: keybaseIcon.src,
      scale: 1.1,
    },
  },
];
