import React from "react";
import styles from "./Sidebar.module.css";
import { navigationLinks } from "../../data/navigationLinks";
import {
  FaRegChartBar, FaRegCalendarAlt, FaRegHeart, FaRegCommentDots, FaPhone,
  FaRegUser, FaRegClipboard, FaRegClock, FaCog,FaThLarge,
  
} from "react-icons/fa";

const icons = {
  Dashboard: <FaThLarge />,
  History: <FaRegClock />,
  Calendar: <FaRegCalendarAlt />,
  Appointments: <FaRegClipboard />,
  Statistics: <FaRegChartBar />,
  Tests: <FaRegHeart />,
  Chat: <FaRegCommentDots />,
  Support: <FaPhone />,
  Setting: <FaCog />,
};

const generalLabels = [
  "Dashboard",
  "History",
  "Calendar",
  "Appointments",
  "Statistics",
  "Tests"
];
const toolsLabels = [
  "Chat",
  "Support",
  "Setting"
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h1><div className={styles.logoBrand}>
        <span className={styles.health}>Health</span>
        <span className={styles.care}>care</span>
        <span className={styles.care}>.</span>
      </div></h1>
      <h2 className={styles.general}>General</h2>
      <nav className={styles.nav}>
        {navigationLinks
          .filter(link => generalLabels.includes(link.label))
          .map(link => (
            <div className={styles.navItem} key={link.label}>
              <span className={styles.icon}>{icons[link.label]}</span>
              <span className={styles.label}>{link.label}</span>
            </div>
          ))}
      </nav>
      <h2 className={styles.general} style={{marginTop: '2.5rem'}}>Tools</h2>
      <nav className={styles.nav}>
        {navigationLinks
          .filter(link => toolsLabels.includes(link.label))
          .map(link => (
            <div className={styles.navItem} key={link.label}>
              <span className={styles.icon}>{icons[link.label]}</span>
              <span className={styles.label}>{link.label}</span>
            </div>
          ))}
      </nav>
    </aside>
  );
}