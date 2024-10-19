import Link from "next/link";

import styles from "./Anchor.module.scss";

interface PageAnchorProps {
  href: string;
  children: React.ReactNode;
}

const Anchor = ({ href, children }: PageAnchorProps) => {
  const Content = (
    <span className={styles.content}>
      {children}
      <span className={styles.line} />
    </span>
  );

  if (href.startsWith("https://") || href.startsWith("http://")) {
    return <a href={href}>{Content}</a>;
  }
  return <Link href={href}>{Content}</Link>;
};

export default Anchor;
