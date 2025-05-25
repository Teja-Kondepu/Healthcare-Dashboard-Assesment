import React from "react";
import styles from "./DashboardMainContent.module.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => (
  <main className={styles.dashboardMain}>
    {/* LEFT COLUMN */}
    <div className={styles.leftColumn}>
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
      <UpcomingSchedule />
    </div>
  </main>
);

export default DashboardMainContent;