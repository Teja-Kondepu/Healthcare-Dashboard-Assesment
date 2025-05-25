import React from "react";
import styles from "./ActivityFeed.module.css";

const weekBars = [60, 90, 45, 75, 100, 40, 50];

const ActivityFeed = () => (
  <div className={styles.activityWrapper}>
    <div className={styles.header}>Activity</div>
    <div className={styles.subText}>3 appointments on this week</div>
    <div className={styles.barChart}>
      {weekBars.map((height, i) => (
        <div
          key={i}
          className={styles.bar}
          style={{
            height: height + "px",
            background: i === 4 ? "#31c37e" : "#b0b8c9",
            boxShadow: i === 4 ? "0 2px 8px #31c37e22" : "none"
          }}
        ></div>
      ))}
    </div>
    <div className={styles.daysLabels}>
      {["S", "M", "T", "W", "T", "F", "S"].map(d => (
        <span key={d}>{d}</span>
      ))}
    </div>
  </div>
);

export default ActivityFeed;