import Link from "next/link";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <main className={styles.main}>
      <h1>いなにわうどん.みんな</h1>
      <ul>
        <li>
          <Link href="/photo/2202kyushu">
            九州旅行（長崎・福岡、2022/2/21―25）
          </Link>
        </li>
        <li>
          <Link href="/photo/210301ysfh">
            卒業式前日（横浜サイエンスフロンティア高校、2022/3/1）
          </Link>
        </li>
        <li>
          <del>キロロの写真</del>
        </li>
        <li>
          <del>東京オリンピック開会式・聖火・閉会式 （2021/8）</del>
        </li>
        <li>
          <del>東京都現代美術館（2022/2/17）</del>
        </li>
      </ul>

      <ul>
        <li>
          <a href="https://inaniwaudon.github.io/spring-2022/">
            桜が舞い上がるページ
          </a>
        </li>
        <li>
          <a href="https://exagree.netlify.app/">超便乗ツール</a>
        </li>
        <li>
          <a href="https://inaniwaudon.github.io/hoshiimo/">ほしいものリスト</a>
        </li>
        <li>
          <Link href="/kdb">Kdbもどき関連リンク</Link>
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
          <a href="https://qiita.com/inaniwaudon/">inaniwaudon - Qiita</a>
        </li>
      </ul>
    </main>
  );
};

export default Index;
