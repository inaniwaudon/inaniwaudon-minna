import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@/components/common/Checkbox';
import CustomList from '@/components/common/CustomList';
import Page from '@/components/common/Page';
import PageAnchor from '@/components/common/PageAnchor';
import {
  articleHatenaLinks,
  articleNoteLinks,
  articleSiteLinks,
  articleWordLinks,
  articleZennLinks,
} from '@/const/articles';

const H1 = styled.h1`
  margin: 0 0 8px 0;
`;

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const ArticleHeader = styled.header`
  font-size: 14px;
`;

const Time = styled.time`
  font-family: 'Courier New';
  font-weight: 700;
`;

const ListH3 = styled.h3`
  font-size: 1em;
  margin: 0 0;
`;

const Description = styled.span`
  color: #666;
  font-size: 13px;
`;

const Index = () => {
  const tags = [
    { key: 'hongoshi', label: 'hongoshi', keyColor: '#ff32ab' },
    { key: 'tech', label: 'tech', keyColor: '#cc22db' },
    { key: 'design', label: 'design', keyColor: '#2656f3' },
    { key: 'random', label: 'random', keyColor: '#009ae1' },
  ];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const links = useMemo(() => {
    const hatena = articleHatenaLinks.map((link) => ({ ...link, description: 'はてなブログ' }));
    const note = articleNoteLinks.map((link) => ({ ...link, description: 'note' }));
    const zenn = articleZennLinks.map((link) => ({ ...link, description: 'Zenn' }));
    const site = articleSiteLinks.map((link) => ({
      ...link,
      description: 'いなにわうどん.みんな',
    }));
    return [...hatena, ...note, ...zenn, ...site, ...articleWordLinks].sort((a, b) =>
      a.date === b.date ? 0 : a.date < b.date ? 1 : -1
    );
  }, [articleHatenaLinks, articleNoteLinks, articleZennLinks, articleWordLinks]);

  const filteredLinks =
    selectedTags.length > 0
      ? links.filter((link) => link.tags && selectedTags.some((tag) => link.tags!.includes(tag)))
      : links;

  const title = '書いたもの・こと';

  return (
    <Page title={title}>
      <main>
        <TopHeader>
          <H1>{title}</H1>
          <Checkbox
            options={tags}
            multiple={true}
            selectedOptions={selectedTags}
            setSelectedOptions={setSelectedTags}
          />
        </TopHeader>
        <CustomList>
          {filteredLinks.map((link) => (
            <li key={link.href}>
              <ArticleHeader>
                <Time>{link.date}</Time> - <Description>{link.description}</Description>
              </ArticleHeader>
              <ListH3>
                <PageAnchor href={link.href}>{link.title}</PageAnchor>
              </ListH3>
            </li>
          ))}
        </CustomList>
      </main>
    </Page>
  );
};

export default Index;
