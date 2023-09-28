import { FunctionComponent } from "react";
import NewsReportCard from "../components/NewsReportCard";
import CalendarForm from "../components/CalendarForm";
import SearchBar from "../components/SearchBar";
import SortByMonth from "../components/SortByMonth";
import NewsCard from "../components/NewsCard";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.sidebar}>
        <img className={styles.sidebarChild} alt="" src="/ellipse-1@2x.png" />
        <img className={styles.sidebarItem} alt="" src="/ellipse-2@2x.png" />
        <b className={styles.saraDoe}>Sara Doe</b>
        <div className={styles.moderator}>Moderator</div>
        <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
        <img className={styles.bellIcon} alt="" src="/bell.svg" />
        <NewsReportCard />
        <CalendarForm dateAndDay="24 Oct, Wednesday" />
        <div className={styles.sidebarInner} />
        <div className={styles.rectangleDiv} />
      </div>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <img className={styles.desktop1Child} alt="" src="/frame-12.svg" />
      <div className={styles.desktop1Item} />
      <SearchBar />
      <div className={styles.searchHere}>Search here</div>
      <b className={styles.newsActivity}>News Activity</b>
      <b className={styles.recentNewsStories}>Recent News Stories</b>
      <img className={styles.desktop1Inner} alt="" src="/frame-14.svg" />
      <div className={styles.chartParent}>
        <div className={styles.chart}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.group1}>
              <div className={styles.group2}>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <div className={styles.jan}>Jan</div>
              </div>
              <div className={styles.group3}>
                <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
                <div className={styles.jan}>Feb</div>
              </div>
              <div className={styles.group4}>
                <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
                <div className={styles.jan}>Mar</div>
              </div>
              <div className={styles.group5}>
                <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
                <div className={styles.jan}>Apr</div>
              </div>
              <div className={styles.group6}>
                <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
                <div className={styles.jan}>May</div>
              </div>
              <div className={styles.group7}>
                <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
                <div className={styles.jan}>Jun</div>
              </div>
              <div className={styles.group8}>
                <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
                <div className={styles.jan}>Jul</div>
              </div>
              <div className={styles.group9}>
                <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
                <div className={styles.jan}>Aug</div>
              </div>
              <div className={styles.group10}>
                <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
                <div className={styles.jan}>Sep</div>
              </div>
              <div className={styles.group11}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector10.svg"
                />
                <div className={styles.jan}>Oct</div>
              </div>
              <div className={styles.group12}>
                <img
                  className={styles.vectorIcon11}
                  alt=""
                  src="/vector11.svg"
                />
                <div className={styles.jan}>Nov</div>
              </div>
              <div className={styles.group13}>
                <img
                  className={styles.vectorIcon11}
                  alt=""
                  src="/vector12.svg"
                />
                <div className={styles.jan}>Dec</div>
              </div>
            </div>
          </div>
          <div className={styles.group14}>
            <img className={styles.vectorIcon13} alt="" src="/vector13.svg" />
            <div className={styles.group15}>
              <div className={styles.group16}>
                <img
                  className={styles.vectorIcon14}
                  alt=""
                  src="/vector14.svg"
                />
                <div className={styles.div}>0</div>
              </div>
              <div className={styles.group17}>
                <img
                  className={styles.vectorIcon15}
                  alt=""
                  src="/vector15.svg"
                />
                <div className={styles.div1}>25</div>
              </div>
              <div className={styles.group18}>
                <img
                  className={styles.vectorIcon15}
                  alt=""
                  src="/vector16.svg"
                />
                <div className={styles.div1}>50</div>
              </div>
              <div className={styles.group19}>
                <img
                  className={styles.vectorIcon15}
                  alt=""
                  src="/vector17.svg"
                />
                <div className={styles.div1}>75</div>
              </div>
              <div className={styles.group20}>
                <img
                  className={styles.vectorIcon18}
                  alt=""
                  src="/vector18.svg"
                />
                <div className={styles.div4}>100</div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          <img className={styles.chartChild} alt="" src="/vector-1.svg" />
        </div>
        <div className={styles.frameChild} />
        <div className={styles.oct2023}>31 Oct, 2023 - 04:30PM</div>
        <div className={styles.articleTitle}>ARTICLE TITLE</div>
        <div
          className={styles.shortDescriptionOf}
        >{`short description of all the news info that will wrap around and if too long end in ... blah blah blah... `}</div>
      </div>
      <SortByMonth sortByMonth="Sort by: Month" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.oct2023}>27 Oct, 2023 - 03:00PM</div>
        <div className={styles.articleTitle}>ARTICLE TITLE</div>
        <div
          className={styles.shortDescriptionOf}
        >{`short description of all the news info that will wrap around and if too long end in ... blah blah blah... `}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.oct2023}>27 Oct, 2023 - 03:00PM</div>
        <div className={styles.articleTitle}>ARTICLE TITLE</div>
        <div
          className={styles.shortDescriptionOf}
        >{`short description of all the news info that will wrap around and if too long end in ... blah blah blah... `}</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild} />
        <div className={styles.oct2023}>27 Oct, 2023 - 03:00PM</div>
        <div className={styles.articleTitle}>ARTICLE TITLE</div>
        <div
          className={styles.shortDescriptionOf}
        >{`short description of all the news info that will wrap around and if too long end in ... blah blah blah... `}</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <div className={styles.oct2023}>27 Oct, 2023 - 03:00PM</div>
        <div className={styles.articleTitle}>ARTICLE TITLE</div>
        <div
          className={styles.shortDescriptionOf}
        >{`short description of all the news info that will wrap around and if too long end in ... blah blah blah... `}</div>
      </div>
      <img className={styles.chevronDownIcon1} alt="" src="/chevrondown1.svg" />
      <NewsCard
        dateAndTime="27 Oct, 2023 - 03:00PM"
        articleTitle="ARTICLE TITLE"
        articleDescription="short description of all the news info that will wrap around and if too long end in ... blah blah blah... "
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-10.svg" />
    </div>
  );
};

export default Desktop1;
