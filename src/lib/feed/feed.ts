export interface Feed {
  options: FeedOptions;
  items: FeedItem[];
}

export interface FeedOptions {
  title: string;
  description: string;
  id: string;
  link: string;
  feedLinks: any;
  copyright: string;
  language: string;
  author: Author;
}

export interface FeedItem {
  title: string;
  description: string;
  date: Date;
  id: string;
  link: string;
}

interface Author {
  name: string;
  link: string;
  email: string;
}
