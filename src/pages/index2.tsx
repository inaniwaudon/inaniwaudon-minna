import Head from 'next/head';
import styled from 'styled-components';
import CustomList from '../components/CustomList';
import PageAnchor from '../components/PageAnchor';
import styles from './index.module.scss';
import { links, photos } from '@/const/index';

const Main = styled.div`
  margin: 30px 50px;
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

const Link = styled.li<{ color: string }>`
  width: 140px;
  height: 46px;
  color: #fff;
  padding: 10px 12px;
  border-radius: 4px;
  transition: margin-top 0.2s ease-out;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  display: block;
  background: ${(props) => props.color};

  &:hover {
    margin-top: 6px;
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
      </Head>
      <Main>
        <div className={styles.top}>
          <div>
            <H1>いなにわうどん.みんな</H1>
            <h2>写真</h2>
            <ul>
              {photos.map(({ id, title, deleted }) => (
                <CustomList>
                  {deleted ? (
                    <del>{title}</del>
                  ) : (
                    <PageAnchor href={`/photo/${id}`}>{title}</PageAnchor>
                  )}
                </CustomList>
              ))}
            </ul>
            <h2>その他</h2>
            <ul>
              <CustomList>
                <PageAnchor href="https://inaniwaudon.github.io/spring-2022/">
                  桜が舞い上がるページ
                </PageAnchor>
              </CustomList>
              <CustomList>
                <PageAnchor href="./docs/tsukuba-ramen2022.pdf">
                  2022年版 つくばらーめん10選（PDF, 1.5MB）
                </PageAnchor>
              </CustomList>
              <CustomList>
                <PageAnchor href="./nerene/">ネレネー山脈</PageAnchor>
              </CustomList>
              <CustomList>
                <PageAnchor href="https://inaniwaudon.github.io/nenga-atena/">
                  年賀状宛名作成ツール
                </PageAnchor>
              </CustomList>
              <CustomList>
                <PageAnchor href="https://inaniwaudon.github.io/hoshiimo/">
                  ほしいものリスト
                </PageAnchor>
              </CustomList>
              <CustomList>
                <PageAnchor href="https://exagree.netlify.app/">超便乗ツール</PageAnchor>
              </CustomList>
              <CustomList>
                <del>Twight関連リンク（工事中）</del>
              </CustomList>
              <CustomList>
                <PageAnchor href="/kdb">KdBもどき関連リンク</PageAnchor>
              </CustomList>
              <CustomList>
                授業感想：
                <PageAnchor href="./class-impression/2022spring">2022年度 春学期</PageAnchor>｜
                <PageAnchor href="https://www.notion.so/learnutsukuba/2021-78f1f36654ad4f7ca6c5d32ef6d40276">
                  2021年度
                </PageAnchor>
              </CustomList>
            </ul>
          </div>
          <div>
            <h3>年賀状</h3>
            <img
              src="./assets/nengajo2023.webp"
              className={styles.nengajoImg}
              alt="「あけましておめでとうございます。旧年中は大変お世話になりました。今年もどうぞよろしくお願い申し上げます。」の文言が左上に添えられています。
下部には、細長く耳が伸びた黄色いまんまるのぬいぐるみが微笑んでいます。
背後には色鮮やかに桜が咲いており、春の予感を到来させます。"
            ></img>
            <img
              src="./assets/nengajo2022.png"
              className={styles.nengajoImg}
              alt="「あけましておめでとうございます。旧年中は大変お世話になりました。本年もどうぞよろしくお願い申し上げます。の文言が左上に添えられています。
左下で黄色いまんまるのぬいぐるみが微笑んでいます。
背後にはクリスマスイルミネーションに照らされた東京駅が写っており、色鮮やかな花火が空を夜空を彩っています。"
            ></img>
          </div>
        </div>

        <h2>外部リンク</h2>
        <LinkList>
          {links.map(({ color, name, url, platform }) => (
            <Link color={color} key={name}>
              <LinkAnchor href={url}>
                <div>
                  <Platform>{platform}</Platform>
                  <Description>{name}</Description>
                </div>
              </LinkAnchor>
            </Link>
          ))}
        </LinkList>
      </Main>
    </>
  );
};

export default Index;
