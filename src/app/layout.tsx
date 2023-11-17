import '../styles/globals.css';
import StyledComponentsRegistry from '@/lib/registry';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="alternate" type="application/atom+xml" href="/feed/atom.xml" title="Atom1.0" />
        <link rel="alternate" type="application/rss+xml" href="/feed/feed.xml" title="RSS2.0" />
        <link rel="alternate" type="application/json" href="/feed/feed.json" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
