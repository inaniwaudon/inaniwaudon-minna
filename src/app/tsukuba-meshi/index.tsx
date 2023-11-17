import styled from 'styled-components';
import Page from '@/components/common/PageWrapper';
import CustomList from '@/components/common/CustomList';
import PageAnchor from '@/components/common/PageAnchor';

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const ImageAnchor = styled.a`
  width: 50%;
  max-width: 300px;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`;

const Index = () => {
  const title = 'つくばらーめん・飲食店情報';

  return (
    <Page title={title}>
      <main>
        <h1>{title}</h1>
        <p>激ウマ店舗を独断と偏見でセレクト。再配布等ご自由に</p>
        <h2>2023 年度版</h2>
        <p>画像クリックで拡大します</p>
        <ImageWrapper>
          <ImageAnchor href="/docs/tsukuba-meshi2023.webp">
            <Image src="/docs/tsukuba-meshi2023.webp" />
          </ImageAnchor>
          <ImageAnchor href="/docs/tsukuba-ramen2023.webp">
            <Image src="/docs/tsukuba-ramen2023.webp" />
          </ImageAnchor>
        </ImageWrapper>
        <CustomList>
          <li>
            つくば おすすめ飲食店 2023：
            <PageAnchor href="/docs/tsukuba-meshi2023.pdf">PDF 版（3.4 MB）</PageAnchor>｜
            <PageAnchor href="/tsukuba-meshi/restaurant2023">HTML 版</PageAnchor>
          </li>
          <li>
            つくば らーめん 10 選 2023：
            <PageAnchor href="/docs/tsukuba-ramen2023.pdf">PDF 版（1.2 MB）</PageAnchor>｜
            <PageAnchor href="/tsukuba-meshi/ramen2023">HTML 版</PageAnchor>
          </li>
          <li>
            <PageAnchor href="/tsukuba-meshi/errata">正誤表</PageAnchor>
          </li>
        </CustomList>
        <h2>2022 年度版</h2>
        <CustomList>
          <li>
            <PageAnchor href="/docs/tsukuba-ramen2022.pdf">
              つくば らーめん 10 選（PDF, 1.5 MB）
            </PageAnchor>
          </li>
        </CustomList>
      </main>
    </Page>
  );
};

export default Index;
