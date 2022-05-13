import CustomList from "../components/CustomList";
import PageAnchor from "../components/PageAnchor";
import styles from "./index.module.scss";

const Index = () => {
  const photos: { [key in string]: { title: string; deleted?: boolean } } = {
    "2022kyushu": {
      title: "九州旅行（長崎・福岡、2022/2/21―25）",
    },
    "210301ysfh": {
      title: "卒業式前日（横浜サイエンスフロンティア高校、2022/3/1）",
    },
    kiroro: {
      title: "キロロの写真",
    },
    tokyo2020: {
      title: "東京オリンピック開会式・聖火・閉会式 （2021/8）",
      deleted: true,
    },
    "210217mot": {
      title: "東京都現代美術館（2022/2/17）",
      deleted: true,
    },
  };

  return (
    <main className={styles.main}>
      <h1>いなにわうどん.みんな</h1>
      <ul>
        {Object.entries(photos).map(([url, photo]) => (
          <CustomList>
            {photo.deleted ? (
              <del>{photo.title}</del>
            ) : (
              <PageAnchor href={`/photo/${url}`}>{photo.title}</PageAnchor>
            )}
          </CustomList>
        ))}
      </ul>

      <ul>
        <CustomList>
          <PageAnchor href="https://inaniwaudon.github.io/spring-2022/">
            桜が舞い上がるページ
          </PageAnchor>
        </CustomList>
        <CustomList>
          <PageAnchor href="https://exagree.netlify.app/">
            超便乗ツール
          </PageAnchor>
        </CustomList>
        <CustomList>
          <PageAnchor href="https://inaniwaudon.github.io/hoshiimo/">
            ほしいものリスト
          </PageAnchor>
        </CustomList>
        <CustomList>
          <PageAnchor href="/kdb">Kdbもどき関連リンク</PageAnchor>
        </CustomList>
        <CustomList>
          <PageAnchor href="https://www.notion.so/learnutsukuba/2021-78f1f36654ad4f7ca6c5d32ef6d40276">
            2021年度 授業感想
          </PageAnchor>
        </CustomList>
      </ul>

      <h2>外部リンク</h2>
      <ul>
        <CustomList>
          Twitter：
          <PageAnchor href="https://twitter.com/kyoto_mast21/">
            いなにわうどん（@kyoto_mast21）
          </PageAnchor>
        </CustomList>
        <CustomList>
          GitHub：
          <PageAnchor href="https://github.com/inaniwaudon/">
            いなにわうどん（inaniwaudon）
          </PageAnchor>
        </CustomList>
        <CustomList>
          はてなブログ：
          <PageAnchor href="https://soudakyoto-ikou.hatenadiary.jp/">
            いなにわうどん（うどんの話に見せかけて技術的な話をしたい（できない））
          </PageAnchor>
        </CustomList>
        <CustomList>
          Qiita：
          <PageAnchor href="https://qiita.com/inaniwaudon/">
            inaniwaudon - Qiita
          </PageAnchor>
        </CustomList>
      </ul>
    </main>
  );
};

export default Index;
