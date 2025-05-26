import React from "react";
import styles from "./ActivityFeed.module.css";

// Example chart data: Each inner array contains values for that day (Mon-Sun)
const activityData = [
  [32, 50, 22],    // Mon
  [40, 70, 55, 38],// Tue
  [25, 60, 35],    // Wed
  [42, 28],        // Thu
  [65, 35, 48, 25],// Fri
  [50, 70, 38],    // Sat
  [29, 47, 39]     // Sun
];

// You can customize colors as per your design
const barColors = ['#2f3d82', '#1ad9ea', '#dbe3fa'];

function ActivityBar() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  // Find the global max for bar scaling
  const max = Math.max(...activityData.flat());

  return (
    <div className={styles.activityCard}>
      <div className={styles.header}>
        <span className={styles.title}>Activity</span>
        <span className={styles.subtitle}>3 appointment on this week</span>
      </div>
      <div className={styles.chartArea}>
        {activityData.map((dayBars, dayIdx) => (
          <div key={dayIdx} className={styles.dayBarGroup}>
            {dayBars.map((val, barIdx) => (
              <div
                key={barIdx}
                className={styles.bar}
                style={{
                  height: `${Math.max((val / max) * 70, 12)}px`,
                  background: barColors[barIdx % barColors.length]
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.dayLabels}>
        {days.map((d, i) => (
          <span key={i} className={styles.dayLabel}>{d}</span>
        ))}
      </div>
    </div>
  );
}

export default ActivityBar;