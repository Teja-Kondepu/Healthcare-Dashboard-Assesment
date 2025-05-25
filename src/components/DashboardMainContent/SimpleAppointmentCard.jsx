import React from "react";
import styles from "./SimpleAppointmentCard.module.css";
import {
  FaStethoscope, FaEye, FaHeart, FaBrain
} from "react-icons/fa6";

const iconMap = {
  "fa-stethoscope": <FaStethoscope />,
  "fa-eye": <FaEye />,
  "fa-heart": <FaHeart />,
  "fa-brain": <FaBrain />
};

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className={styles.card}>
    <div className={styles.icon}>{iconMap[icon]}</div>
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>{time}</div>
    </div>
  </div>
);

export default SimpleAppointmentCard;