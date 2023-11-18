import * as convert from 'xml-js';
import { Feed } from './feed';
import { generator, sanitize } from './utils';

const feedToAtom1 = (feed: Feed) => {
  const { options } = feed;

  const author = {
    name: options.author.name,
    email: options.author.email,
    uri: sanitize(options.author.link),
  };

  const entries = feed.items.map<convert.ElementCompact>((item) => ({
    id: sanitize(item.id || item.link),
    link: [{ _attributes: { href: sanitize(item.link) } }],
    summary: {
      _attributes: { type: 'html' },
      _cdata: item.description,
    },
    title: { _attributes: { type: 'html' }, _cdata: item.title },
    updated: item.date.toISOString(),
  }));

  const base: any = {
    _declaration: { _attributes: { version: '1.0', encoding: 'utf-8' } },
    feed: {
      _attributes: { xmlns: 'http://www.w3.org/2005/Atom' },
      author: author,
      entry: entries,
      generator: sanitize(generator),
      id: options.id,
      link: [
        {
          _attributes: { rel: 'alternate', href: sanitize(options.link) },
        },
      ],
      rights: options.copyright,
      subtitle: options.description,
      title: options.title,
      updated: new Date().toISOString(),
    },
  };

  return convert.js2xml(base, { compact: true, ignoreComment: true, spaces: 4 });
};

export default feedToAtom1;
