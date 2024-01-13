import { Metadata } from "next";

import {
  KdbLinkItem,
  kdbArticleLinks,
  kdbMainLinks,
  kdbPresentationLinks,
} from "@/app/kdb/kdb";
import AnchorListItem from "@/components/common/AnchorListItem";
import CustomList from "@/components/common/CustomList";
import H2 from "@/components/common/H2";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";

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
        <H2>発表</H2>
        <LinkCollection links={kdbPresentationLinks} />
        <H2>記事掲載など</H2>
        <LinkCollection links={kdbArticleLinks} />
      </main>
    </PageWrapper>
  );
};

export default Page;
