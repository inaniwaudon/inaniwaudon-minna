import Anchor from "./Anchor";
import styles from "./Footer.module.scss";

interface FooterProps {
  title: string;
  path: string;
}

const Footer = ({ title, path }: FooterProps) => {
  return (
    <footer className={styles.wrapper}>
      現在のページ：
      <Anchor href={path}>
        {title}（{path}）
      </Anchor>
      <span className={styles.split}>｜</span>
      <Anchor href="/">トップページ</Anchor> –{" "}
      <Anchor href="#">ページ上部</Anchor>
    </footer>
  );
};

export default Footer;
