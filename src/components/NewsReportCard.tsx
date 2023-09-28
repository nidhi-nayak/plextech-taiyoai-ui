import { FunctionComponent } from "react";
import styles from "./NewsReportCard.module.css";

const NewsReportCard: FunctionComponent = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
      </div>
      <div className={styles.timelineChild} />
      <div className={styles.timelineItem} />
      <div className={styles.timelineInner} />
      <b className={styles.newsReportOf}>NEWS REPORT OF SPCECIFIED DAY</b>
      <b className={styles.newsReportNumber}>
        NEWS REPORT NUMBER 2 OF SPECIFIED DAY
      </b>
      <b className={styles.newsReportNumber1}>
        NEWS REPORT NUMBER 3 OF SPECIFIED DAY (COULD BE SOME EVENT THAT
        HAPPENED)
      </b>
    </div>
  );
};

export default NewsReportCard;
