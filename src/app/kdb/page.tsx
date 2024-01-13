import { Metadata } from "next";

import AnchorListItem from "@/components/common/AnchorListItem";
import CustomList from "@/components/common/CustomList";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import {
  KdbLinkItem,
  kdbArticleLinks,
  kdbMainLinks,
  kdbPresentationLinks,
} from "@/const/kdb";

const title = "KdB もどき関連リンク";

export const metadata: Metadata = {
  title,
};

interface LinkCollectionProps {
  links: KdbLinkItem[];
}

const LinkCollection = ({ links }: LinkCollectionProps) => (
  <CustomList>
    {links.map((link) => (
      <AnchorListItem
        href={link.href}
        title={link.title}
        date={link.date}
        description={link.description}
        content={link.content}
      />
    ))}
  </CustomList>
);

const Page = () => {
  return (
    <PageWrapper title={title} path="/kdb">
      <main>
        <PageTitle>{title}</PageTitle>
        <LinkCollection links={kdbMainLinks} />
        <h2>発表</h2>
        <LinkCollection links={kdbPresentationLinks} />
        <h2>記事掲載など</h2>
        <LinkCollection links={kdbArticleLinks} />
      </main>
    </PageWrapper>
  );
};

export default Page;
