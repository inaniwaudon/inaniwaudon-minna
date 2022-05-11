import fs from "fs";
import path from "path";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Index.module.scss";

interface Props {
  title: string;
  date: string;
  photos: PhotoList;
}

interface PhotoData {
  src: string;
  title: string;
  place: string;
  date: string;
  width: number;
  height: number;
}

type PhotoList = ({
  thumnail_src: string;
} & PhotoData)[];

const topics = ["2022kyushu", "210301ysfh", "kiroro"];

const shuffle = (array: any[]): any[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Index = (props: Props) => {
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
    setPhotos("sorted" in router.query ? props.photos : shuffle(props.photos));
  }, [router.query]);

  const titleLast = props.title[props.title.length - 1];

  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title} - いなにわうどん.みんな</title>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(d) {
              var config = {
                kitId: 'mjm0riz',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);`,
          }}
        />
      </Head>
      <main className={styles.main} style={{ columnCount }}>
        {photos.map((photo) => (
          <a href={photo.src}>
            <div className={styles.imgWrapper} key={photo.src}>
              <img
                src={photo.thumnail_src}
                width={imgWidth}
                height={(photo.height / photo.width) * imgWidth}
                alt={photo.title}
              />
              <div className={styles.description}>
                <h3>{photo.title}</h3>
                <p>{photo.place}</p>
                <p>{photo.date}</p>
              </div>
            </div>
          </a>
        ))}
      </main>
      <footer className={styles.footer}>
        <h1>
          {props.title.substring(0, props.title.length - 1)}
          {["）", "」", "』", "】", "］", "〉", "》", "。", "、"].includes(
            titleLast
          ) ? (
            <span className={styles.half}>）</span>
          ) : (
            <span>{titleLast}</span>
          )}
        </h1>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.copyright}>
          <small>
            © いなにわうどん. ページ中の写真は{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">
              クリエイティブ・コモンズ 表示 4.0 国際 (CC BY 4.0)
            </a>{" "}
            の下で頒布しています<span className={styles.half}>。</span>
          </small>
        </p>
      </footer>
      <nav className={styles.nav}>
        <a
          onClick={() => {
            zoom(true);
          }}
        >
          −
        </a>
        <a
          onClick={() => {
            zoom(false);
          }}
        >
          ＋
        </a>
      </nav>
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}): Promise<{ props: Props }> => {
  const jsonPath = path.join(process.cwd(), `src/data/photo/${params.id}.json`);
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  return {
    props: {
      title: json.title,
      date: json.date,
      photos: json.photos.map((photo: PhotoData) => ({
        src: json.dir + photo.src,
        thumnail_src: json.dir + "thumbnail/" + photo.src,
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
