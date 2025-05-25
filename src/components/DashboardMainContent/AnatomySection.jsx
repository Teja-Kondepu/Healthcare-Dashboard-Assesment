import React from "react";
import styles from "./AnatomySection.module.css";
import anatomy from "../../assets/anatomy.svg";
import { healthIndicators } from "../../data/healthData";
import { FaHeartPulse, FaLungs, FaTooth, FaBone } from "react-icons/fa6";

const iconMap = {
  "fa-heart-pulse": <FaHeartPulse />,
  "fa-lungs": <FaLungs />,
  "fa-tooth": <FaTooth />,
  "fa-bone": <FaBone />,
};

const AnatomySection = () => (
  <div className={styles.anatomySection}>
    <div className={styles.anatomyImageWrapper}>
      <img src={anatomy} alt="Human Anatomy" className={styles.anatomyImage} />
      <div className={styles.indicators}>
        {healthIndicators.map((indicator, i) => (
          <div
            key={indicator.id}
            className={styles.indicator}
            style={{ top: `${20 + i * 30}%`, left: `${70 + i * 3}%`, borderColor: indicator.color }}
          >
            <span className={styles.icon} style={{ backgroundColor: indicator.color + "22" }}>
              {iconMap[indicator.icon]}
            </span>
            <span className={styles.text} style={{ color: indicator.color }}>{indicator.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AnatomySection;