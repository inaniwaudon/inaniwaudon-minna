import fs from 'fs';

import { articleLinks } from '@/const/articles';
import { Feed, FeedOptions } from '@/lib/feed/feed';
import feedToAtom1 from '@/lib/feed/atom1';
import feedToJson from './lib/feed/json';

const generateRss = async () => {
  const directory = 'feed';

  const options: FeedOptions = {
    title: 'いなにわうどん.みんな',
    description: '書いたもの・こと',
    id: 'https://いなにわうどん.みんな',
    link: 'https://いなにわうどん.みんな',
    feedLinks: {
      atom: `https://いなにわうどん.みんな/${directory}/atom.xml`,
      rss2: `https://いなにわうどん.みんな/${directory}/feed.xml`,
      json: `https://いなにわうどん.みんな/${directory}/feed.json`,
    },
    copyright: '(c) いなにわうどん',
    language: 'ja',
    author: {
      name: 'いなにわうどん',
      link: 'https://いなにわうどん.みんな',
      email: 'me@yokohama.dev',
    },
  };

  const items = articleLinks.map((link) => ({
    title: link.title,
    description: '',
    date: new Date(link.date),
    id: link.href,
    link: link.href,
  }));

  const feed: Feed = {
    options,
    items,
  };

  fs.mkdirSync(`./public/${directory}`, { recursive: true });
  fs.writeFileSync(`./public/${directory}/atom.xml`, feedToAtom1(feed));
  //fs.writeFileSync(`./public/${directory}/feed.xml`, feed.rss2());
  fs.writeFileSync(`./public/${directory}/feed.json`, feedToJson(feed));
};

export const register = async () => {
  if (process.env['NEXT_RUNTIME'] === 'nodejs') {
    await generateRss();
  }
};
