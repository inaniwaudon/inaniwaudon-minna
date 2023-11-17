import { Metadata } from 'next';

import Main from './_components/Main';
import { generateRss } from '@/lib/articles-rss';

export const metadata: Metadata = {
  title: 'いなにわうどん.みんな',
  description: '回鍋肉と C# が好きです。',
};

const Page = () => {
  generateRss();

  return <Main />;
};

export default Page;
