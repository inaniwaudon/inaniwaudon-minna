import { Metadata } from 'next';
import { styled } from '@linaria/react';

import Form from './Form';
import AdobeFonts from '@/components/common/AdobeFonts';
import PageWrapper from '@/components/common/PageWrapper';

const TankaList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 24px;
  overflow: scroll;
`;

const TankaItem = styled.li`
  max-height: 20em;
  line-height: 1.4;
  font-size: 18px;
  font-family: kinuta-maruminold-stdn, serif;
  writing-mode: vertical-rl;
`;

const TankaItem1680 = styled(TankaItem)`
  @keyframes color1680 {
    0%,
    100% {
      color: red;
    }
    10% {
      color: pink;
    }
    20% {
      color: orange;
    }
    30% {
      color: gold;
    }
    40% {
      color: limegreen;
    }
    50% {
      color: green;
    }
    60% {
      color: skyblue;
    }
    70% {
      color: blue;
    }
    80% {
      color: purple;
    }
    90% {
      color: mediumvioletred;
    }
  }

  animation-name: color1680;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const TankaAuthor = styled.div`
  text-align: right;
  font-size: 14px;
  margin-right: 4px;
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
  supplement: string | null;
}

const title = '/tanka';

export const metadata: Metadata = {
  title,
  description: '575 あつめてたのし最上川（#haiku）',
};

const Index = async () => {
  const response = await fetch('https://xn--n8je9hcf0t4a.xn--q9jyb4c/api/tanka', {
    cache: 'no-store',
  });
  const json = await response.json();
  const tankas: Tanka[] = response.ok ? json : [];

  const processTanka = (tanka: string) => {
    return tanka
      .replaceAll(/[ 　]/g, '')
      .replace(/[A-Za-z0-9]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0xfee0));
  };

  return (
    <>
      <AdobeFonts />
      <PageWrapper title={title} path="/tanka">
        <main>
          <h1>/tanka</h1>
          <p>
            575 あつめてたのし最上川（#haiku）
            <sup>
              <a href="#footnote">[1]</a>
            </sup>
          </p>
          <section>
            <TankaList>
              {tankas.map((tanka) => {
                const content = (
                  <>
                    {processTanka(tanka.tanka)}
                    <TankaAuthor>
                      {tanka.name}（{tanka.ip}）
                    </TankaAuthor>
                  </>
                );
                return tanka.supplement && tanka.supplement.includes('1680') ? (
                  <TankaItem1680 key={tanka.id} title={tanka.comment ?? ''}>
                    {content}
                  </TankaItem1680>
                ) : (
                  <TankaItem key={tanka.id} title={tanka.comment ?? ''}>
                    {content}
                  </TankaItem>
                );
              })}
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
    </>
  );
};

export default Index;
