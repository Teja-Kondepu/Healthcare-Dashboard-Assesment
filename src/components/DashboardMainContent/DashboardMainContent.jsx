import React from "react";
import styles from "./DashboardMainContent.module.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => (
  <main className={styles.dashboardMain}>
    <section className={styles.overviewSection}>
      <AnatomySection />
      <HealthStatusCards />
    </section>
    <section className={styles.calendarSection}>
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </section>
  </main>
);

export default DashboardMainContent;