import { styled } from "@linaria/react";
import { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { Document, Page, pdfjs } from "react-pdf";

import Anchor from "@/components/common/Anchor";
import { ArticleLink } from "./articles";

//import remarkParse from "remark-parse";
//import { unified } from "unified";
// import article from "./text.md";

const Wrapper = styled.article`
  width: calc(50vw - 48px * 2);
  height: calc(100vh - 40px * 2);
  padding: 40px 48px;
  box-shadow: 0 0 32px rgba(0,0,0,0.1);
  background: #fff;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 16px;

  @media (max-width: 1000px) {
    width: calc(100% - 48px * 2);
    height: calc(100vh - 20px - 40px * 2);
    box-shadow: 0 0 16px rgba(0,0,0,0.1);
    border-radius: 16px;
    top: 20px;
    left: 0;
  }
`;

const Border = styled.div<{ color: string }>`
  width: 50vw;
  height: 4px;
  background: ${({ color }) => color};
  position: fixed;
  top: 0;
  right: 16px;
  z-index: 4;
`;

const Header = styled.header`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  line-height: 1.4;
  color: #333;
  font-size: 28px;
  word-break: auto-phrase;
  margin: 0 0 8px 0;
`;

const Details = styled.time`
  color: #999;
  font-size: 16px;
`;

const CloseButton = styled.button`
  line-height: 40px;
  color: rgba(0,0,0,0.2);
  font-size: 40px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  position: fixed;
  top: 40px;
  right: 32px;
  z-index: 4;

  &:hover {
    color: rgba(0,0,0,0.1);
  }
`;

const Content = styled.div`
  max-width: 700px;
  line-height: 1.8;
  margin: auto;

  h1, h2, h3, h4, h5, h6 {
    margin-left: -48px;
    padding: 0 0 8px 48px;
    border-bottom: solid 1px #eee;
    position: relative;

    &:before {
      width: 24px;
      color: #f9ebf3;
      text-align: right;
      font-weight: normal;
      margin-left: -38px;
      padding-right: 8px;
      display: inline-block;
      position: absolute;
      z-index: -1;
    }
  }

  h1 {
    font-size: 24px;

    &:before {
      content: "#";
      font-size: 80px;
      top: -50px;
    }
  }

  h2 {
    font-size: 20px;

    &:before {
      content: "##";
      font-size: 60px;
      top: -36px;
    }
  }

  h3 {
    font-size: 16px;

    &:before {
      content: "###";
      font-size: 40px;
      top: -22px;
    }
  }

  img {
    max-width: calc(100% - 16px * 2);
    margin: 16px;
    border-radius: 16px;

    + em {
      color: #666;
      font-style: normal;
      text-align: center;
      margin: -8px 0 24px 0;
      display: block;
    }
  }

  pre {
    width: calc(100%);
    color: #fff;
    margin: 32px -48px;
    padding: 24px 48px;
    white-space: pre-wrap;
    background: #1a2638;
  }
`;

const PageWrapper = styled.div`
  border: solid 1px #ccc;
`;

interface ArticleProps {
  link: ArticleLink;
  closeModal: () => void;
}

const Article = ({ link, closeModal }: ArticleProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | undefined>();
  const [pageNo, setPageNo] = useState(0);

  /*const contents = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement })
    .processSync(article).result;*/

  const color = link.pdf ? "rgba(204,204,204,0.5)" : "rgba(62,168,255,0.5)";

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPageNo(numPages);
  };

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url,
    ).toString();
  }, []);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    const observer = new ResizeObserver(() => {
      const tempWidth = contentRef.current?.getBoundingClientRect().width;
      setWidth(tempWidth ? tempWidth - 2 : undefined);
    });
    observer.observe(contentRef.current);
  }, []);

  return (
    <Wrapper>
      <Border color={color} />
      <Header>
        <Title>{link.title}</Title>
        <Details>
          <time>{link.date}</time> –{" "}
          <Anchor href={link.href}>{link.description}</Anchor>
        </Details>
      </Header>
      <CloseButton onClick={closeModal}>
        <TfiClose />
      </CloseButton>
      <Content ref={contentRef}>
        {link.pdf ? (
          <Document file={link.pdf} onLoadSuccess={onLoadSuccess}>
            {[...Array(pageNo)].map((_, i) => (
              <PageWrapper key={i}>
                <Page
                  pageNumber={i + 1}
                  width={width}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </PageWrapper>
            ))}
          </Document>
        ) : (
          <></>
        )}
      </Content>
    </Wrapper>
  );
};

export default Article;
