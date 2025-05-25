import React from "react";
import styles from "./Sidebar.module.css";
import { navigationLinks } from "../../data/navigationLinks";
import {
  FaRegChartBar, FaRegCalendar, FaRegHeart, FaRegCommentDots, FaRegLifeRing,
  FaRegUser, FaRegClipboard, FaRegClock, FaCog
} from "react-icons/fa";

const icons = {
  Dashboard: <FaRegChartBar />,
  History: <FaRegClock />,
  Calendar: <FaRegCalendar />,
  Appointments: <FaRegClipboard />,
  Statistics: <FaRegChartBar />,
  Tests: <FaRegHeart />,
  Chat: <FaRegCommentDots />,
  Support: <FaRegLifeRing />,
  Setting: <FaCog />,
};

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <h2 className={styles.general}>General</h2>
    <nav className={styles.nav}>
      {navigationLinks.map(link => (
        <div className={styles.navItem} key={link.label}>
          <span className={styles.icon}>{icons[link.label]}</span>
          <span className={styles.label}>{link.label}</span>
        </div>
      ))}
    </nav>
  </aside>
);

export default Sidebar;