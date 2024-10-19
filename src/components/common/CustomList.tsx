import styles from "./CustomList.module.scss";

interface CustomListProps {
  children: React.ReactNode;
}

const CustomList = ({ children }: CustomListProps) => {
  return <ul className={styles.ul}>{children}</ul>;
};

export default CustomList;
