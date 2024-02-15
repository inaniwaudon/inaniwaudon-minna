import { styled } from "@linaria/react";

import { photos } from "@/app/photos/_const";
import logo from "@/assets/index/logo2.svg";
import Anchor from "@/components/common/Anchor";
import CustomList from "@/components/common/CustomList";
import H2 from "@/components/common/H2";
import { SearchParams } from "@/lib/utils";
import { creations } from "../const/creation";
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

const TopContent = styled.div`
  flex: 1;
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
        <TopContent>
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
            <H2>移動記（β）</H2>
            <CustomList>
              <li>
                <Anchor href="/locations/2024nagoya">
                  岐阜・名古屋旅行（2024/1/26–29）
                </Anchor>
              </li>
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
                      ｜
                      <Anchor href="/class-impression/2023autumn">
                        秋学期
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
                <Anchor href="/tasks">やること・やったこと</Anchor>
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
              {creations.map((creation) => (
                <li key={creation.url}>
                  <Anchor href={creation.url}>{creation.title}</Anchor>
                </li>
              ))}
            </CustomList>
          </section>
        </TopContent>
        <TopContent>
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
        </TopContent>
      </Top>
    </Wrapper>
  );
};

export default Main;
