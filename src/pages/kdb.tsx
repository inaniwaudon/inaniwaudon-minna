import Link from "next/link";
import styles from "./kdb.module.scss";

const Index = () => {
  return (
    <main className={styles.main}>
      <h1>KdBもどき関連リンク</h1>
      <ul>
        <li>
          <a href="https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/">
            筑波大学 KdBっぽいなにか
          </a>
        </li>
        <li>
          <a href="https://github.com/Make-IT-TSUKUBA/alternative-tsukuba-kdb/">
            Make-IT-TSUKUBA/alternative-tsukuba-kdb (GitHub)
          </a>
          <br />
          Issues, Pull request など、お待ちしています
        </li>
        <li>
          <a href="https://www.mast.tsukuba.ac.jp/lecture/timetable.html">
            カリキュラム　時間割｜筑波大学情報学群　情報メディア創成学類／University
            of Tsukuba
          </a>
        </li>
      </ul>

      <h2>発表</h2>
      <ul>
        <li>
          <a href="https://conf2021.axies.jp/program/_file/20006_000.pdf">
            オープンソースでLMSをより使いやすく～ユーザによるLMSの機能拡張～
          </a>
          <br />
          （大学ICT推進協議会（AXIES）年次大会・2021年12月15日・幕張メッセ）
          <br />
          <Link href="/docs/axies-kdb.pdf">発表資料（PDF）</Link>
        </li>
        <li>
          <a href="https://www.k-of.jp/2021/session/tsukuba/">
            筑波大シラバス「KdBもどき」を作ったその後どうなった？
          </a>
          <br />
          （関西オープンフォーラム2021・2021年10月19日・オンライン）
        </li>
        <li>
          <a href="https://laboratoryautomation.connpass.com/event/206175/">
            授業科目DB代替システム「KdBもどき」の開発と運用
          </a>
          <br />
          （Laboratory Automation月例勉強会・2021年5月22日・オンライン）
        </li>
      </ul>

      <h2>記事掲載など</h2>
      <ul>
        <li>
          <a href="https://www.asahi.com/articles/DA3S14933116.html">
            （ひと）和田優斗さん　筑波大学の授業データベースの「もどき」を開発した学生
          </a>
          <br />
          （朝日新聞 朝刊・2021年6月9日）
        </li>
        <li>
          <a href="https://www.tsukuba.ac.jp/about/public-newspaper/pdf/363.pdf">
            「授業データベース不具合履修登録期間中に９日間使えず」
            <br />
            「Who's Who? KｄBの代替システムを3時間半で開発 和田
            優斗さん（メ創1年）」
          </a>
          <br />
          （筑波大学新聞 第363号・2021年5月24日）
        </li>

        <li>
          <a href="https://www.itmedia.co.jp/news/articles/2104/13/news126.html">
            筑波大の授業DBがメンテ、困った新入生が代替ツールを“爆速開発”　その背景を本人に聞いた
          </a>
          <br />
          （ITmedia・2021年4月13日 18時17分）
        </li>
        <li>
          <a href="https://www.itmedia.co.jp/news/articles/2104/30/news147.html">
            筑波大1年生が爆速開発した“オレオレ授業DB”が大学公認に　有志で運用を継続する方針
          </a>
          <br />
          （ITmedia・2021年5月1日 10時00分）
        </li>
        <li>
          <a href="https://nlab.itmedia.co.jp/nl/articles/2104/12/news136.html">
            筑波大学の履修ツールが年度早々長期メンテに→“新入生”が代替システムを一晩で開発し「強すぎる」と動揺広がる
          </a>
          <br />
          （ねとらぼ・2021年4月12日 19時15分）
        </li>
        <li>
          <a href="https://getnews.jp/archives/2986186">
            「これは有能」「なろう系を地で行っている」　履修ツールのメンテナンスを受けて筑波大学新入生が代替システムを短時間で開発
          </a>
          <br />
          （ガジェット通信・2021年4月13日 09時00分）
        </li>
        <li>
          <a href="https://it.srad.jp/story/21/04/15/0214257/">
            筑波大、新学期早々に授業データベースをメンテ入りに。新入生が高機能な代替サービスを作ってしまう
          </a>
          <br />
          （スラド・2021年4月16日 08時06分）
        </li>
        <li>
          <a href="https://chanto.jp.net/childcare/popular/248816/">
            「親もネットのコアユーザー」筑波大学の科目検索システムを一夜で開発した「スーパー新入生」の素顔
          </a>
          <br />
          （CHANTO Web・2021年07月19日）
        </li>
      </ul>
    </main>
  );
};

export default Index;
