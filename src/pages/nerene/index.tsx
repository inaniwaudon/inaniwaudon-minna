import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { nerene } from '@/const/nerene';

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const context = canvasRef.current.getContext('2d');
    if (!context) {
      return;
    }
    context.fillRect(0, 0, 100, 100);
  }, [canvasRef]);

  return (
    <>
      <Head>
        <title>ネレネー山脈</title>
      </Head>
      <main>
        <h1>ネレネー山脈</h1>
        <p>生活習慣</p>
        {nerene.map((tweet) => (
          <div>
            <a href={`https://twitter.com/kyoto_mast21/status/${tweet.id}`}>
              {tweet.message ?? 'ネレネー山脈'}
              {tweet.date}
            </a>
          </div>
        ))}
      </main>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Index;
