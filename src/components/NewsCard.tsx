import { FunctionComponent } from "react";
import styles from "./NewsCard.module.css";

type NewsCardType = {
  dateAndTime?: string;
  articleTitle?: string;
  articleDescription?: string;
};

const NewsCard: FunctionComponent<NewsCardType> = ({
  dateAndTime,
  articleTitle,
  articleDescription,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.oct2023}>{dateAndTime}</div>
      <div className={styles.articleTitle}>{articleTitle}</div>
      <div className={styles.shortDescriptionOf}>{articleDescription}</div>
    </div>
  );
};

export default NewsCard;
