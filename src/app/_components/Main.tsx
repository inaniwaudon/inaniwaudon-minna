import { styled } from "@linaria/react";

import logo from "@/assets/index/logo2.svg";
import Anchor from "@/components/common/Anchor";
import CustomList from "@/components/common/CustomList";
import H2 from "@/components/common/H2";
import { photos } from "@/const/photos";
import { SearchParams } from "@/lib/utils";
import LinkList from "./LinkList";
import Nengajo from "./Nengajo";

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 30px 50px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  margin: 0;

  img {
    max-width: min(450px, 100%);
  }
`;

const ListWrapper = styled.div`
  margin-top: 8px;
`;

const Divider = styled.span`
  width: 24px;
  height: 1px;
  margin: 4px 16px;
  display:inline-block;
  background: #666;
`;

interface MainProps {
  searchParams: SearchParams;
}

const Main = ({ searchParams }: MainProps) => {
  return (
    <Wrapper>
      <Top>
        <div>
          <H1>
            <img src={logo.src} height={36} alt="いなにわうどん.みんな" />
          </H1>
          <section>
            <H2>写真</H2>
            <CustomList>
              {photos.map(({ id, title, data }) => (
                <li key={id}>
                  {!data ? (
                    <del>{title}</del>
                  ) : (
                    <Anchor href={`/photos/${id}`}>{title}</Anchor>
                  )}
                </li>
              ))}
            </CustomList>
          </section>
          <section>
            <H2>文章など</H2>
            <CustomList>
              <li>
                <Anchor href="/articles">書いたもの・こと</Anchor>（
                <Anchor href="/feed/feed.xml">RSS</Anchor>・
                <Anchor href="feed/atom.xml">Atom</Anchor>・
                <Anchor href="/feed/feed.json">JSON</Anchor>）
              </li>
              <li>
                <Anchor href="/tsukuba-meshi">
                  つくばらーめん・飲食店情報
                </Anchor>
              </li>
              <li>
                <Anchor href="/tanka">
                  /tanka（みんなで作る短歌投稿ページ）
                </Anchor>
              </li>
              <li>
                <Anchor href="/nerene">ネレネー山脈</Anchor>
              </li>
              <li>
                授業感想
                <ListWrapper>
                  <CustomList>
                    <li>
                      2023 年度：
                      <Anchor href="/class-impression/2023spring">
                        春学期
                      </Anchor>
                    </li>
                    <li>
                      2022 年度：
                      <Anchor href="/class-impression/2022spring">
                        春学期
                      </Anchor>
                      ｜
                      <Anchor href="/class-impression/2022autumn">
                        秋学期
                      </Anchor>
                    </li>
                    <li>
                      2021 年度：
                      <Anchor href="/class-impression/2021spring">
                        春学期
                      </Anchor>
                      ｜
                      <Anchor href="/class-impression/2021autumn">
                        秋学期
                      </Anchor>
                    </li>
                  </CustomList>
                </ListWrapper>
              </li>
              <li>
                <del>Twight 関連リンク（工事中）</del>
              </li>
              <li>
                <Anchor href="/kdb">KdB もどき関連リンク</Anchor>
              </li>
            </CustomList>
          </section>
          <section style={{ marginTop: "24px" }}>
            <CustomList>
              <li>
                <Anchor href="https://inaniwaudon.github.io/spring-2022/">
                  桜が舞い上がるページ
                </Anchor>
              </li>
              <li>
                <Anchor href="https://nenga.yokohama.dev">
                  年賀状宛名作成ツール
                </Anchor>
              </li>
              <li>
                <Anchor href="https://github.com/inaniwaudon/twitter-illustration">
                  twitter-illustration
                </Anchor>
              </li>
              <li>
                <Anchor href="https://github.com/inaniwaudon/illustrator-ruby">
                  illustrator-ruby
                </Anchor>
              </li>
              <li>
                <Anchor href="https://parametric.yokohama.dev">
                  parametric-typography
                </Anchor>
              </li>
              <li>
                <Anchor href="https://inaniwaudon.github.io/hoshiimo/">
                  ほしいものリスト
                </Anchor>
              </li>
              <li>
                <Anchor href="https://exagree.netlify.app">超便乗ツール</Anchor>
              </li>
              <li>
                <Anchor href="https://inaniwaudon.github.io/genkotsu/">
                  げんこつ
                </Anchor>
              </li>
              <li>
                <Anchor href="https://cmap-display.pages.dev">
                  cmap-display
                </Anchor>
              </li>
              <li>
                <Anchor href="https://mail-segmenter.yokohama.dev">
                  mail-segmenter
                </Anchor>
              </li>
            </CustomList>
          </section>
        </div>
        <div>
          <Nengajo searchParams={searchParams} />
          <LinkList />
          <p>
            <Anchor href="/about">about</Anchor>
            <Divider />
            ソースコードを{" "}
            <Anchor href="https://github.com/inaniwaudon/inaniwaudon-minna">
              GitHub
            </Anchor>{" "}
            で公開しています
          </p>
        </div>
      </Top>
    </Wrapper>
  );
};

export default Main;
