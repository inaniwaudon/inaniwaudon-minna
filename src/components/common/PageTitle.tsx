import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  children: string;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export default PageTitle;
