import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  font-size: 14px;
  margin-top: 20px;
  padding-top: 10px;
  border-top: solid 1px #ccc;

  a {
    color: #666;
  }
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
        <Link href={router.pathname}>
          {title}（{router.pathname}）
        </Link>
        ｜<Link href="/index2">トップページ</Link> - <a href="#">ページ上部</a>
      </Wrapper>
    </>
  );
};

export default Index;
