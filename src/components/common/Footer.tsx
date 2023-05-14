import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { linkColor, linkHoverColor } from '@/const/style';

const Wrapper = styled.footer`
  font-size: 14px;
  margin-top: 20px;
  padding-top: 10px;
  border-top: solid 1px rgba(0, 0, 0, 0.2);

  a {
    color: ${linkColor};

    &:hover {
      color: ${linkHoverColor};
    }
  }
`;

const Split = styled.span`
  margin: 0 4px;
`;

const Index = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle(document.title.split('｜')[0]);
  }, []);

  return (
    <>
      <Wrapper>
        現在のページ：
        <Link href={router.pathname}>
          {title}（{router.pathname}）
        </Link>
        <Split>｜</Split>
        <Link href="/">トップページ</Link> - <a href="#">ページ上部</a>
      </Wrapper>
    </>
  );
};

export default Index;
