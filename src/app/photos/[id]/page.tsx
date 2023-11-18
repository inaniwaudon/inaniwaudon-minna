import Head from 'next/head';
import { styled } from '@linaria/react';
import fs from 'fs';
import path from 'path';

import Main from './Main';
import { PhotoData, PhotoInfo } from '@/lib/photo';
import { SearchParams } from '@/lib/utils';

const Footer = styled.footer`
  width: calc(100% - 80px);
  color: #fff;
  text-align: right;
  padding: 20px 40px 20px 40px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

  h1,
  .date {
    text-shadow: 0 1px 4px #000;
    font-family: kinuta-maruminold-stdn, serif;
    font-weight: 400;
    font-style: normal;
  }

  h1 {
    line-height: 2.5rem;
    font-size: 2.2rem;
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 1.8rem;
    }
  }

  .date {
    line-height: 1.2rem;
    font-size: 1.2rem;
    margin: 4px 0 0 0;
  }
`;

const Copyright = styled.p`
  line-height: 1rem;
  margin: 4px 0 0 0;

  small {
    font-size: 0.6rem;
    opacity: 0.6;
  }

  a {
    color: #add8e6;
  }
`;

const Half = styled.span`
  width: 0.5em;
  display: inline-block;
`;

const typekit = `(function(d) {
  var config = {
    kitId: 'mjm0riz',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);`;

export type PhotoList = ({
  thumbnail_src: string;
} & PhotoInfo)[];

interface PageProps {
  params: { id: string };
  searchParams: SearchParams;
}

const Page = ({ params, searchParams }: PageProps) => {
  const { id } = params;
  const jsonPath = path.join(process.cwd(), `src/data/photo/${id}.json`);
  const json: PhotoData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const { title, date } = json;
  const dir = `${process.env.PHOTO_URL}/photo/${json.key}`;
  const photos = json.photos.map((photo) => {
    return {
      src: `${dir}/${photo.src}`,
      thumbnail_src: `${dir}/thumbnail/${photo.src}`,
      title: photo.title,
      place: photo.place,
      date: photo.date,
      width: photo.width,
      height: photo.height,
    };
  });

  const titleLast = title[title.length - 1];

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <script dangerouslySetInnerHTML={{ __html: typekit }} />
      </Head>
      <Main photos={photos} searchParams={searchParams} />
      <Footer>
        <h1>
          {title.substring(0, title.length - 1)}
          {['）', '」', '』', '】', '］', '〉', '》', '。', '、'].includes(titleLast) ? (
            <Half>）</Half>
          ) : (
            <span>{titleLast}</span>
          )}
        </h1>
        <p className={'date'}>{date}</p>
        <Copyright>
          <small>
            © いなにわうどん. ページ中の写真は{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">
              クリエイティブ・コモンズ 表示 4.0 国際 (CC BY 4.0)
            </a>{' '}
            の下で頒布しています<Half>。</Half>
          </small>
        </Copyright>
      </Footer>
    </>
  );
};

export const generateStaticParams = () => {
  const dirPath = path.join(process.cwd(), '/src/data/photo');
  const topics = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace('.json', ''));
  return topics.map((topic) => ({ id: topic }));
};

export const generateMetadata = ({ params }: PageProps) => {
  const { id } = params;
  const jsonPath = path.join(process.cwd(), `src/data/photo/${id}.json`);
  const json: PhotoData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  return { title: json.title };
};

export default Page;
