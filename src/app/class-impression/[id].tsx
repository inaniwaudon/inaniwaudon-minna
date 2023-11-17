import { createElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import styled from 'styled-components';
import { unified } from 'unified';
import Page from '@/components/common/PageWrapper';
import PageAnchor from '@/components/common/PageAnchor';
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

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  year: number;
  term: 'spring' | 'autumn';
  description: string;
  article: string;
}

const termToJapanese = (term: string) => (term === 'spring' ? '春' : '秋');

const Index = ({ year, term, description, article }: Props) => {
  const contents = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement })
    .processSync(article).result;

  const title = `${year} 年度 ${termToJapanese(term)}学期 授業感想`;

  return (
    <Page title={title}>
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
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const information = classImpressions.find((item) => params!.id === item.year + item.term)!;
  return {
    props: {
      year: information.year,
      term: information.term,
      description: information.description,
      article: information.article,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const ids = classImpressions.map(({ year, term }) => year + term);
  return {
    paths: ids.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
};

export default Index;
