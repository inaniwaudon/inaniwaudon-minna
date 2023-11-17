import { Metadata } from 'next';
import { styled } from '@linaria/react';

import Checkbox2 from '@/components/common/Checkbox2';
import CustomList from '@/components/common/CustomList';
import PageAnchor from '@/components/common/PageAnchor';
import PageWrapper from '@/components/common/PageWrapper';
import { ArticleTag, articleLinks, isArticleTag } from '@/const/articles';

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

const tagButtons = [
  { key: 'hongoshi', label: 'hongoshi', keyColor: '#ff32ab' },
  { key: 'tech', label: 'tech', keyColor: '#cc22db' },
  { key: 'design', label: 'design', keyColor: '#2656f3' },
  { key: 'random', label: 'random', keyColor: '#009ae1' },
];

const title = '書いたもの・こと';

export const metadata: Metadata = {
  title: title,
};

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = ({ searchParams }: PageProps) => {
  const selectedTags: ArticleTag[] =
    typeof searchParams['tag'] === 'string'
      ? searchParams['tag'].split('+').flatMap((str) => (isArticleTag(str) ? str : []))
      : [];

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
          <Checkbox2
            query="tag"
            options={tagButtons}
            multiple={true}
            selectedOptions={selectedTags}
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
    </PageWrapper>
  );
};

export default Page;
