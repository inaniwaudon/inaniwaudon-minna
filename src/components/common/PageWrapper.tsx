import Footer from "@/components/common/Footer";
import styles from "./PageWrapper.module.scss";

interface PageWrapperProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children, path }: PageWrapperProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        {children}
        <Footer title={title} path={path} />
      </div>
    </>
  );
};

export default PageWrapper;
