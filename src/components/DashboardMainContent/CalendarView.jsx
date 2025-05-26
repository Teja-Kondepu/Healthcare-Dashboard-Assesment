import React, { useState } from "react";
import styles from "./CalendarView.module.css";
import { FaChevronLeft, FaChevronRight, FaStethoscope, FaEye, FaHeartbeat, FaBrain } from "react-icons/fa";

// Example week data
const weekData = [
  {
    day: "Mon", date: 25, slots: [
      { time: "10:00", marked: false },
      { time: "11:00", marked: false },
      { time: "12:00", marked: false }
    ]
  },
  {
    day: "Tues", date: 26, slots: [
      { time: "08:00", marked: false },
      { time: "09:00", marked: true },
      { time: "10:00", marked: false }
    ]
  },
  {
    day: "Wed", date: 27, slots: [
      { time: "12:00", marked: false },
      { time: "13:00", marked: false }
    ]
  },
  {
    day: "Thu", date: 28, slots: [
      { time: "11:00", marked: true }
    ]
  },
  {
    day: "Fri", date: 29, slots: [
      { time: "14:00", marked: false },
      { time: "16:00", marked: false }
    ]
  },
  {
    day: "Sat", date: 30, slots: [
      { time: "12:00", marked: true },
      { time: "14:00", marked: false },
      { time: "15:00", marked: false }
    ]
  },
  {
    day: "Sun", date: 31, slots: [
      { time: "09:00", marked: true },
      { time: "10:00", marked: false },
      { time: "11:00", marked: false }
    ]
  }
];

// Top appointments for this week
const appointments = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    color: "#3d3994",
    icon: "🦷"
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    color: "#f5f5fa",
    icon: "💪"
  }
];

// Upcoming schedule entries
const schedule = [
  {
    day: "Thursday",
    items: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: <FaStethoscope />,
        emoji: "🩺"
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: <FaEye />,
        emoji: "👁️"
      }
    ]
  },
  {
    day: "Saturday",
    items: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: <FaHeartbeat />,
        emoji: "❤️"
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: <FaBrain />,
        emoji: "🧑‍⚕️"
      }
    ]
  }
];

const CalendarView = () => {
  const [week, setWeek] = useState(weekData);
  const [selectedDayIdx, setSelectedDayIdx] = useState(1); // default to Tues

  return (
    <div className={styles.calendarWrapper}>
      {/* Calendar and Top Appointments */}
      <div>
        <div className={styles.headerRow}>
          <span className={styles.month}>October 2021</span>
          
        </div>
        {/* Two separate ovals, each with a single arrow */}
        <div className={styles.calendarOvalsRow}>
          <span className={styles.arrowOval}>
            <span className={styles.leftArrow}>&#8592;</span>
          </span>
          <span className={styles.arrowOval}>
            <span className={styles.rightArrow}>&#8594;</span>
          </span>
        </div>
        <div className={styles.weekGrid}>
          {week.map((day, idx) => (
            <div
              key={day.day}
              className={`${styles.dayCol} ${idx === selectedDayIdx ? styles.activeDay : ""}`}
              onClick={() => setSelectedDayIdx(idx)}
            >
              <div className={styles.dayName}>{day.day}</div>
              <div className={styles.dayDate}>{day.date}</div>
              <div className={styles.slots}>
                {day.slots.map(slot => (
                  <div
                    key={slot.time}
                    className={`${styles.slot} ${slot.marked ? styles.slotMarked : ""}`}
                  >
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottomCards}>
          {appointments.map((app, i) => (
            <div
              key={i}
              className={styles.appointmentCard}
              style={{
                background: app.color === "#3d3994" ? "#3d3994" : "#f5f5fa",
                color: app.color === "#3d3994" ? "#fff" : "#243763"
              }}
            >
              <div className={styles.cardTitle}>
                <span className={styles.cardIcon}>{app.icon}</span> {app.title}
              </div>
              <div className={styles.cardTime}>
                {app.time}
              </div>
              <div className={styles.cardDoctor}>
                {app.doctor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Schedule Section */}
      <div className={styles.upcomingScheduleSection}>
        <div className={styles.upcomingScheduleTitle}>The Upcoming Schedule</div>
        <div className={styles.scheduleDays}>
          {schedule.map((day, idx) => (
            <div className={styles.scheduleDayBlock} key={idx}>
              <div className={styles.scheduleDayLabel}>On {day.day}</div>
              <div className={styles.scheduleRow}>
                {day.items.map((item, j) => (
                  <div className={styles.scheduleCard} key={j}>
                    <div className={styles.scheduleCardHeader}>
                      <span className={styles.scheduleCardTitle}>
                        {item.title}
                      </span>
                      <span className={styles.scheduleCardEmoji}>{item.emoji}</span>
                    </div>
                    <div className={styles.scheduleCardTime}>{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;