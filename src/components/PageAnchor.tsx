import React, { ReactChild } from "react";
import Link from "next/link";
import styles from "./PageAnchor.module.scss";

interface PageAnchorProps {
  href: string;
  children: ReactChild;
}

const PageAnchor = ({ href, children }: PageAnchorProps) => (
  <Link href={href}>
    <div className={styles.Link}>{children}</div>
  </Link>
);

export default PageAnchor;
