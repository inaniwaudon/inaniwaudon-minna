import fs from 'fs';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PhotoData } from '@/const/photo';

const Main = styled.main`
  font-family: sans-serif;
  min-height: 100vh;
  gap: 0;
  background: #000;
`;

const ImgWrapper = styled.div`
position: relative;
}`;

const Img = styled.img`
  width: 100%;
  vertical-align: top;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 20px 24px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  transition: opacity 0.2s ease-out;
  position: absolute;
  top: 0;

  &:hover {
    opacity: 0.8;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 4px 0 0 0;
  }
`;

const Footer = styled.footer`
  width: calc(100% - 80px);
  color: #fff;
  text-align: right;
  font-family: sans-serif;
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

const Navigation = styled.nav`
  position: fixed;
  bottom: 16px;
  left: 16px;
  display: flex;
  gap: 10px;

  a {
    width: 34px;
    height: 34px;
    line-height: 34px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    display: block;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  button + button {
    margin-left: 4px;
  }
`;

const Half = styled.span`
  width: 0.5em;
  display: inline-block;
`;

type PhotoList = ({
  thumnail_src: string;
} & PhotoData)[];

const topics = ['2022kyushu', '210301ysfh', 'kiroro'];

const shuffle = (array: any[]): any[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const typekit = `(function(d) {
  var config = {
    kitId: 'mjm0riz',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);`;

interface IndexProps {
  title: string;
  date: string;
  photos: PhotoList;
}

const Index = (props: IndexProps) => {
  const [imgWidth, setImgWidth] = useState(0);
  const [columnCount, setColumnCount] = useState(0);

  const changeColumnCount = (count: number) => {
    setColumnCount(count);
    setImgWidth(window.innerWidth / count);
  };

  const zoom = (zooms: boolean) => {
    const count = Math.max(1, columnCount + (zooms ? 1 : -1));
    changeColumnCount(count);
  };

  const router = useRouter();
  const [photos, setPhotos] = useState<PhotoList>([]);

  useEffect(() => {
    changeColumnCount(Math.max(Math.floor(window.innerWidth / 350), 2));
    window.onresize = () => {
      setImgWidth(window.innerWidth / columnCount);
    };
    setPhotos('sorted' in router.query ? props.photos : shuffle(props.photos));
  }, [router.query]);

  const titleLast = props.title[props.title.length - 1];

  return (
    <>
      <Head>
        <title>{props.title} - いなにわうどん.みんな</title>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <script dangerouslySetInnerHTML={{ __html: typekit }} />
      </Head>
      <Main style={{ columnCount }}>
        {photos.map((photo) => (
          <a href={photo.src} key={photo.src}>
            <ImgWrapper>
              <Img
                src={photo.thumnail_src}
                width={imgWidth}
                height={(photo.height / photo.width) * imgWidth}
                alt={photo.title}
              />
              <Description>
                <h3>{photo.title}</h3>
                <p>{photo.place}</p>
                <p>{photo.date}</p>
              </Description>
            </ImgWrapper>
          </a>
        ))}
      </Main>
      <Footer>
        <h1>
          {props.title.substring(0, props.title.length - 1)}
          {['）', '」', '』', '】', '］', '〉', '》', '。', '、'].includes(titleLast) ? (
            <Half>）</Half>
          ) : (
            <span>{titleLast}</span>
          )}
        </h1>
        <p className={'date'}>{props.date}</p>
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
      <Navigation>
        <a onClick={() => zoom(true)}>−</a>
        <a onClick={() => zoom(false)}>＋</a>
      </Navigation>
    </>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}): Promise<{ props: IndexProps }> => {
  const jsonPath = path.join(process.cwd(), `src/data/photo/${params.id}.json`);
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  return {
    props: {
      title: json.title,
      date: json.date,
      photos: json.photos.map((photo: PhotoData) => ({
        src: json.dir + photo.src,
        thumnail_src: json.dir + 'thumbnail/' + photo.src,
        title: photo.title,
        place: photo.place,
        date: photo.date,
        width: photo.width,
        height: photo.height,
      })),
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: topics.map((topic) => ({ params: { id: topic } })),
    fallback: false,
  };
};

export default Index;
