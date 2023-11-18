import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    absolute: 'いなにわうどん.みんな',
    template: '%s｜いなにわうどん.みんな',
  },
  description: '回鍋肉と C# が好きです。',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="alternate" type="application/atom+xml" href="/feed/atom.xml" title="Atom1.0" />
        <link rel="alternate" type="application/rss+xml" href="/feed/feed.xml" title="RSS2.0" />
        <link rel="alternate" type="application/json" href="/feed/feed.json" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
