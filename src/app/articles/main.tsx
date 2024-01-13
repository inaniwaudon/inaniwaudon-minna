"use client";

import { styled } from "@linaria/react";

import AnchorListItem from "@/components/common/AnchorListItem";
import Checkbox from "@/components/common/Checkbox";
import CustomList from "@/components/common/CustomList";
import PageTitle from "@/components/common/PageTitle";
import { ArticleTag, articleLinks, articleTags } from "@/const/articles";
import { useCustomParams } from "@/lib/useCustomParams";
import { useMemo } from "react";

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const tags = [
  { key: "hongoshi", label: "hongoshi", keyColor: "#ff32ab" },
  { key: "tech", label: "tech", keyColor: "#cc22db" },
  { key: "design", label: "design", keyColor: "#2656f3" },
  { key: "random", label: "random", keyColor: "#009ae1" },
  { key: "speaking", label: "speaking", keyColor: "#00b300" },
];

interface MainProps {
  title: string;
}

export const Main = ({ title }: MainProps) => {
  const customParams = useCustomParams("tag", true);
  const { isSelectedTag } = customParams;

  const selectedTags: ArticleTag[] = articleTags.filter((tag) =>
    isSelectedTag(tag),
  );

  const filteredLinks = useMemo(
    () =>
      selectedTags.length > 0
        ? articleLinks.filter(
            (link) =>
              link.tags &&
              selectedTags.every((tag) =>
                (link.tags as string[]).includes(tag),
              ),
          )
        : articleLinks,
    [selectedTags],
  );

  return (
    <main>
      <TopHeader>
        <PageTitle>{title}</PageTitle>
        <Checkbox paramKey="tag" tags={tags} customParams={customParams} />
      </TopHeader>
      <CustomList>
        {filteredLinks.map((link) => (
          <AnchorListItem
            key={link.href}
            href={link.href}
            title={link.title}
            date={link.date}
            description={link.description}
          />
        ))}
      </CustomList>
    </main>
  );
};
