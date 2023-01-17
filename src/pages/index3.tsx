import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const imgSrc = 'docs/c99.webp';
const text =
  'いなにわうどんみんな'.repeat(10) +
  '轍組版清澄筑' +
  'コミケ終わりに大崎の六厘舎へ昨年も年内ラスト麺をここで食べたので一年経ったんだなあという感じです';
const verticalSplit = 5;

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Canvas = styled.canvas`
  width: 120%;
  transform: rotate(-4deg);
  position: absolute;
  top: -60px;
  left: -30px;
`;

const Click = styled.div`
  color: #333;
  font-size: 40px;
  position: absolute;
  left: 100px;
  bottom: 70px;

  img {
    width: 50%;
  }

  &:hover {
    color: #666;

    img {
      filter: brightness(300%);
    }
  }
`;

// main
const Main = styled.main`
  min-height: 100vh;
  position: relative;
`;

const Navigation = styled.nav`
  height: 30px;
  display: flex;
  gap: 20px;
  position: absolute;
  top: 30px;
  right: 40px;
`;

const GitHubAnchor = styled.a`
  text-decoration: none;
  display: flex;
  gap: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const GitHubIcon = styled.img`
  height: 30px;
`;

const OthersAnchor = styled.a`
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const NavigationText = styled.div`
  height: 30px;
  line-height: 30px;
  color: #333;
  margin: 0;
`;

// background
const BGImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Footer = styled.footer`
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  font-size: 14px;
  opacity: 0.7;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imgSrc});
  background-position: center;
  background-size: cover;
`;

const shuffle = <T,>(array: T[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface Props {
  photos: string[];
}

const Index = ({ photos }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const families = [
    'RodinPro-L',
    'RodinNTLGPro-B',
    'MatissePro-DB',
    'BabyPopStd-EB',
    'KafuTechnoStd-E',
  ];

  useEffect(() => {
    (async () => {
      if (!canvasRef.current) {
        return;
      }
      const width = window.innerWidth * 4 * 1.2;
      const height = window.innerHeight * 4 * 1.2;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      const context = canvasRef.current.getContext('2d');
      if (!context) {
        return;
      }

      const drawLineRoundRect = (x: number, y: number, size: number, radius: number) => {
        context.moveTo(x + radius, y);
        context.arcTo(x + size, y, x + size, y + size - radius, radius);
        context.arcTo(x + size, y + size, x + radius, y + size, radius);
        context.arcTo(x, y + size, x, y + radius, radius);
        context.arcTo(x, y, x + size - radius, y, radius);
      };

      const getColor = (width: number) => {
        const r = 51 * (width / size);
        return `rgba(${r}, ${r}, ${r}, 0.9)`;
      };

      const rects: {
        x: number;
        y: number;
        size: number;
        stroke: boolean;
      }[] = [];
      const texts: {
        char: string;
        x: number;
        y: number;
        size: number;
        family: string;
        color: string;
      }[] = [];

      const splitRegion = (x: number, y: number, width: number, height: number, count: number) => {
        if (Math.random() < 0.3 || count === 6) {
          // not split
          if (width === height) {
            const char = shuffle(text.split(''))[0];
            let fontSizeRatio: number;
            let color;
            if (Math.random() < 0.4) {
              // with a rect
              const isStroke = Math.random() < 0.3;
              rects.push({ x, y, size: width, stroke: isStroke });
              color = isStroke ? getColor(width) : '#fff';
              fontSizeRatio = 0.9;
            } else {
              color = getColor(width);
              fontSizeRatio = 1.0;
            }
            texts.push({
              char,
              x: x + (width * (1.0 - fontSizeRatio)) / 2,
              y: y + width * (880 / 1000) - (width * (1.0 - fontSizeRatio)) / 2,
              size: width * fontSizeRatio,
              family: families[Math.floor(Math.random() * families.length)],
              color,
            });
          } else {
            if (width > height) {
              // horizontal split
              splitRegion(x, y, width / 2, height, 6);
              splitRegion(x + width / 2, y, width / 2, height, 6);
            } else {
              // vertical split
              splitRegion(x, y, width, height / 2, 6);
              splitRegion(x, y + height / 2, width, height / 2, 6);
            }
          }
        } else {
          if (width > height) {
            // horizontal split
            splitRegion(x, y, width / 2, height, count + 1);
            splitRegion(x + width / 2, y, width / 2, height, count + 1);
          } else {
            // vertical split
            splitRegion(x, y, width, height / 2, count + 1);
            splitRegion(x, y + height / 2, width, height / 2, count + 1);
          }
        }
      };

      // draw
      const size = height / verticalSplit;

      // split regions
      for (let y = 0; y < verticalSplit; y++) {
        for (let x = 0; x < width / size; x++) {
          if ((x === 0 || x === 1) && y === verticalSplit - 2) {
          } else {
            splitRegion(size * x, size * y, size, size, 0);
          }
        }
      }

      // draw rects
      const rectPadding = 10;

      for (const rect of rects) {
        context.beginPath();
        drawLineRoundRect(
          rect.x + rectPadding,
          rect.y + rectPadding,
          rect.size - rectPadding * 2,
          rect.size / 10
        );
        if (rect.stroke) {
          context.lineWidth = Math.max(rect.size / 50, 6);
          context.stroke();
        } else {
          context.fill();
        }
      }

      for (const text of texts) {
        context.font = `${text.size}px ${text.family}`;
        context.fillText(text.char, text.x, text.y);
      }

      context.globalCompositeOperation = 'xor';
      context.fillStyle = 'rgba(255,255,255,0.95)';
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = 'source-over';

      // draw texts
      for (const text of texts) {
        context.font = `${text.size}px ${text.family}`;
        context.fillStyle = text.color;
        context.fillText(text.char, text.x, text.y);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <style>{`html {
      scroll-behavior: smooth;
`}</style>
      </Head>
      <CanvasWrapper>
        <Canvas ref={canvasRef} />
        <a href="#main">
          <Click>
            <img src="assets/click.svg" alt="Click!" width="300" height="85" />
          </Click>
        </a>
      </CanvasWrapper>
      <Main id="main">
        <Navigation>
          <GitHubAnchor href="https://github.com/inaniwaudon">
            <GitHubIcon src="assets/github.svg" />
            <NavigationText>inaniwaudon</NavigationText>
          </GitHubAnchor>
          <NavigationText>／</NavigationText>
          <OthersAnchor href="index2">
            <NavigationText>GitHub 以外</NavigationText>
          </OthersAnchor>
        </Navigation>
      </Main>
      <BGImageWrapper>
        <BgImage />
        <Footer>コミックマーケット99，東京ビッグサイト，（2021.12.30）</Footer>
      </BGImageWrapper>
    </>
  );
};

export default Index;
