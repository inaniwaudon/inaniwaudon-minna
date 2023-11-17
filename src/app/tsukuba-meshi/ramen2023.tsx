import styled from 'styled-components';
import Restaurant from '@/components/Restaurant';
import Page from '@/components/common/PageWrapper';
import PageAnchor from '@/components/common/PageAnchor';
import { ramenInfos } from '@/const/restaurant';

const Main = styled.main`
  line-height: 1.8;
`;

const Section = styled.section`
  border-top: solid 1px #ccc;
`;

const Index = () => {
  const title = 'つくば らーめん 10 選 2023';

  return (
    <Page title={title}>
      <Main>
        <h1>{title}</h1>
        <p>
          らーめん激戦区・つくばのおすすめらーめん 10 選をご紹介！！
          王道から隠れた名店まで、東西南北の厳選らーめんを独断と偏見でお届けします。
          <br />
          <PageAnchor href="/docs/tsukuba-ramen2023.pdf">PDF 版（1.2 MB）</PageAnchor>
        </p>
        <p>
          <PageAnchor href="/tsukuba-meshi">つくばらーめん・飲食店情報</PageAnchor>
        </p>
        <Section>
          <Restaurant
            title="01 イチカワ"
            description="行列のできる人気店。煮干しの旨味が溶け出した濃厚出汁がストレート麺と調和して至高の味わいへ。出汁に使ったバラチャーシューや味玉も美味。"
            place="茨城県つくば市天久保 2-9-2"
            date="月火水木金土 11:30–14:00（祝日定休）"
            maps="https://goo.gl/maps/XNR9e6mQEqaHL2HYA"
            tel="029-850-5200"
            twitter="ikou246"
          />
          <Restaurant
            title="02 いっとく"
            description="土浦学園線に面するらーめん屋。独特の焦がしチャーシューが絶品。重層的なしょうゆベースのスープが中太縮れ麺と絶妙に絡み合う。"
            place="茨城県つくば市苅間 106-2"
            date="月水木金土日 11:00–15:00, 17:30–21:00"
            maps="https://goo.gl/maps/ZB1E7Qaogh7BMDtp6"
            instagram="ramen.ittoku.tsukuba"
          />
          <Restaurant
            title="03 麺屋とどろき"
            description="一の矢を抜けた先にある、燕三条系のらーめん屋。煮干し、背脂、塩味の効いたラーメンと太麺の見事な組み合わせ。岩のりは増量必至。わさび茶漬けを〆に。"
            place="茨城県つくば市花畑 3 丁目 12-8"
            date="火水木金土 12:00–14:00, 18:00–22:00 日 12:00–15:00"
            maps="https://goo.gl/maps/3tyzM2GyA4Dwe4K47"
            instagram="todoroki_men"
          />
          <Restaurant
            title="04 異国龍"
            description="ジロリアンでなくとも食欲を唆られる二郎系ラーメン。山盛りのシャキッとした野菜を食べ終えると、癖のない背脂スープとご対面。二郎系以外にも種類が充実、是非通い詰めたい。"
            place="茨城県つくば市天久保 2 丁目 20-7 103 号"
            date="火水木金土日 11:30–14:30, 17:30–22:00（第 2 火曜定休）"
            maps="https://goo.gl/maps/dYKXL6de7TPorsEf8"
            tel="029-845-6194"
            twitter="ikokuryu"
          />
          <Restaurant
            title="05 七福軒"
            description="濃厚で丁寧なスープが香る、純鯛そばが「推し麺」のらーめん屋。緑黄色のエスカルゴバターをトッピングすれば、洋風への味変も愉しめる。油そばやチャーシュー丼も外せない。"
            place="茨城県つくば市天久保 1 丁目 6-14"
            date="月火水木金土 11:00–14:00, 18:00–22:00 日 11:00–14:30, 17:30–21:00"
            maps="https://goo.gl/maps/boAecjJbxrygS1x46"
            tel="029-893-4799"
            twitter="shichifukuken"
          />
          <Restaurant
            title="06 麺や 蒼 AOI"
            description="クリーミーなスープと平打太ストレート麺が特徴。看板の海老香味らーめんは味噌と海老のコンビネーションが抜群。塩系も絶品。締めにはチーズリゾットを。"
            place="茨城県つくば市竹園 2 丁目 6-10"
            date="月火木金土日 11:30–14:30, 17:30–21:00（祝日は営業、翌日振替）"
            maps="https://goo.gl/maps/hhbwY3R3LuiF3pr27"
            tel="029-856-5585"
            twitter="MUSOU_AOI"
          />
          <Restaurant
            title="07 油虎"
            description="つくばで珍しい油そばを提供するのは、無限遠点付近の行列のできる名店。ガツンとした味付けは学生からも大人気。マヨネーズ・刻みニンニク・食べるラー油も無料。"
            place="茨城県つくば市筑穂 1 丁目 1-13"
            date="11:30–14:20, 17:30–22:20（不定休）"
            maps="https://goo.gl/maps/C1C4W1ojMdb1stx79"
            twitter="abutora_tsukuba"
          />
          <Restaurant
            title="08 鬼者語"
            description="味わいから盛り付けに至るまで芸術的な、完成された一杯。スープ無しで楽しめる替え玉を頼めば、一度で二度味わえる楽しさが。あの芛堂寺もここから派生した。"
            place="茨城県つくば市榎戸 685-5"
            date="月火水金土日 11:00–14:30, 17:30–21:00"
            maps="https://goo.gl/maps/4EsTdjpaTv428rGz8"
            twitter="onimonogatari_"
          />
          <Restaurant
            title="09 鶏々"
            description="店名通り鶏つけ麺が絶品。モチモチとした太麺が、鶏と魚介出汁の濃厚なつけ汁に絡み合う。無料で麺大盛 400g で満腹に。餃子の美味しさも格別。"
            place="つくば市天久保 2 丁目 11-10"
            date="月水木金土日 11:30–14:30, 18:00–23:00"
            maps="https://goo.gl/maps/ceSExQ9CJcRie2ndA"
            tel="029-851-1925"
            twitter="i_toridori"
          />
          <Restaurant
            title="10 必道"
            description="鶏・豚・しじみから丁寧に出汁を取った極上の醤油スープに食指が動く。細麺。学生証提示で大盛 or 味玉サービス。まかない丼で更に満腹。"
            place="茨城県つくば市柴崎 1050-1"
            date="月火水金土日 11:00–14:00（LO）, 18:00–20:30（LO）"
            maps="https://goo.gl/maps/sxDXJHrZrWBe7ACx6"
            twitter="Dark_Horse0331"
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
    </Page>
  );
};

export default Index;
