import { Metadata } from 'next';

import Index from './_components/Index';

export const metadata: Metadata = {
  title: 'いなにわうどん.みんな',
  description: '回鍋肉と C# が好きです。',
};

const Page = () => {
  return <Index />;
};

export default Page;
