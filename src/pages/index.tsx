import Link from "next/link";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <main className={styles.main}>
      <h1>いなにわうどん.みんな</h1>
      <ul>
        <li>
          <Link href="/photo/kiroro">キロロの写真</Link>
        </li>
        <li>
          <Link href="/photo/tokyo2020">
            東京オリンピック開会式・聖火・閉会式 （2021/8）
          </Link>
        </li>
        <li>
          <Link href="/photo/mot-eugene-kubota">
            東京都現代美術館（2022/2/17）
          </Link>
        </li>
        <li>
          <Link href="/photo/2202kyushu">
            九州旅行（長崎・福岡、2022/2/21―25）
          </Link>
        </li>
      </ul>
      <h2>外部リンク</h2>
      <ul>
        <li>
          Twitter：
          <a href="https://twitter.com/kyoto_mast21/">
            いなにわうどん（@kyoto_mast21）
          </a>
        </li>
        <li>
          GitHub：
          <a href="https://github.com/inaniwaudon/">
            いなにわうどん（inaniwaudon）
          </a>
        </li>
        <li>
          はてなブログ：
          <a href="https://soudakyoto-ikou.hatenadiary.jp/">
            いなにわうどん（うどんの話に見せかけて技術的な話をしたい（できない））
          </a>
        </li>
        <li>
          Qiita：
          <a href="https://github.com/inaniwaudon/">inaniwaudon - Qiita</a>
        </li>
      </ul>
    </main>
  );
};

export default Index;
