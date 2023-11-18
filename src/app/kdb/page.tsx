import { Metadata } from 'next';
import Link from 'next/link';
import { styled } from '@linaria/react';

import CustomList from '@/components/common/CustomList';
import PageAnchor from '@/components/common/PageAnchor';
import PageWrapper from '@/components/common/PageWrapper';
import { kdbArticleLinks, kdbMainLinks, kdbPresentationLinks, KdbLinkItem } from '@/const/kdb';

const H1 = styled.h1`
  margin: 0 0 10px 0;
`;

const ListH3 = styled.h3`
  font-size: 1em;
  margin: 0 0 2px 0;
`;

const Paragraph = styled.div`
  margin: 0;
`;

const DocumentLink = styled.div`
  line-height: 1em;
  padding: 3px 0 3px 10px;
  border-left: solid 2px #ccc;
  display: inline-block;
  cursor: pointer;
`;

const title = 'KdB もどき関連リンク';

export const metadata: Metadata = {
  title,
};

const Page = () => {
  const LinkCollection = (links: KdbLinkItem[]) => (
    <CustomList>
      {links.map((link) => (
        <li>
          {
            <ListH3>
              <PageAnchor href={link.href}>{link.title}</PageAnchor>
            </ListH3>
          }
          {link.description && <Paragraph>{link.description}</Paragraph>}
          {link.references && (
            <Paragraph>
              {link.references.map((reference) => (
                <Link href={reference.href}>
                  <DocumentLink>{reference.title}</DocumentLink>
                </Link>
              ))}
            </Paragraph>
          )}
        </li>
      ))}
    </CustomList>
  );

  return (
    <PageWrapper title={title} path="/kdb">
      <main>
        <H1>{title}</H1>
        {LinkCollection(kdbMainLinks)}
        <h2>発表</h2>
        {LinkCollection(kdbPresentationLinks)}
        <h2>記事掲載など</h2>
        {LinkCollection(kdbArticleLinks)}
      </main>
    </PageWrapper>
  );
};

export default Page;
