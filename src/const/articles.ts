export interface ArticleLink {
  href: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export const articleHatenaLinks: ArticleLink[] = [
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20180321/1521620634',
    title: '3 日間。Python でつくる、Twitter カウントダウン Bot',
    date: '2018/03/21',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20190404/1554383981',
    title: '【WebAR】世界最速、AR で「令和」発表を再現（デモあり）',
    date: '2019/04/04',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20190511/1557550216',
    title: 'Twitter を完璧に制限する「ダツイハイ」を開発しました',
    date: '2019/05/11',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20200309/1583739357',
    title: '英検パス単の音声データから単語と対訳を抜き出していい感じに加工するツールを作りました',
    date: '2020/03/09',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20200319/1584600532',
    title: 'Chrome 拡張機能で Twitter に桜を降らせる',
    date: '2020/03/19',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20210322/1616418041',
    title: '容量無制限の YouTube に写真を保存して Google フォト代わりに使うソフトを作ったよ！！',
    date: '2021/03/22',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20211231/1640943650',
    title: '2021 年を振り返って',
    date: '2021/12/31',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20220525/1653446933',
    title: '日米友好祭 2022 に行ってきた',
    date: '2022/05/25',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20220919/1663521375',
    title: 'はてなインターン 2022 に参加しました',
    date: '2022/09/19',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20221218/1671298432',
    title: '某某宿舎での一年',
    date: '2022/12/18',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20221231/1672497754',
    title: '2022 年を振り返って',
    date: '2022/12/31',
  },
  {
    href: 'https://soudakyoto-ikou.hatenadiary.jp/entry/20230319/1679216111',
    title: 'なぜ我々は筑波大を便利にすることができなかったのか？',
    date: '2023/03/19',
  },
];

export const articleZennLinks: ArticleLink[] = [
  {
    href: 'https://zenn.dev/inaniwaudon/articles/039e82d61254ed',
    title: 'ヒラギノ角ゴシックの CMap を読む',
    date: '2022/01/22',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/832ecf5180d527',
    title: '忙しい人のための CFF テーブル入門: PDF にOpenTypeフォントのサブセットを埋め込むには',
    date: '2022/01/26',
    tags: ['hongoshi'],
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/9cc5fcd5a08530',
    title: 'Next.js でクライアントでのみコードを実行したい',
    date: '2022/05/16',
  },
  {
    href: 'https://qiita.com/inaniwaudon/items/46ac7ece438febde1538',
    title: 'styled-componentsで隣接セレクタを使用する',
    date: '2022/07/10',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/a80f7dc66ffe92',
    title: 'Web だって組版の夢を見る――新聞のように自在にテキストを流し込むには',
    date: '2022/07/26',
    tags: ['hongoshi'],
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/e7c11633685cf5',
    title: 'Illustrator 上でルビを振るスクリプト illustrator-ruby を公開しました',
    date: '2022/08/17',
    tags: ['hongoshi'],
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/62dfe3923f8521',
    title: 'styled-components で CSS Animation を再度実行する',
    date: '2022/10/03',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/a18ee47ce1488a',
    title: 'Type 2 Charstring を読み解いて OpenType フォントを描画してみる',
    date: '2022/11/16',
    tags: ['hongoshi'],
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/e4d6d326c4c18b',
    title: '筑波大学学園祭 Web サイト構築の舞台裏',
    date: '2022/12/15',
    tags: ['hongoshi'],
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/12fc531cb89813',
    title: 'プログラミング初学者の大学生が動かないコードを動かすには？',
    date: '2022/12/25',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/e01d84841aafe7',
    title: '年賀状の宛名をサクッと作るためのツールを公開しました',
    date: '2022/12/28',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/b361c4f996c980',
    title: 'Twitter 上のイラストを快適に閲覧するための Web アプリを公開しました',
    date: '2023/01/22',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/df0b0959d61b23',
    title: 'hyperref パッケージは PDF の注釈機能を用いて実現されている',
    date: '2023/02/16',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/8ce67c38ed3624',
    title: '郷に入れば郷に従って npm/yarn を切り替えるスクリプト',
    date: '2023/02/21',
  },
  {
    href: 'https://zenn.dev/inaniwaudon/articles/a796af99ab834f',
    title: 'input 要素に flex-shrink が効かないときの対処法',
    date: '2023/02/27',
  },
];

export const articleNoteLinks: ArticleLink[] = [
  {
    href: 'https://note.com/soudakyoto_ikou/n/n6967b2471eca',
    title: 'サイエンスフロンティア高校のポスターに学ぶ！グラフィックデザイン基本の「き」',
    date: '2019/06/02',
    tags: ['hongoshi'],
  },
  {
    href: 'https://note.com/soudakyoto_ikou/n/nd63330df85d8',
    title: 'まんがタイムきららの「写植」を読む――吹き出しにみる漫画書体の使い分け',
    date: '2023/01/29',
    tags: ['hongoshi'],
  },
];

export const articleWordLinks: ArticleLink[] = [
  {
    href: '/docs/word-kumihan.pdf',
    title: '書いてみよう！組版処理系',
    date: '2021/09/12',
    description: 'WORD 50号',
  },
  {
    href: '/docs/word-takutsu.pdf',
    title: '宅通......本当にするのですか？',
    date: '2022/02/26',
    description: 'WORD 引っ越し準備号 2022',
  },
  {
    href: '/docs/word-adobe.pdf',
    title: 'あの日見た Adobe CC の名前を僕達はまだ知らない。',
    date: '2022/03',
    description: 'WORD 入学祝い号 2023',
  },
  {
    href: 'https://www.word-ac.net/post/2022/0811-word52/',
    title: '令和4年度版 おすすめエナドリ 10 選',
    date: '2022/08/11',
    description: 'WORD 52号',
  },
];
