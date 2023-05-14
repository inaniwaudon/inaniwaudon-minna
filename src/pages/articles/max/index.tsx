import Head from 'next/head';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import compositions from '@/assets/max/compositions.webp';
import g2sanserif from '@/assets/max/g2sanserif.webp';
import logo from '@/assets/max/logo.svg';
import maxLogo from '@/assets/max/max-logo.webp';
import maxLogoAnalyze from '@/assets/max/max-logo-analyze.webp';
import maxMakuhariImage from '@/assets/max/max-makuhari.jpeg';
import maxRedImage from '@/assets/max/max-red.webp';
import maxTrace from '@/assets/max/max-trace.webp';
import scannerImage from '@/assets/max/scanner.webp';
import scannedImage from '@/assets/max/scanned.webp';
import tel from '@/assets/max/tel.webp';
import wave from '@/assets/max/wave.webp';
import Footer from '@/components/common/Footer';

const maxYellow = '#f9b900';
const maxBrown = '#3e2500';
const maxRed = '#c00';

const GlobalStyle = createGlobalStyle`
  body {
    color: #000;
    font-family: 'Noto Sans JP', sans-serif;
    background: ${maxYellow};
  }
`;

const Page = styled.div`
  width: 800px;
  margin: 32px auto;

  @media screen and (max-width: ${800 + 32 * 2}px) {
    width: calc(100% - 32px * 2);
    margin: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: ${800 + 32 * 2}px) {
    justify-content: center;
  }
`;

const SideNavigation = styled.nav`
  width: 160px;

  @media screen and (max-width: 800px) {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    color: ${maxBrown};
    padding: 6px 8px 8px 8px;

    &:hover {
      color: #fff;
      background: ${maxBrown};
    }
  }

  li + li {
    border-top: solid 1px ${maxBrown};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Content = styled.main`
  width: 600px;
`;

const H1 = styled.h1`
  margin: 0;
`;

const H2 = styled.h2`
  color: ${maxBrown};
  line-height: 1;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;

  &:before {
    width: 32px;
    height: 1px;
    content: '';
    margin-right: 8px;
    background: ${maxBrown};
    display: block;
  }
`;

const MaxCoffeeH3 = styled.h3`
  line-height: 1;
  color: #fff;
  padding: 2px 4px 4px 4px;
  background: ${maxRed};
  display: inline-block;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  text-align: justify;
`;

const List = styled.ul`
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Anchor = styled.a`
  color: ${maxBrown};
`;

// figure
const Figure = styled.figure`
  margin: 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${800 + 32 * 2}px) {
    margin: 24px 0;
  }
`;

const FigureImage = styled.img<{ border?: boolean }>`
  width: 100%;
  box-shadow: ${({ border }) => (border ? `0 1px 6px rgba(0, 0, 0, 0.4)` : 'none')};
`;

const Caption = styled.figcaption`
  color: ${maxBrown};
  text-align: center;
`;

// table
const Table = styled.table`
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 8px;
  border-bottom: solid 1px ${maxBrown};
`;

const Td = styled.td`
  padding: 8px;
`;

