import Anchor from "./Anchor";
import styles from "./AnchorListItem.module.scss";

interface AnchorListItemProps {
  href: string;
  title: string;
  date?: string;
  description?: string;
  content?: React.ReactNode;
}

const AnchorListItem = ({
  href,
  title,
  date,
  description,
  content,
}: AnchorListItemProps) => {
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
        <Anchor href={href}>{title}</Anchor>
      </div>
      {content && <div className={styles.content}>{content}</div>}
    </li>
  );
};

export default AnchorListItem;
