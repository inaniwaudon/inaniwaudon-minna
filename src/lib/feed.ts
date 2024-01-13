import { Feed, FeedOptions } from "feed";

import { articleLinks } from "@/const/articles";

const directory = "feed";

export const feedOptions: FeedOptions = {
  title: "いなにわうどん.みんな",
  description: "書いたもの・こと",
  id: "https://いなにわうどん.みんな",
  link: "https://いなにわうどん.みんな",
  feedLinks: {
    atom: `https://いなにわうどん.みんな/${directory}/atom.xml`,
    rss2: `https://いなにわうどん.みんな/${directory}/feed.xml`,
    json: `https://いなにわうどん.みんな/${directory}/feed.json`,
  },
  copyright: "(c) いなにわうどん",
  language: "ja",
  author: {
    name: "いなにわうどん",
    link: "https://いなにわうどん.みんな",
    email: "me@yokohama.dev",
  },
};

export const getFeed = () => {
  const feed = new Feed(feedOptions);

  for (const link of articleLinks) {
    feed.addItem({
      title: link.title,
      description: "",
      date: new Date(link.date),
      id: link.href,
      link: link.href,
    });
  }
  return feed;
};
