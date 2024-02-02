"use client";

import { styled } from "@linaria/react";

import Checkbox from "@/components/common/Checkbox";
import H2 from "@/components/common/H2";
import { useCustomParams } from "@/lib/useCustomParams";
import { SearchParams } from "@/lib/utils";
import { nengajo } from "../const/nengajo";

const Header = styled.header`
  margin: 6px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ImgWrapper = styled.div<{ displays: boolean }>`
  display: ${(props) => (props.displays ? "block" : "none")};
`;

const Img = styled.img`
  max-width: 500px;
  max-height: 500px;
  transition: box-shadow 0.2s ease;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;  
  }
`;

const tags = [
  { key: "2024", label: "2024", keyColor: "#fa981c" },
  { key: "2023", label: "2023", keyColor: "#ff32ab" },
  { key: "2022", label: "2022", keyColor: "#2656f3" },
];

interface NengajoProps {
  searchParams: SearchParams;
}

const Nengajo = ({ searchParams }: NengajoProps) => {
  const customParams = useCustomParams("year", false, "2024", searchParams);
  const { isSelectedTag } = customParams;

  const yearStr = ["2024", "2023", "2022"].find((year) => isSelectedTag(year));
  const year = yearStr ? parseInt(yearStr) : 2024;

  return (
    <div>
      <Header>
        <H2 style={{ margin: "0" }}>年賀状</H2>
        <Checkbox paramKey="year" tags={tags} customParams={customParams} />
      </Header>
      {nengajo.map((item) => (
        <ImgWrapper displays={item.year === year} key={item.year}>
          <a href={item.src}>
            <Img
              src={item.src}
              alt={item.alt}
              loading={item.year === year ? "eager" : "lazy"}
            />
          </a>
        </ImgWrapper>
      ))}
    </div>
  );
};

export default Nengajo;
