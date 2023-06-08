import fs from 'fs';
import { Feed } from 'feed';
import { articleLinks } from '@/const/articles';

export const generateRss = async () => {
  const directory = 'feed';
  const feed = new Feed({
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
    },
  });

  for (const article of articleLinks) {
    feed.addItem({
      title: article.title,
      description: '',
      date: new Date(article.date),
      id: article.href,
      link: article.href,
    });
  }
  fs.mkdirSync(`./public/${directory}`, { recursive: true });
  fs.writeFileSync(`./public/${directory}/atom.xml`, feed.atom1());
  fs.writeFileSync(`./public/${directory}/feed.xml`, feed.rss2());
  fs.writeFileSync(`./public/${directory}/feed.json`, feed.json1());
};
