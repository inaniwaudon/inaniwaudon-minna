"use client";

import { styled } from "@linaria/react";
import { useEffect, useState } from "react";

import { PhotoInfo } from "@/lib/photo";
import { SearchParams, shuffle } from "@/lib/utils";
import { PhotoList } from "./page";

const Wrapper = styled.main`
  min-height: 100vh;
  gap: 0;
  background: #000;
  display: flex;
`;

const Column = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
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

const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 1;

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
`;

interface MainProps {
  photos: PhotoList;
  searchParams: SearchParams;
}

const Main = ({ photos, searchParams }: MainProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [columnCount, setColumnCount] = useState(1);
  const [sortedPhotos, setSortedPhotos] = useState<PhotoList>([]);
  const [photoColumns, setPhotoColumns] = useState<PhotoList[]>([]);

  const imgWidth = windowWidth / columnCount;

  const zoom = (zooms: boolean) => {
    const count = Math.max(1, columnCount + (zooms ? 1 : -1));
    setColumnCount(count);
  };

  const calculateHeight = (photo: PhotoInfo) => {
    return (photo.height / photo.width) * imgWidth;
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    setColumnCount(Math.max(Math.floor(window.innerWidth / 350), 2));
  }, []);

  useEffect(() => {
    const isUnsorted = "unsort" in searchParams;
    setSortedPhotos(isUnsorted ? photos : shuffle(photos));
  }, [searchParams, photos]);

  useEffect(() => {
    const allTotalHeight = photos.reduce(
      (previous, photo) => previous + calculateHeight(photo),
      0,
    );
    let totalHeight = 0;
    const newPhotos: PhotoList[] = [[]];
    for (const photo of sortedPhotos) {
      newPhotos[newPhotos.length - 1].push(photo);
      totalHeight += calculateHeight(photo);
      if (totalHeight > allTotalHeight / columnCount) {
        newPhotos.push([]);
        totalHeight = 0;
      }
    }
    setPhotoColumns(newPhotos);
  }, [photos, sortedPhotos, columnCount, calculateHeight]);

  return (
    <>
      <Wrapper style={{ columnCount }}>
        {photoColumns.map((column, index) => (
          <Column width={imgWidth} key={index}>
            {column.map((photo) => (
              <a href={photo.src} key={photo.src}>
                <ImgWrapper>
                  <Img
                    src={photo.thumbnail_src}
                    width={imgWidth}
                    height={calculateHeight(photo)}
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
          </Column>
        ))}
      </Wrapper>
      <Navigation>
        <a onClick={() => zoom(true)}>−</a>
        <a onClick={() => zoom(false)}>＋</a>
      </Navigation>
    </>
  );
};

export default Main;
