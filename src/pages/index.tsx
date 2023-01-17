import Head from 'next/head';
import styled from 'styled-components';
import Nengajo from '@/components/Nengajo';
import CustomList from '@/components/common/CustomList';
import PageAnchor from '@/components/common/PageAnchor';
import { links, photos } from '@/const/index';

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

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Link = styled.li`
  width: 140px;
  height: 66px;
  display: block;
`;

const LinkContent = styled.div<{ color: string }>`
  color: #fff;
  height: 46px;
  padding: 10px 12px;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  background: ${(props) => props.color};
  transition: margin-top 0.2s ease-out;

  &:hover {
    margin-top: 4px;
  }
`;

const LinkAnchor = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Platform = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 14px;
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
            <H1>いなにわうどん.みんな</H1>
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
              <h2>その他</h2>
              <CustomList>
                <li>
                  <PageAnchor href="/articles">書いたもの・こと</PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://inaniwaudon.github.io/spring-2022/">
                    桜が舞い上がるページ
                  </PageAnchor>
                </li>
                <li>
                  <PageAnchor href="/docs/tsukuba-ramen2022.pdf">
                    2022年版 つくばらーめん10選（PDF, 1.5MB）
                  </PageAnchor>
                </li>
                <li>
                  <PageAnchor href="/nerene">ネレネー山脈</PageAnchor>
                </li>
                <li>
                  <PageAnchor href="https://inaniwaudon.github.io/nenga-atena/">
                    年賀状宛名作成ツール
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
                  <del>Twight 関連リンク（工事中）</del>
                </li>
                <li>
                  <PageAnchor href="/kdb">KdBもどき関連リンク</PageAnchor>
                </li>
                <li>
                  授業感想：
                  <PageAnchor href="/class-impression/2022spring">2022年度 春学期</PageAnchor>｜
                  <PageAnchor href="https://www.notion.so/learnutsukuba/2021-78f1f36654ad4f7ca6c5d32ef6d40276">
                    2021年度
                  </PageAnchor>
                </li>
              </CustomList>
            </section>
          </div>
          <Nengajo />
        </Top>
        <section>
          <h2>外部リンク</h2>
          <LinkList>
            {links.map(({ color, name, url, platform }) => (
              <Link key={url}>
                <LinkContent color={color}>
                  <LinkAnchor href={url}>
                    <div>
                      <Platform>{platform}</Platform>
                      <Description>{name}</Description>
                    </div>
                  </LinkAnchor>
                </LinkContent>
              </Link>
            ))}
          </LinkList>
        </section>
      </Main>
    </>
  );
};

export default Index;
