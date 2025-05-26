import React from "react";
import styles from "./DashboardMainContent.module.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import SearchBar from "./SearchBar"; // Add if you have a SearchBar component

const DashboardMainContent = () => (
  <main className={styles.dashboardMain}>
    {/* LEFT COLUMN */}
    <div className={styles.leftColumn}>
      
      
      {/* The Dashboard label */}
      <div className={styles.dashboardLabel}>Dashboard</div>
      
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

export default DashboardMainContent;