import { createElement } from 'react';
import { styled } from '@linaria/react';
import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import PageAnchor from '@/components/common/PageAnchor';
import PageWrapper from '@/components/common/PageWrapper';
import { classImpressions } from '@/const/class-impression';

const Wrapper = styled.div`
  max-width: 1000px;
`;

const Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Main = styled.main`
  max-width: 600px;

  h2 {
    font-size: 1.3em;
    padding-left: 16px;
    border-left: solid 2px #ccc;
  }

  h3 {
    font-size: 1em;
  }

  ul {
    margin: 0;
    padding: 0 0 0 1.5rem;
  }
`;

const getInformation = (id: string) =>
  classImpressions.find((item) => id === item.year + item.term)!;

const termToJapanese = (term: string) => (term === 'spring' ? '春' : '秋');

const getTitle = (year: number, term: string) =>
  `${year} 年度 ${termToJapanese(term)}学期 授業感想`;

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;
  const { year, term, description, article } = getInformation(id);
  const title = getTitle(year, term);

  const contents = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement })
    .processSync(article).result;

  return (
    <PageWrapper title={title} path={`/class-impression/${id}`}>
      <Wrapper>
        <header>
          <h1>{title}</h1>
          <Nav>
            {classImpressions.map((item) => {
              const id = item.year + item.term;
              return (
                <span key={id}>
                  <PageAnchor href={id}>
                    {item.year} 年度 {termToJapanese(item.term)}学期
                  </PageAnchor>
                </span>
              );
            })}
          </Nav>
          <p>{description}</p>
          <p>
            {year} 年度{termToJapanese(term)}
            学期に筑波大学で開講された授業の感想をまとめたものです。
            <br />
            あくまでも個人の主観に基づいた評価です。
          </p>
        </header>
        <Main>{contents}</Main>
      </Wrapper>
    </PageWrapper>
  );
};

export const generateStaticParams = () => {
  const ids = classImpressions.map(({ year, term }) => year + term);
  return ids.map((id) => ({ id: id }));
};

export const generateMetadata = ({ params }: PageProps) => {
  const { id } = params;
  const { year, term } = getInformation(id);
  return { title: getTitle(year, term) };
};

export default Page;