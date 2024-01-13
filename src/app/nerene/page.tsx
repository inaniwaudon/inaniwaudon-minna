import { styled } from "@linaria/react";
import { Metadata } from "next";

import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { nerene } from "@/const/nerene";
import Canvas from "./Canvas";

const Tweet = styled.div`
  a {
    color: #333;
    text-decoration: none;
  }
  &:hover {
    background: #f3ffff;
  }
`;

const TweetList = styled.section`
  ${Tweet} + ${Tweet} {
    border-top: solid 1px #ccc;
  }
`;

const TweetContent = styled.div`
  padding: 12px 16px;
`;

const TweetFooter = styled.div`
  color: #666;
  font-size: 14px;
`;

const title = "ネレネー山脈";

export const metadata: Metadata = {
  title,
  description: "氷河かもしれない",
};

const Page = () => {
  return (
    <PageWrapper title={title} path="/nerene">
      <main>
        <PageTitle>ネレネー山脈</PageTitle>
        <p>氷河かもしれない</p>
        <Canvas />
        <TweetList>
          {nerene.map((tweet) => {
            const min = `0${tweet.date[4]}`.slice(-2);
            return (
              <Tweet key={tweet.id}>
                <a href={`https://twitter.com/kyoto_mast21/status/${tweet.id}`}>
                  <TweetContent>
                    {tweet.message ?? "ネレネー山脈"}
                    <TweetFooter>
                      <time>{`${tweet.date[0]}年${tweet.date[1]}月${tweet.date[2]}日・午前${tweet.date[3]}:${min}`}</time>
                    </TweetFooter>
                  </TweetContent>
                </a>
              </Tweet>
            );
          })}
        </TweetList>
      </main>
    </PageWrapper>
  );
};

export default Page;
