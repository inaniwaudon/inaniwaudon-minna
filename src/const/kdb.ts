export interface KdbLinkItem {
  href: string;
  title: string;
  description?: string;
  references?: { href: string; title: string }[];
}

export const kdbMainLinks: KdbLinkItem[] = [
  {
    href: 'https://make-it-tsukuba.github.io/alternative-tsukuba-kdb/',
    title: '筑波大学 KdBっぽいなにか',
  },
  {
    href: 'https://github.com/Make-IT-TSUKUBA/alternative-tsukuba-kdb/',
    title: 'Make-IT-TSUKUBA/alternative-tsukuba-kdb (GitHub)',
    description: 'Issues, Pull request など、お待ちしています',
  },
  {
    href: 'https://www.mast.tsukuba.ac.jp/lecture/timetable.html',
    title: 'カリキュラム　時間割｜筑波大学情報学群　情報メディア創成学類／University of Tsukuba',
  },
];

export const kdbPresentationLinks: KdbLinkItem[] = [
  {
    href: 'https://conf2021.axies.jp/program/_file/20006_000.pdf',
    title: 'オープンソースでLMSをより使いやすく～ユーザによるLMSの機能拡張～',
    description: '（大学ICT推進協議会（AXIES）年次大会・2021年12月15日・幕張メッセ）',
    references: [{ href: 'docs/axies-kdb.pdf', title: '発表資料（PDF, 14.7 MB）' }],
  },
  {
    href: 'https://www.k-of.jp/2021/session/tsukuba/',
    title: '筑波大シラバス「KdBもどき」を作ったその後どうなった？',
    description: '関西オープンフォーラム2021・2021年10月19日・オンライン',
  },
  {
    href: 'https://laboratoryautomation.connpass.com/event/206175/',
    title: '授業科目DB代替システム「KdBもどき」の開発と運用',
    description: '（Laboratory Automation月例勉強会・2021年5月22日・オンライン）',
  },
];

export const kdbArticleLinks: KdbLinkItem[] = [
  {
    href: 'https://www.asahi.com/articles/DA3S14933116.html',
    title: '（ひと）和田優斗さん　筑波大学の授業データベースの「もどき」を開発した学生',
    description: '（朝日新聞 朝刊・2021年6月9日）',
  },
  {
    href: 'https://www.tsukuba.ac.jp/about/public-newspaper/pdf/363.pdf',
    title:
      "「授業データベース不具合履修登録期間中に９日間使えず」\n「Who's Who? KｄBの代替システムを3時間半で開発 和田優斗さん（メ創1年）」",
    description: '（筑波大学新聞 第363号・2021年5月24日）',
  },
  {
    href: 'https://www.itmedia.co.jp/news/articles/2104/13/news126.html',
    title: '筑波大の授業DBがメンテ、困った新入生が代替ツールを“爆速開発”　その背景を本人に聞いた',
    description: '（ITmedia・2021年4月13日 18時17分）',
  },
  {
    href: 'https://www.itmedia.co.jp/news/articles/2104/30/news147.html',
    title: '筑波大1年生が爆速開発した“オレオレ授業DB”が大学公認に　有志で運用を継続する方針',
    description: '（ITmedia・2021年5月1日 10時00分）',
  },
  {
    href: 'https://nlab.itmedia.co.jp/nl/articles/2104/12/news136.html',
    title:
      '筑波大学の履修ツールが年度早々長期メンテに→“新入生”が代替システムを一晩で開発し「強すぎる」と動揺広がる',
    description: '（ねとらぼ・2021年4月12日 19時15分）',
  },
  {
    href: 'https://getnews.jp/archives/2986186',
    title:
      '「これは有能」「なろう系を地で行っている」　履修ツールのメンテナンスを受けて筑波大学新入生が代替システムを短時間で開発',
    description: '（ガジェット通信・2021年4月13日 09時00分）',
  },
  {
    href: 'https://it.srad.jp/story/21/04/15/0214257/',
    title:
      '筑波大、新学期早々に授業データベースをメンテ入りに。新入生が高機能な代替サービスを作ってしまう',
    description: '（スラド・2021年4月16日 08時06分）',
  },
  {
    href: 'https://chanto.jp.net/childcare/popular/248816/',
    title:
      '「親もネットのコアユーザー」筑波大学の科目検索システムを一夜で開発した「スーパー新入生」の素顔',
    description: '（CHANTO Web・2021年07月19日）',
  },
];
