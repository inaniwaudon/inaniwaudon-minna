import Head from "next/head";
import { unified } from "unified";

import React from "react";
import parser from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import markdown from "./class-impression-2022.md";

const ClassImpression2022 = () => {
  const processor = unified()
    .use(parser)
    .use(remarkRehype)
    .use(rehypeReact, { createElement: React.createElement });

  return (
    <div>
      <Head>
        <title>2022年度授業感想</title>
      </Head>
      <header>
        <h1>2022年度授業感想</h1>
      </header>
      <main>{processor.process(markdown)}</main>
    </div>
  );
};

export default ClassImpression2022;
