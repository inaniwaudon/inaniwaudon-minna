import Head from "next/head";
import { createElement } from "react";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import styled from "styled-components";
import { unified } from "unified";
import markdown from "./2022spring.md";

const Wrapper = styled.div`
  max-width: 1000px;
  margin-left: 50px;
`;

const Main = styled.main`
  width: 600px;

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

const Index = () => {
  const contents = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement })
    .processSync(markdown).result;

  return (
    <Wrapper>
      <Head>
        <title>2022年度 春学期 授業感想｜いなにわうどん.みんな</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header>
        <h1>2022年度 春学期 授業感想</h1>
        <p>
          いやーマジで苦しかった春ABモジュールが終わりましたねー
          <br />
          2022年度春学期に筑波大学で開講された授業の感想をまとめたものです。
          <br />※ 個人の主観に基づいた評価です
        </p>
      </header>
      <Main>{contents}</Main>
    </Wrapper>
  );
};

export default Index;
