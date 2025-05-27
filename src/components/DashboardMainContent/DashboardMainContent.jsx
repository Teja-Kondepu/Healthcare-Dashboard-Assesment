import React, { useState } from "react";
import styles from "./DashboardMainContent.module.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";

const DashboardMainContent = () => {
  const [period, setPeriod] = useState("This Week");

  return (
    
    <main className={styles.dashboardMain}>
      {/* LEFT COLUMN */}
      <div className={styles.leftColumn}>
        {/* Dashboard label and dropdown */}
        <div className={styles.dashboardLabelRow}>
          <div className={styles.dashboardLabel}>Dashboard</div>
          <select
            className={styles.periodDropdown}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>

        <div className={styles.overviewSection}>
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className={styles.activityFeedFullWidth}>
          <ActivityFeed />
        </div>
      </div>
      {/* RIGHT COLUMN */}
      <div className={styles.calendarSection}>
        <CalendarView />
      </div>
    </main>
  );
};

export default DashboardMainContent;