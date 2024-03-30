import { styled } from "@linaria/react";
import { Metadata } from "next";

import Restaurant from "@/app/tsukuba-meshi/Restaurant";
import Anchor from "@/components/common/Anchor";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { ramenInfos } from "./ramen";

const Main = styled.main`
  max-width: 800px;
`;

const Section = styled.section`
  border-top: solid 1px #ccc;
`;

const title = "つくば らーめん 10 選 2024";

export const metadata: Metadata = {
  title: title,
  description:
    "らーめん激戦区・つくばのおすすめらーめん店 10 選をご紹介！！ 隠れた名店を中心に、厳選らーめんを独断と偏見でお届けします。",
};

const Page = () => {
  return (
    <PageWrapper title={title} path="/tsukuba-meshi/ramen2024">
      <Main>
        <PageTitle>{title}</PageTitle>
        <p>
          らーめん激戦区・つくばのおすすめらーめん店 10 選をご紹介！！
          隠れた名店を中心に、厳選らーめんを独断と偏見でお届けします。
          <br />
          <Anchor href="/docs/tsukuba-ramen2024.pdf">PDF 版（1.5 MB）</Anchor>
        </p>
        <Section>
          <Restaurant
            title="01 煮干し中華そば イチカワ"
            description="開店前から行列の絶えない人気店。煮干しの旨味が溶け出した濃厚出汁がストレートな細麺と調和して至高の味わいへ。出汁に浸かったバラチャーシューや味玉も美味。"
            place="茨城県天久保 2 丁目 9-2 リッチモンド 2 番街 1F"
            date="11:30–材料切れ ／ 日曜、祝日定休"
            maps="https://goo.gl/maps/XNR9e6mQEqaHL2HYA"
            twitter="ikou246"
          />
          <Restaurant
            title="02 ラーメン いっとく"
            description="土浦学園線に面する、赤い看板のらーめん屋。唯一無二の焦がしチャーシューは柔らかで香ばしく、肉厚で絶品。重厚なしょうゆベースのスープが中太縮れ麺と絶妙に絡み合う。"
            place="茨城県つくば市苅間 106-2"
            date="11:00–15:00, 17:30–21:00 ／ 年中無休"
            maps="https://goo.gl/maps/ZB1E7Qaogh7BMDtp6"
            tel="029-850-5200"
            instagram="ramen.ittoku.tsukuba"
          />
          <Restaurant
            title="03 麺屋とどろき"
            description="一の矢を抜けた先にある、他に類をみない燕三条系のらーめん屋。煮干し、背脂、塩味が効いたラーメンと太麺の見事な組み合わせ。岩のりは増量必至。わさび茶漬けを〆に。"
            place="茨城県つくば市花畑 3 丁目 12-8"
            date="12:00–14:00, 18:00–21:00 ／ 月曜、木曜定休・日曜 15 時まで"
            maps="https://goo.gl/maps/3tyzM2GyA4Dwe4K47"
            instagram="todoroki_men"
          />
          <Restaurant
            title="04 盛清六"
            description="清六家の流れを汲む、らーめんとインド料理が楽しめる陽気な店。らーめん＋チャーハンの「優勝セット」は心満たされること間違いなし。カレーラーメンやチーズナン、もやし炒めも必見。"
            place="茨城県天久保 2 丁目 9-2 リッチモンド 2 番街 1F"
            date="17:00–02:00 ／ 月曜定休"
            maps="https://maps.app.goo.gl/srYuUs2kwf5Vv68v7"
            tel="029‐875‐5564"
            web="https://www.seirock-ya.jp/moriseiroku/"
            twitter="moriseirock"
          />
          <Restaurant
            title="05 七福軒"
            description="濃厚かつ丁寧なスープが香る純鯛そばが名物。エスカルゴバターを追加すれば洋風への味変も愉しめる。つけめんやチャーシュー丼も外せない。「本日の推し麺」の確認も忘れずに。"
            place="茨城県つくば市天久保 1 丁目 6-14"
            date="11:00–14:00, 18:00–22:00 ／ 日曜特別営業"
            maps="https://goo.gl/maps/boAecjJbxrygS1x46"
            twitter="shichifukuken"
          />
          <Restaurant
            title="06 麺や 蒼"
            description="濃厚かつクリーミーなスープと平打太ストレート麺が特徴。看板の「海老香味らーめん」は味噌と海老のコンビネーションが抜群。実は塩系も絶品。〆にはチーズリゾットをぜひ。"
            place="茨城県つくば市竹園 2 丁目 6-10"
            date="11:30–14:30, 17:30–21:00 ／ 水曜定休"
            maps="https://goo.gl/maps/hhbwY3R3LuiF3pr27"
            tel="029-856-5585"
            twitter="MUSOU_AOI"
          />
          <Restaurant
            title="07 油虎"
            description="つくばでは珍しい油そばを提供するのは、無限遠点の名店。ガツンとした味付けは学生から大人気。にんにく・ラー油・マヨネーズの無料トッピングとともに、追い飯も欠かせない。"
            place="茨城県つくば市筑穂 1 丁目 1-13"
            date="11:30–14:20, 17:30–22:20 ／ 不定休"
            maps="https://goo.gl/maps/C1C4W1ojMdb1stx79"
            tel="029-879-0105"
            twitter="abutora_tsukuba"
          />
          <Restaurant
            title="08 ファッションラーメン 大元"
            description="天久保一丁目で深夜に営む、昔ながらの中華屋さん。モツみそらーめんを筆頭に、素朴な一杯が冬の寒空の下で訪れた客の心を掴む。濃厚なスープはお酒との相性も抜群。"
            place="茨城県つくば市天久保 1 丁目 6-15"
            date="22:00–03:00 ／ 日曜定休"
            maps="https://maps.app.goo.gl/xJCuYrEEUeye3yqb7"
            twitter="daigen1955"
          />
          <Restaurant
            title="09 必道"
            description="鶏・豚・しじみから丁寧に出汁を取った「たまり醤油そば」。極上の醤油スープに食指が動く。麺は細く、食感も最高。学生証提示で大盛 or 味玉サービス。＋まかない丼で満腹。"
            place="茨城県つくば市柴崎 1050-1"
            date="11:00–14:00, 18:00–20:00 ／ 木曜定休"
            maps="https://goo.gl/maps/sxDXJHrZrWBe7ACx6"
            twitter="mennya_hit"
          />
          <Restaurant
            title="10 王道家直系家系ラーメン がく"
            description="昨年オープン。濃厚な家系らーめんを提供する本格派。うま味の詰まった豚骨スープが食欲を掻き立てる。「野菜ラーメン」の野菜ボリュームに驚愕。豊富な卓上調味料も注目。"
            place="茨城県つくば市学園の森 2 丁目 20–2"
            date="10:30–15:00 ／ 月曜、第二火曜定休"
            maps="https://maps.app.goo.gl/HR9A51PnK6h3zerWA"
            tel="029-869-8830"
            twitter="GAKUarai1"
          />
        </Section>
        <Section>
          <h2>つくばらーめん営業中</h2>
          <table>
            <tbody>
              {ramenInfos.map((info) => (
                <tr key={info.title}>
                  <td>{info.title}</td>
                  <td>{info.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </Main>
    </PageWrapper>
  );
};

export default Page;
