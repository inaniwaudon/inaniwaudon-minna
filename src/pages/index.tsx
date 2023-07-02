import { GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import logo from '@/assets/logo.svg';
import CustomList from '@/components/common/CustomList';
import PageAnchor from '@/components/common/PageAnchor';
import LinkList from '@/components/index/LinkList';
import Nengajo from '@/components/index/Nengajo';
import { photos } from '@/const/index';
import { generateRss } from '@/lib/articles-rss';

const Main = styled.div`
  margin: 30px 50px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  margin: 0;
`;

const ListWrapper = styled.div`
  margin-top: 8px;
`;

const Footer = styled.footer`
  font-size: 14px;
  margin-top: 10px;
`;

const Index = () => {
  return (
    <>
      <Head>
        <title>いなにわうどん.みんな</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="回鍋肉と C# が好きです。" />
      </Head>
      <Main>
        <Top>
          <div>
            <H1>
              <img src={logo.src} height={36} alt="いなにわうどん.みんな" />
            </H1>
            <section>
              <h2>写真</h2>
              <CustomList>
                {photos.map(({ id, title, deleted }) => (
                  <li key={id}>
                    {deleted ? (
                      <del>{title}</del>
                    ) : (
                      <PageAnchor href={`/photo/${id}`}>{title}</PageAnchor>
                    )}
                  </li>
                ))}
              </CustomList>
            </section>
            <section>
              <h2>文章など</h2>
              <CustomList>
                <li>
                  <PageAnchor href="/articles">書いたもの・こと</PageAnchor>（
                  <PageAnchor href="/feed/feed.xml">RSS</PageAnchor>・
                  <PageAnchor href="feed/atom.xml">Atom</PageAnchor>・
                  <PageAnchor href="/feed/feed.json">JSON</PageAnchor>）
                </li>
                <li>
                  <PageAnchor href="/tsukuba-meshi">つくばらーめん・飲食店情報</PageAnchor>
                </li>
                <li>
                  <PageAnchor href="/nerene">ネレネー山脈</PageAnchor>
                </li>
                <li>
                  <del>Twight 関連リンク（工事中）</del>
                </li>
                <li>
                  <PageAnchor href="/kdb">KdB もどき関連リンク</PageAnchor>
                </li>
                <li>
                  授業感想
                  <ListWrapper>
                    <CustomList>
                      <li>
                        2022 年度：
                        <PageAnchor href="/class-impression/2022spring">春学期</PageAnchor>｜
                        <PageAnchor href="/class-impression/2022autumn">秋学期</PageAnchor>
                      </li>
                      <li>
                        2021 年度：
                        <PageAnchor href="/class-impression/2021spring">春学期</PageAnchor>｜
                        <PageAnchor href="/class-impression/2021autumn">秋学期</PageAnchor>
                      </li>
                    </CustomList>
                  </ListWrapper>
                </li>
              </CustomList>
            </section>
            <section>
              <h2></h2>
              <CustomList>
                <li>
                  <PageAnchor href="https://inaniwaudon.github.io/spring-2022/">
                    桜が舞い上がるページ
                  </PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://inaniwaudon.github.io/nenga-atena/">
                    年賀状宛名作成ツール
                  </PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://github.com/inaniwaudon/twitter-illustration">
                    twitter-illustration
                  </PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://inaniwaudon.github.io/hoshiimo/">
                    ほしいものリスト
                  </PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://exagree.netlify.app/">超便乗ツール</PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://inaniwaudon.github.io/genkotsu/">げんこつ</PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://cmap-display.pages.dev/">cmap-display</PageAnchor>
                </li>
              </CustomList>
            </section>
          </div>
          <div>
            <Nengajo />
            <LinkList />
          </div>
        </Top>
        <Footer>
          The source code of this site is available on{' '}
          <PageAnchor href="https://github.com/inaniwaudon/inaniwaudon-minna">GitHub</PageAnchor>.
        </Footer>
      </Main>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  generateRss();
  return {
    props: {},
  };
};

export default Index;