const Index = () => {
  const links = [
    { label: 'データ集め', id: 'data' },
    { label: 'ロゴ', id: 'logo' },
    { label: '波線', id: 'wave' },
    { label: '正面', id: 'front' },
    { label: '側面', id: 'side' },
    { label: '成分表示', id: 'components' },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <title>マックスコーヒーのパッケージ観察｜いなにわうどん.みんな</title>
      </Head>
      <GlobalStyle />
      <Page>
        <Wrapper>
          <SideNavigation>
            <ul>
              {links.map((link) => (
                <li>
                  <Link href={`#${link.id}`}>
                    <div>{link.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </SideNavigation>
          <Content>
            <main>
              <H1>
                <img src={logo.src} alt="マックスコーヒーのパッケージ観察" />
              </H1>
              <Paragraph>マックスコーヒー飲んでますか！？</Paragraph>
              <Paragraph>
                コカ・コーラから北関東を中心に発売されているマックスコーヒー（図
                1）。甘みの強い練乳入りのコーヒーと、黄色と茶色で構成された可愛らしいパッケージが特徴的です。本記事では、そんな特色あるマックスコーヒーのデザインに着目し、マッ缶ことマックスコーヒー缶のパッケージの装飾を調べました。
              </Paragraph>
              <Figure>
                <FigureImage src={maxMakuhariImage.src} alt="" />
                <Caption>図 1：コンビニに並ぶマックスコーヒー</Caption>
              </Figure>
              <section id="data">
                <H2>データ集め</H2>
                <Paragraph>
                  Adobe Illustrator
                  を用いて缶のデザインのトレースを試みます。トレースに先立って、缶の図柄に関するデータを正確に取得する必要がありますが、筒状の缶は通常のプリンタではスキャンすることはできません。
                  今回は、代替として以下のデータを参考にします。
                </Paragraph>
                <List>
                  <li>
                    マックスコーヒーの 500ml ペットボトルのフィルムを剥がし 600 dpi
                    でスキャンしたデータ（図 2、図
                    3）：フィルムに若干の歪みがあり怪しい点も存在するが、少なくともインターネット上のデータよりは緻密なデータが得られそう。
                  </li>
                  <li>
                    マッ缶を望遠レンズで撮影したデータ：遠距離から望遠で撮影することで幾分か歪みが緩和される。
                  </li>
                </List>
                <Figure>
                  <FigureImage src={scannerImage.src} alt="" />
                  <Caption>図 2：スキャンの光景</Caption>
                </Figure>
                <Figure>
                  <FigureImage src={scannedImage.src} alt="" />
                  <Caption>図 3：スキャンしたデータ</Caption>
                </Figure>
                <Paragraph>
                  缶のサイズを計測したところ高さ 125 mm、Φ51 mm、円周が 168 mm
                  でした。これらのデータを基にトレースしたデータを図 4 に示します。
                </Paragraph>
                <Figure>
                  <FigureImage src={maxTrace.src} alt="" border={true} />
                  <Caption>図 4：トレースした缶のパッケージ</Caption>
                </Figure>
              </section>
              <section id="logo">
                <H2>ロゴ</H2>
                <Paragraph>
                  正面と背面の 2 箇所に「MAX COFFEE」のロゴ（図
                  5）が印刷されています。正面のロゴのサイズを計測したところ、50 mm × 26.7 mm
                  でした。書体の分類としてはサンセリフ体に該当し、Gotham
                  等に通ずる幾何学的なデザインです。
                </Paragraph>
                <Paragraph>
                  全体に目を向けると、「MAX」の天地（上下）が完全に揃っているのに対し、「COFFEE」の部分は
                  C、O
                  は上下のラインから僅かに飛び出すような形で配置されています。水平方向では、「COFFEE」が「MAX」に比べて左（缶では上向き）に寄っていることも読み取れます。
                </Paragraph>
                <Figure>
                  <FigureImage src={maxLogo.src} alt="MAX COFFEE" />
                  <Caption>図 5：「MAX COFFEE」のロゴ</Caption>
                </Figure>
                <h3>In depth</h3>
                <Paragraph>
                  MAX の文字をより詳しく見てみます（図
                  6）。一般に、書体は視差調節を重視して設計されていますが、本ロゴにもそのような調整が加えられているのかが気になります。
                </Paragraph>
                <List>
                  <li>
                    M：単純な直線のみで構成されており、目立った視差調節は見受けられない。完全な左右対称。
                  </li>
                  <li>
                    A：下側のベースラインからカウンタに掛けて僅かにストロークが細まっている。右側のステムは左側に比べて明らかに
                    <strong>傾斜が大きい</strong>。
                  </li>
                  <li>
                    X：左下から右下へ向かう（＼向きの）ストロークが若干右側にずれている。その他にも微妙な錯視調整を感じたが、これが意図した設計であるかは不明。
                  </li>
                </List>
                <Paragraph>続いて COFFEE の部分を眺めます。</Paragraph>
                <List>
                  <li>
                    C：円よりも中央部分に膨らみを持つ。下部に重心が置かれており、カーブも僅かに長い。終端部は垂直。
                  </li>
                  <li>
                    O：上下左右対称。やや横長で、比率は内側のパスで 16:15、外側のパスは 100:99。C
                    と同様に中央部分が膨らんでおり、特に内側のパスの膨らみが強い。Illustrator で内側
                    -13 %、外側 -4 % 程度の「膨張」効果を掛けた円に近似する。
                  </li>
                  <li>
                    F：完全な直線だが、縦画と横画の比率は 6:5
                    と異なる。アーム（上の横画）とバー（中央の横画）の長さが等しい。
                  </li>
                  <li>
                    E：ストロークの太さは F と同一。バー &lt; 上側のアーム &lt;
                    下側のアームの順に長さが短い。
                  </li>
                </List>
                <Figure>
                  <FigureImage src={maxLogoAnalyze.src} alt="MAX COFFEE" />
                  <Caption>図 6：ロゴの詳細。ピンク色の線は平行</Caption>
                </Figure>
                <Paragraph>
                  なおインターネット上の画像と手元の実物を比較すると、現在発売されている缶・ペットボトル双方のパッケージにおいて、旧来よりも
                  <strong>カーニングが広めに取られている</strong>ことが判明しました。現行のものは
                  FFEE に比べて CO の字間がやや狭く、逆に「OF」は空きすぎなようにも思えます。
                </Paragraph>
              </section>
              <section id="wave">
                <H2>謎の曲線？ 波線</H2>
                <Paragraph>
                  ロゴ横に長さ 95.5 mm の波線（図 7）が 4 箇所あしらわれ、1 本の波線に対して周期が 3
                  回（背面は 3
                  回、縮尺も異なる）ずつ存在します。サイン波のような風貌ですがサイン波ではなく、線幅も一定ではありません。1
                  箇所につき、外側、中央、内側と 3
                  つの曲線が存在しますが、これらの形状はすべて異なります。さらには、1
                  つの山に対して左右対称ですらない、という謎な曲線です。
                </Paragraph>
                <Figure>
                  <FigureImage src={wave.src} alt="" />
                  <Caption>図 7：3 本の異なる破線</Caption>
                </Figure>
              </section>
              <section id="front">
                <H2>正面</H2>
                <Paragraph>
                  正面には「MAX
                  COFFEE」「GEOGIA」ロゴのほかに「練乳入り」「マックスコーヒー」「コーヒー飲料」の文字
                  3 つが記載され、左右に 38 mm
                  の間隔で先述した波線が並びます。パッケージ全体で使用書体はモリサワの「
                  <strong>
                    <Anchor href="https://www.morisawa.co.jp/fonts/specimen/1473">新ゴ</Anchor>
                  </strong>
                  」ファミリーに統一されていて、「練乳入り」「コーヒー飲料」の部分はそれぞれ 新ゴ
                  B、新ゴ M です。「練乳入り」の部分はベタ組みにトラッキングを -20
                  程度掛けてあり、カーニングは詰められていません。「1 本あたり 120
                  kcal」は和文が新ゴ、欧文は Helvetica Condensed
                  で、天地が揃えるべく和文が級下げされています。テキストの囲み罫は矩形と楕円を組み合わせたデザインです。
                </Paragraph>
                <MaxCoffeeH3>マックスコーヒー</MaxCoffeeH3>
                <Paragraph>
                  「マックスコーヒー」の文字（図 8）は31.5 mm × 5 mm
                  の赤い矩形で囲われており、下部から 21.7 mm の位置に配置されています。書体は新ゴ B
                  の 16 Q で、適切にカーニングが詰められているほか、「コ<strong>ー</strong>ヒ
                  <strong>ー</strong>
                  」の長音の部分を 70% 程度の長体にする等、文字組みに工夫が凝らされています。
                </Paragraph>
                <Figure>
                  <FigureImage src={maxRedImage.src} alt="MAX COFFEE" />
                  <Caption>図 8：「マックスコーヒー」の表記</Caption>
                </Figure>
              </section>
              <section id="side">
                <H2>側面</H2>
                <Paragraph>
                  側面には、注意表記、バーコード（JAN
                  コード）、「リサイクルしてね」のロゴ等が縦方向に並んでおり、狭いスペースながらに大量の情報が詰め込まれています。注意書きは最終行まで両端揃えの所謂「カンパコ組み」で、約物は行中・行末に関わらず半角です。全体的に平体気味ですが、項目ごとに本文よりも小さなサイズで付された
                  ●
                  のマーカーは正体のように見えます。注意事項の背後のザブトンは角が若干丸まっています。
                </Paragraph>
                <Paragraph>
                  「リサイクルしてね」（図 9） は タイプバンク（旧リョービ）の{' '}
                  <Anchor href="https://www.typebank.co.jp/fontfamily/g2sansserif/">
                    G2 サンセリフ-B
                  </Anchor>{' '}
                  をベースとしたロゴタイプで、コカ・コーラ社で共通のシンボルが使用されています。「リサイクル」の部分は微調整が加えられ、元のフォントと若干エレメントが異なるほか、全体的に少し太めに見えます。その他の部分に関しては元のフォントと同一の形状です。
                  また、「あき缶はリサイクル」の部分は <strong>UD 新ゴ</strong>
                  が採用されています。パッケージの他箇所が通常の新ゴであることに鑑みると、この部分も他飲料と共通である可能性が高いです。
                </Paragraph>
                <Figure>
                  <FigureImage
                    src={g2sanserif.src}
                    alt="G2 サンセリフ リサイクルしてね リサイクルしてね"
                  />
                  <Caption>図 9：「リサイクルしてね」のロゴタイプとG2サンセリフ</Caption>
                </Figure>
              </section>
              <section id="components">
                <H2>成分表示</H2>
                <Paragraph>
                  複数の書体サイズが混在しています（図
                  10）。「0120-308509」の電話番号は隣の「お客様相談室」よりも級上げされ、書体も太めのウェイトが採用されています。市外局番を区切るハイフンもベースラインシフトによって天地中央に揃えられるなど、細部まで拘った調整が伺えます。その下の
                  「GEOGIA」のみ Helvetica が使用されています。
                </Paragraph>
                <Figure>
                  <FigureImage
                    src={compositions.src}
                    alt="G2 サンセリフ リサイクルしてね リサイクルしてね"
                  />
                  <Caption>図 10：裏面の成分表示欄</Caption>
                </Figure>
                <Figure>
                  <FigureImage src={tel.src} alt="お客様相談室 0120-308509" />
                  <Caption>図 10：電話番号の文字組み</Caption>
                </Figure>
                <Paragraph>
                  成分表示上のロゴ、「練乳入り」「マックスコーヒー」の文言は正面のものとはサイズが異なり、やや縮小されて掲載されています。
                </Paragraph>
              </section>
              <section id="color">
                <H2>色</H2>
                <Paragraph>
                  以下の 4
                  色が使用されています。文字周囲に僅かなヌケ（白い隙間）が見られることから、オーバープリント処理
                  <sup>[1]</sup>はされていないようです。特色を使用している可能性もあります。
                </Paragraph>
                <Table>
                  <tbody>
                    <tr>
                      <Th>色</Th>
                      <Th>詳細</Th>
                    </tr>
                    <tr>
                      <Td style={{ color: '#fff', background: '#000' }}>黒</Td>
                      <Td>
                        「MAX
                        COFFEE」「GEOGIA」のロゴ、「練乳入り」「コーヒー飲料」の文字、バーコードの文字色。恐らく
                        K100。
                      </Td>
                    </tr>
                    <tr>
                      <Td>黄</Td>
                      <Td>マックスコーヒーといえばの背景色。C35, Y100 程度。</Td>
                    </tr>
                    <tr>
                      <Td style={{ color: '#fff', background: maxRed }}>赤</Td>
                      <Td>
                        「マックスコーヒー」「軽く振り、少し待ってから、あけてください」のザブトン。
                      </Td>
                    </tr>
                    <tr>
                      <Td style={{ color: '#fff', background: maxBrown }}>茶</Td>
                      <Td>波線や成分表示部分の背景色。</Td>
                    </tr>
                    <tr>
                      <Td style={{ background: '#fff' }}>白</Td>
                      <Td>
                        実は意外に少ない。バーコードの背景色と背後の「ほっとする甘みがお楽しみいただける……」の文言のみ。
                      </Td>
                    </tr>
                  </tbody>
                </Table>
              </section>
              <H2>むすびにかえて</H2>
              <Paragraph>
                いかがでしたか!?
                調べてみると、マックスコーヒーのパッケージには様々な工夫が凝らされており、北関東のソウルフードとして愛されてきた所以が判明しました！
                今後もマックスコーヒーから目が離せません！！！
              </Paragraph>
              <Paragraph>
                本記事は独自研究に基づくものであり、コカ・コーラ社および株式会社鈴木コーヒーとは一切関係ありません。
              </Paragraph>
            </main>
            <aside>1: オーバープリント処理の解説</aside>
          </Content>
        </Wrapper>
        <Footer />
      </Page>
    </>
  );
};

export default Index;
