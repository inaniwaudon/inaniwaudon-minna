import styles from "./H3.module.scss";

const H3 = (props: React.ComponentPropsWithoutRef<"h3">) => {
  return <h3 className={styles.h3} {...props} />;
};

export default H3;
