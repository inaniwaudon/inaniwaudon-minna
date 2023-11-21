import { styled } from '@linaria/react';

import Form from './Form';
import PageWrapper from '@/components/common/PageWrapper';

const TankaList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 16px;
  overflow: scroll;
`;

const TankaItem = styled.li`
  font-size: 18px;
  font-family: serif;
  writing-mode: vertical-rl;
`;

const TankaAuthor = styled.div`
  text-align: right;
  font-size: 14px;
`;

const FormSection = styled.div`
  margin-top: 24px;
`;

const FootnoteSection = styled.div`
  margin-top: 24px;
  padding-top: 8px;
  border-top: solid 1px #ddd;
`;

interface Tanka {
  id: number;
  tanka: string;
  name: string;
  ip: string;
  comment: string | null;
}

const Index = async () => {
  const title = '/tanka';
  const response = await fetch('http://localhost:8788/api/tanka', {
    cache: 'no-store',
  });
  const json = await response.json();
  console.log(json);
  const tankas: Tanka[] = response.ok ? json : [];

  return (
    <PageWrapper title={title} path="/tanka">
      <main>
        <h1>/tanka</h1>
        <p>
          日常に潜む短歌や 575（#haiku）
          <sup>
            <a href="#footnote">[1]</a>
          </sup>
        </p>
        <section>
          <TankaList>
            {tankas.map((tanka) => (
              <TankaItem key={tanka.id} title={tanka.comment ?? ''}>
                {tanka.tanka.replaceAll(/[ 　]/g, '')}
                <TankaAuthor>
                  {tanka.name}（{tanka.ip}）
                </TankaAuthor>
              </TankaItem>
            ))}
          </TankaList>
        </section>
        <FormSection>
          <Form />
        </FormSection>
        <FootnoteSection>
          <small>[1] 短歌のみならず、俳句、川柳、自由律も含む</small>
        </FootnoteSection>
      </main>
    </PageWrapper>
  );
};

export default Index;
