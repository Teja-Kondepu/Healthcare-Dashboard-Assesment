import React from "react";
import styles from "./CalendarView.module.css";
import { calendar } from "../../data/calendarData";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getFirstDay(month, year) {
  return new Date(year, new Date(Date.parse(month +" 1, "+year)).getMonth(), 1).getDay();
}

const CalendarView = () => {
  const firstDay = getFirstDay(calendar.month, calendar.year);
  const daysInMonth = 31; // October always has 31 days for demo
  let calendarCells = [];
  let day = 1;
  for (let i = 0; i < 6; i++) { // 6 weeks
    let row = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > daysInMonth) {
        row.push(<td key={j}></td>);
      } else {
        const app = calendar.appointments.find(a => a.day === day);
        row.push(
          <td key={j}>
            <div className={styles.dayCell}>
              <span className={styles.dayNum}>{day}</span>
              {app && <span className={styles.appointment}>{app.time}</span>}
            </div>
          </td>
        );
        day++;
      }
    }
    calendarCells.push(<tr key={i}>{row}</tr>);
  }
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.header}>
        <span className={styles.month}>{calendar.month} {calendar.year}</span>
      </div>
      <table className={styles.calendar}>
        <thead>
          <tr>
            {days.map(d => <th key={d}>{d}</th>)}
          </tr>
        </thead>
        <tbody>{calendarCells}</tbody>
      </table>
      <div className={styles.bottomCards}>
        <div className={styles.appointmentCard} style={{borderLeft: "4px solid #31c37e"}}>
          <div className={styles.cardTitle}>Dentist</div>
          <div className={styles.cardTime}>09:00 AM, Tue</div>
        </div>
        <div className={styles.appointmentCard} style={{borderLeft: "4px solid #e15c5c"}}>
          <div className={styles.cardTitle}>Physiotherapy Appointment</div>
          <div className={styles.cardTime}>11:00 AM, Wed</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;