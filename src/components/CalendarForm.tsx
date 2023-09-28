import { FunctionComponent } from "react";
import styles from "./CalendarForm.module.css";

type CalendarFormType = {
  dateAndDay?: string;
};

const CalendarForm: FunctionComponent<CalendarFormType> = ({ dateAndDay }) => {
  return (
    <div className={styles.calender}>
      <div className={styles.calenderChild} />
      <div className={styles.oct24Wednesday}>{dateAndDay}</div>
      <div className={styles.tParent}>
        <b className={styles.t}>T</b>
        <b className={styles.f}>F</b>
        <b className={styles.s}>S</b>
        <b className={styles.s1}>S</b>
        <b className={styles.m}>M</b>
        <b className={styles.t1}>T</b>
        <b className={styles.w}>W</b>
      </div>
      <div className={styles.parent}>
        <b className={styles.b}>1</b>
        <b className={styles.b1}>2</b>
        <b className={styles.b2}>3</b>
        <b className={styles.b3}>4</b>
        <b className={styles.b1}>6</b>
        <b className={styles.b3}>7</b>
      </div>
      <div className={styles.group}>
        <b className={styles.b}>8</b>
        <b className={styles.b1}>9</b>
        <b className={styles.b2}>10</b>
        <b className={styles.b3}>11</b>
        <b className={styles.b1}>12</b>
        <b className={styles.b3}>13</b>
        <b className={styles.b3}>14</b>
      </div>
      <div className={styles.container}>
        <b className={styles.b}>15</b>
        <b className={styles.b1}>16</b>
        <b className={styles.b2}>17</b>
        <b className={styles.b3}>18</b>
        <b className={styles.b1}>19</b>
        <b className={styles.b3}>20</b>
        <b className={styles.b3}>21</b>
      </div>
      <div className={styles.calenderItem} />
      <div className={styles.frameDiv}>
        <b className={styles.b2}>22</b>
        <b className={styles.b1}>23</b>
        <b className={styles.b22}>24</b>
        <b className={styles.b3}>25</b>
        <b className={styles.b1}>26</b>
        <b className={styles.b3}>27</b>
        <b className={styles.b3}>28</b>
      </div>
      <div className={styles.parent1}>
        <b className={styles.b2}>29</b>
        <b className={styles.b1}>30</b>
        <b className={styles.b2}>31</b>
      </div>
      <div className={styles.calenderInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.calenderChild1} />
      <div className={styles.calenderChild2} />
      <div className={styles.calenderChild3} />
      <div className={styles.calenderChild4} />
      <div className={styles.calenderChild5} />
      <div className={styles.calenderChild6} />
      <div className={styles.calenderChild7} />
      <div className={styles.calenderChild8} />
      <div className={styles.calenderChild9} />
      <div className={styles.calenderChild10} />
    </div>
  );
};

export default CalendarForm;
