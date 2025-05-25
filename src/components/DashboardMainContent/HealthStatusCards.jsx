import React from "react";
import styles from "./HealthStatusCards.module.css";
import { healthIndicators } from "../../data/healthData";
import { FaLungs, FaTooth, FaBone } from "react-icons/fa6";

const icons = {
  "Lungs": <FaLungs />,
  "Teeth": <FaTooth />,
  "Bone": <FaBone />
};

const HealthStatusCards = () => (
  <div className={styles.cardsContainer}>
    {healthIndicators.filter(i => i.id !== "heart").map((indicator) => (
      <div className={styles.card} key={indicator.id}>
        <div className={styles.iconWrapper} style={{ backgroundColor: indicator.color + "22" }}>
          {icons[indicator.label]}
        </div>
        <div>
          <div className={styles.label}>{indicator.label}</div>
          <div className={styles.value} style={{ color: indicator.color }}>{indicator.value}</div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;