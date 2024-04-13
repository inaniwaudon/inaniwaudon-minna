import { styled } from "@linaria/react";
import { Metadata } from "next";

import Anchor from "@/components/common/Anchor";
import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";

const Main = styled.main`
  max-width: 800px;
`;

const Paragraph = styled.p`
  margin: 0 0 12px 0;
`;

const title = "about";

export const metadata: Metadata = {
  title: title,
};

const Page = () => {
  return (
    <PageWrapper title={title} path="/about">
      <PageTitle>about</PageTitle>
      <Main>
        <H3>趣味・好きなもの</H3>
        <Paragraph>
          プログラミング（特に Web
          など）、組版・タイポグラフィ、グラフィックデザイン、写真、らーめん巡り、ぬいぐるみ
        </Paragraph>
        <H3>好きな食べ物・飲み物</H3>
        <Paragraph>
          かりんとう、回鍋肉、らーめん、キーバパンチ、マックスコーヒー、安い缶チューハイ
        </Paragraph>
        <H3>好きな場所</H3>
        <Paragraph>
          自宅、川崎、東扇島、横浜、鶴見、清澄白河、海浜幕張、秋葉原–神保町周辺、京都、金沢
        </Paragraph>
        <H3>好きな言語・技術</H3>
        <Paragraph>C#、JavaScript、TypeScript、PDF、OpenType</Paragraph>
        <H3>好きな書体</H3>
        <Paragraph>
          石井中明朝オールドスタイルかな（MMOKL）、艶かな、ゴナ、本蘭明朝、新ゴ、見出ゴMB31、文游明朝体、ネオツデイ、解ルナ
        </Paragraph>
        <H3>好きなアニメ・漫画</H3>
        <Paragraph>
          「まちカドまぞく」、「やはり俺の青春ラブコメはまちがっている。」、「ぼっち・ざ・ろっく！」、「青春ブタ野郎」シリーズ、「クズの本懐」、「デッドデッドデーモンズデデデデストラクション」、「安達としまむら」、「冴えない彼女の育てかた」
        </Paragraph>
        <H3>好きな曲</H3>
        <Paragraph>
          エレファントカシマシ「今宵の月のように」「桜の花、舞い上がる道を」、ABBA「Thank
          you for the music」、中島みゆき「EAST
          ASIA」、尾崎豊「Forget-me-not」、雪ノ下雪乃（早見沙織）＆由比ヶ浜結衣（東山奈央）「エブリデイワールド」ほか
        </Paragraph>
        <H3>好きな季節</H3>
        <Paragraph>春に次いで秋</Paragraph>
        <H3>持っているドメイン</H3>
        <Paragraph>いなにわうどん.みんな、yokohama.dev</Paragraph>
        <H3>ひとこと</H3>
        <Paragraph>
          最近{" "}
          <Anchor href="https://fujifilm-x.com/ja-jp/products/cameras/x-s20/">
            カメラ
          </Anchor>{" "}
          を買いました。春が待ち遠しいです。
        </Paragraph>
      </Main>
    </PageWrapper>
  );
};

export default Page;
