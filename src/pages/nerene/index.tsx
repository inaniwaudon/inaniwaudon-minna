import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Page from '@/components/common/Page';
import { nerene } from '@/const/nerene';
import { after } from 'node:test';

const Canvas = styled.canvas`
  width: 100%;
  height: 200px;
`;

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

const Index = () => {
  const height = 200 * 2;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const width = window.innerWidth * 2;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    const context = canvasRef.current.getContext('2d');
    if (!context) {
      return;
    }

    const countsPerHour = [...Array(12)].map(
      (_, x) => nerene.filter((tweet) => tweet.date[3] == x).length
    );
    const max = Math.max(...countsPerHour);
    const mountHeight = height - 40;
    const maxHours = 10;
    const splitCount = 10;

    context.moveTo(0, height);
    //context.lineTo(0, 0);

    for (let i = 0; i < maxHours + 1; i++) {
      const beforeX = (width / (maxHours + 1)) * i;
      const afterX = (width / (maxHours + 1)) * (i + 1);
      const beforeY = height - (countsPerHour[i] / max) * mountHeight;
      const afterY = height - (countsPerHour[i + 1] / max) * mountHeight;
      for (let j = 0; j < splitCount; j++) {
        const x = beforeX + ((afterX - beforeX) / splitCount) * j;
        const y = beforeY + ((afterY - beforeY) / splitCount) * j + Math.random() * 20;
        context.lineTo(x, y);
      }
      context.font = '24px Helvetica';
      context.fillText(i.toString(), beforeX + 4, beforeY - 14);
    }
    context.fillStyle = '#069';
    context.fill();
  }, [canvasRef]);

  const title = 'ネレネー山脈';

  return (
    <Page title={title}>
      <main>
        <h1>ネレネー山脈</h1>
        <p>氷河かもしれない</p>
        <Canvas ref={canvasRef} />
        <TweetList>
          {nerene.map((tweet) => {
            const min = ('0' + tweet.date[4]).slice(-2);
            return (
              <Tweet key={tweet.id}>
                <a href={`https://twitter.com/kyoto_mast21/status/${tweet.id}`}>
                  <TweetContent>
                    {tweet.message ?? 'ネレネー山脈'}
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
    </Page>
  );
};

export default Index;
