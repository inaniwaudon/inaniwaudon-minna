import { useMemo } from 'react';
import styled from 'styled-components';
import CustomList from '@/components/common/CustomList';
import Page from '@/components/common/Page';
import PageAnchor from '@/components/common/PageAnchor';
import {
  articleHatenaLinks,
  articleNoteLinks,
  articleWordLinks,
  articleZennLinks,
} from '@/const/articles';

const H1 = styled.h1`
  margin: 0 0 10px 0;
`;

const Header = styled.header`
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
  const links = useMemo(() => {
    const hatena = articleHatenaLinks.map((link) => ({ ...link, description: 'はてなブログ' }));
    const note = articleNoteLinks.map((link) => ({ ...link, description: 'note' }));
    const zenn = articleZennLinks.map((link) => ({ ...link, description: 'Zenn' }));
    return [...hatena, ...note, ...zenn, ...articleWordLinks].sort((a, b) =>
      a.date === b.date ? 0 : a.date < b.date ? 1 : -1
    );
  }, [articleHatenaLinks, articleNoteLinks, articleZennLinks, articleWordLinks]);

  const title = '書いたもの・こと';

  return (
    <Page title={title}>
      <main>
        <H1>{title}</H1>
        <CustomList>
          {links.map((link) => (
            <li key={link.href}>
              <Header>
                <Time>{link.date}</Time> - <Description>{link.description}</Description>
              </Header>
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
