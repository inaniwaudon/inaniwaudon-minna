import { Metadata } from 'next';
import { styled } from '@linaria/react';

import Checkbox from '@/components/common/Checkbox';
import CustomList from '@/components/common/CustomList';
import PageAnchor from '@/components/common/PageAnchor';
import PageWrapper from '@/components/common/PageWrapper';
import { ArticleTag, articleLinks, articleTags } from '@/const/articles';
import { SearchParams, getStringParams, isSelectedTag } from '@/lib/utils';

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const H1 = styled.h1`
  margin: 0 0 8px 0;
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

const tags = [
  { key: 'hongoshi', label: 'hongoshi', keyColor: '#ff32ab' },
  { key: 'tech', label: 'tech', keyColor: '#cc22db' },
  { key: 'design', label: 'design', keyColor: '#2656f3' },
  { key: 'random', label: 'random', keyColor: '#009ae1' },
  { key: 'speaking', label: 'speaking', keyColor: '#00b300' },
];

const title = '書いたもの・こと';

export const metadata: Metadata = {
  title: title,
};

interface PageProps {
  searchParams: SearchParams;
}

const Page = ({ searchParams }: PageProps) => {
  const stringParams = getStringParams(searchParams);

  const selectedTags: ArticleTag[] = articleTags.filter((tag) =>
    isSelectedTag(tag, stringParams['tag'])
  );

  const filteredLinks =
    selectedTags.length > 0
      ? articleLinks.filter(
          (link) => link.tags && selectedTags.every((tag) => (link.tags as string[]).includes(tag))
        )
      : articleLinks;

  return (
    <PageWrapper title={title} path="/articles">
      <main>
        <TopHeader>
          <H1>{title}</H1>
          <Checkbox paramKey="tag" tags={tags} multiple={true} searchParams={searchParams} />
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
    </PageWrapper>
  );
};

export default Page;
