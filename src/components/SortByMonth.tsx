import { FunctionComponent } from "react";
import styles from "./SortByMonth.module.css";

type SortByMonthType = {
  sortByMonth?: string;
};

const SortByMonth: FunctionComponent<SortByMonthType> = ({
  sortByMonth = "Month",
}) => {
  return <div className={styles.sortByMonth}>{sortByMonth}</div>;
};

export default SortByMonth;
