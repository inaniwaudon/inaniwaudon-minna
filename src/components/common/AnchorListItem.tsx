import Anchor from "./Anchor";
import styles from "./AnchorListItem.module.scss";
import AnchorOnClick from "./AnchorOnClick";

type AnchorListItemProps = {
  title: string;
  date?: string;
  description?: string;
  content?: React.ReactNode;
} & ({ href: string } | { onClick: () => void });

const AnchorListItem = (props: AnchorListItemProps) => {
  const { title, date, description, content } = props;

  return (
    <li>
      <header className={styles.header}>
        {date && <time className={styles.time}>{date}</time>}
        {description && (
          <>
            {" "}
            – <span className={styles.description}>{description}</span>
          </>
        )}
      </header>
      <div>
        {"href" in props ? (
          <Anchor href={props.href}>{title}</Anchor>
        ) : (
          <AnchorOnClick onClick={props.onClick}>{title}</AnchorOnClick>
        )}
      </div>
      {content && <div className={styles.content}>{content}</div>}
    </li>
  );
};

export default AnchorListItem;
