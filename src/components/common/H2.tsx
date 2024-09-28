import styles from "./H2.module.scss";

const H2 = (props: React.ComponentPropsWithoutRef<"h2">) => {
  return <h2 className={styles.h2} {...props} />;
};

export default H2;
