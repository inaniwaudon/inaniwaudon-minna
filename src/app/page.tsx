import { Metadata } from 'next';

import Main from './_components/Main';
import { generateRss } from '@/lib/articles-rss';
import { SearchParams } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'いなにわうどん.みんな',
  description: '回鍋肉と C# が好きです。',
};

interface PageProps {
  searchParams: SearchParams;
}

const Page = ({ searchParams }: PageProps) => {
  generateRss();

  return <Main searchParams={searchParams} />;
};

export default Page;
