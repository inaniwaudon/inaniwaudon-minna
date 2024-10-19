import { Metadata } from "next";

import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import styles from "./page.module.scss";
import text from "./text";

const title = "日記";

export const metadata: Metadata = {
  title: title,
};

const Page = () => {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const items: {
    date: string;
    body: string;
    photo?: { src: string; alt: string };
  }[] = [];
  for (const line of lines) {
    if (line.match(/^\d{4}\/\d{1,2}/) || line.match(/^\d 月のふりかえり/)) {
      items.push({ date: line, body: "" });
    } else {
      if (line.startsWith("!")) {
        const splited = line.slice(1).split("|");
        items.at(-1)!.photo = { src: splited[0], alt: splited[1] ?? "" };
      } else {
        items.at(-1)!.body += line;
      }
    }
  }

  return (
    <PageWrapper title={title} path="/articles">
      <main className={styles.main}>
        <PageTitle>日記</PageTitle>
        {items.map(({ date, body, photo }) => (
          <div key={date}>
            <H3>{date}</H3>
            <p className={styles.paragraph}>{body}</p>
            {photo && (
              <a
                className={styles.photoWrapper}
                href={`/assets/diary/${photo.src}`}
              >
                <img
                  className={styles.photo}
                  src={`/assets/diary/${photo.src}`}
                  alt={photo.alt}
                />
              </a>
            )}
          </div>
        ))}
      </main>
    </PageWrapper>
  );
};

export default Page;
