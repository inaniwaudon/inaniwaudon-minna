import { Feed } from './feed';

const feedToJson = (feed: Feed) => {
  const { options } = feed;

  const items = feed.items.map((item) => ({
    id: item.id,
    url: item.link,
    title: item.title,
    date_modified: item.date.toISOString(),
  }));

  const base = {
    versions: 'https://jsonfeed.org/version/1',
    title: options.title,
    home_page_url: options.link,
    feed_url: options.feedLinks.json,
    description: options.description,
    author: {
      name: options.author.name,
      link: options.author.link,
    },
    items,
  };

  return base;
};

export default feedToJson;
