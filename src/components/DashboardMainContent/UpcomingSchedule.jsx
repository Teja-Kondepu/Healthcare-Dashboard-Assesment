import React from "react";
import { FaStethoscope, FaEye, FaHeartbeat, FaBrain } from "react-icons/fa";
import styles from "./UpcomingSchedule.module.css";

export default function UpcomingSchedule() {
  return (
    <div className={styles.upcomingScheduleCard}>
      <div className={styles.dayLabel}>The Upcoming Schedule</div>
      <div className={styles.scheduleBody}>
        <div className={styles.daySection}>
          <div className={styles.dayLabel}>On Thursday</div>
          <div className={styles.appointmentRow}>
            <div className={styles.appointmentCard} style={{borderLeft: "4px solid #31c37e"}}>
              <div className={styles.icon}><FaStethoscope /></div>
              <div className={styles.cardTitle}>Health checkup complete</div>
              <div className={styles.cardTime}>09:00 AM</div>
            </div>
            <div className={styles.appointmentCard} style={{borderLeft: "4px solid #e15c5c"}}>
              <div className={styles.icon}><FaEye /></div>
              <div className={styles.cardTitle}>Ophthalmologist</div>
              <div className={styles.cardTime}>11:15 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.daySection}>
          <div className={styles.dayLabel}>On Saturday</div>
          <div className={styles.appointmentRow}>
            <div className={styles.appointmentCard} style={{borderLeft: "4px solid #f3c623"}}>
              <div className={styles.icon}><FaHeartbeat /></div>
              <div className={styles.cardTitle}>Cardiologist</div>
              <div className={styles.cardTime}>10:00 AM</div>
            </div>
            <div className={styles.appointmentCard} style={{borderLeft: "4px solid #5c8ee1"}}>
              <div className={styles.icon}><FaBrain /></div>
              <div className={styles.cardTitle}>Neurologist</div>
              <div className={styles.cardTime}>12:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}