import React from "react";
import styles from "./UpcomingSchedule.module.css";
import { upcomingAppointments } from "../../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => (
  <div className={styles.scheduleWrapper}>
    <div className={styles.header}>The Upcoming Schedule</div>
    <div className={styles.daysList}>
      {upcomingAppointments.map(day => (
        <div className={styles.dayGroup} key={day.day}>
          <div className={styles.dayTitle}>On {day.day}</div>
          <div className={styles.cards}>
            {day.appointments.map((item, idx) => (
              <SimpleAppointmentCard key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingSchedule;