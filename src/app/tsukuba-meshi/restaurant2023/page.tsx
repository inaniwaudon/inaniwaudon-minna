import { styled } from '@linaria/react';

import Restaurant from './Restaurant';
import Anchor from '@/components/common/Anchor';
import PageWrapper from '@/components/common/PageWrapper';

const Main = styled.main`
  line-height: 1.8;
`;

const Section = styled.section`
  border-top: solid 1px #ccc;
`;

const Page = () => {
  const title = 'つくば おすすめ飲食店 2023';

  return (
    <PageWrapper title={title} path="/tsukuba-meshi/restaurant2023">
      <Main>
        <h1>{title}</h1>
        <p>
          数多の飲食店が立ち並ぶ筑波大学周辺。安くてボリューム満点のお店から個性溢れる店舗まで、「ここなら間違いなし」な飲食店をラインナップ！
          <br />
          <Anchor href="/docs/tsukuba-meshi2023.pdf">PDF 版（3.4 MB）</Anchor>
        </p>
        <p>
          <Anchor href="/tsukuba-meshi">つくばらーめん・飲食店情報</Anchor>
        </p>
        <Restaurant
          title="cox"
          description="小野崎の隠れ家的おしゃれカフェ"
          place="小野崎 448-1"
          maps="https://goo.gl/maps/dNEvozU1kTYnhRfN8"
          tel="029-893-6075"
          web="https://shingoster.com/"
          instagram="cox_shingosterliving"
        />

        <Section>
          <h2>つくば 3 大重食</h2>
          <p>
            「つくば 3 大重食」と称される 3 店舗。普通盛りでも通常のお店の 1.5
            倍は盛られている大迫力っぷり。お腹に余裕をもたせて向かいたい。
          </p>
          <Restaurant
            title="クラレット"
            description="天まで積み上がる肉天重。これで並盛・540 円！！"
            place="天久保 3-10-8"
            maps="https://goo.gl/maps/mU3gcwYTvJTMSew1A"
            tel="029-852-0425"
          />
          <Restaurant
            title="RanRan"
            description="ミニ BIG 丼（580 円）サイズ選択にはご注意を"
            place="春日 4-4-18"
            maps="https://goo.gl/maps/8i2Kut8E2r8PBZnZ9"
            twitter="RanRan_tsukuba"
          />
          <Restaurant
            title="夢屋"
            description="色とりどりで毎日飽きない日替わり定食（770 円）"
            place="春日 4-4-5"
            maps="https://goo.gl/maps/AerQx4iETba9SwFL6"
            tel="029-858-0668"
            instagram="yumeya_tsukuba"
          />
        </Section>

        <Section>
          <h2>街の中華屋さん</h2>
          <Restaurant
            title="百香亭"
            description="「ガンツボール」の名で愛される黒酢豚が名物"
            place="天久保 3-15-1"
            maps="https://goo.gl/maps/Z3XqVHxHUqz9AePTA"
            tel="029-858-4360"
            web="http://www.hyakkoutei.com/"
          />
          <Restaurant
            title="ファッションラーメン 大元"
            description="中華屋の素朴ならーめんが夜中の寒空に染みる"
            place="天久保 1-6-15"
            maps="https://goo.gl/maps/ntn9dMQ5fVpwH67u5"
            tel="0029-851-1925"
          />
          <Restaurant
            title="福軒餃子"
            description="激辛名物・炎の旨辛唐揚げはやみつき間違いなし！"
            place="天久保 3-11-1"
            maps="https://goo.gl/maps/h8eMiMDj51cSMt1G6"
            tel="029-846-3202"
          />
          <Restaurant
            title="北方園"
            description="ウーロン唐揚げが名物。店内には少し驚くかも……？"
            place="天久保 1-10-18 リッチモンド 1 番街 2F"
            maps="https://goo.gl/maps/cfsC2pRCBxfnyWPp8"
            tel="029-858-7900"
            twitter="ujavtUPiM039hsl"
          />
        </Section>

        <Section>
          <h2>
            <ruby>
              個<rt>・</rt>性<rt>・</rt>
            </ruby>
            あふれる名店
          </h2>
          <p>だから行きたい通いたい</p>
          <Restaurant
            title="ZE YO."
            description="学生証提示でコロッケ丼 10 円"
            place="天久保 2-6-1"
            maps="https://goo.gl/maps/SP1P3pTK9m54iiHFA"
            tel="029-854-1778"
            web="https://zeyo298.jimdofree.com/"
            twitter="ZEYO298"
            instagram="zeyo.298"
          />
          <Restaurant
            title="こおひいはうす らんぷ"
            description="むかしなつかし喫茶店"
            place="天久保 3-10-17"
            maps="https://goo.gl/maps/aFchzFhAynmcR9Nz5"
            tel="029-851-4812"
            instagram="lamp_tsukuba"
          />
          <Restaurant
            title="盛清六"
            description="らーめん＆カレーのお店。優勝セットで優勝！"
            place="天久保 2-9-2 リッチモンド 2 番街"
            maps="https://goo.gl/maps/bt78W9kE4FEVjzCL6"
            tel="029-875-5564"
            twitter="moriseirock"
          />
          <Restaurant
            title="薔薇絵亭"
            description="優雅な店舗で家庭的なロシア料理"
            place="天久保 2-7-22"
            maps="https://goo.gl/maps/Xsu2oZuYMm9aoqYc6"
            tel="029-852-4568"
          />
          <Restaurant
            title="純平"
            description="スタミナ満点サクサクとんかつ"
            place="天久保 1-10-4"
            maps="https://goo.gl/maps/5YvA8ocXU2BMDVee9"
            tel="029-858-2520"
          />
        </Section>

        <Section>
          <h2>天久保</h2>
          <p>飲食店密集エリアならココ！</p>
          <Restaurant
            title="ドルフ"
            description="名物ガーリックチキンライス"
            place="天久保 3-8-6"
            maps="https://goo.gl/maps/9FZkQaeNPTBFnbop7"
            tel="029-845-7434"
            twitter="dorf_tsukuba"
          />
          <Restaurant
            title="ジュエル オブ インディア"
            description="インド人店主が営むナン食べ放題の本格派カレー"
            place="天久保 3-10-16"
            maps="https://goo.gl/maps/Z5tP1diVwhMEZMC96"
            tel="029-828-5540"
            web="https://jewel-of-india.com/"
            twitter="jewel_of_india_"
          />
          <Restaurant
            title="益さん"
            description="豪華絢爛・刺身定食 ご飯おかわり無料"
            place="天久保 3-14-11"
            maps="https://goo.gl/maps/DTk4wLd81X3PRneh9"
            tel="029-897-3105"
            twitter="meshiya__massan"
            instagram="meshiya__massan"
          />
        </Section>
        <Section>
          <Restaurant
            title="本部棟レストラン"
            description="学内にも実はありますレストラン"
            place="天王台 1-1-1 筑波大学本部棟 1F"
            maps="https://goo.gl/maps/RKUTkY8nvaTkW7Vi6"
            tel="029-858-0832"
            web="https://kosei.sec.tsukuba.ac.jp/store/store_41"
          />
        </Section>
      </Main>
    </PageWrapper>
  );
};

export default Page;
