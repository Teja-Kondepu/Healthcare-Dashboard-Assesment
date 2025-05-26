import React from "react";
import styles from "./HealthStatusCards.module.css";
import { healthIndicators } from "../../data/healthData";
import { FaLungs, FaTooth, FaBone } from "react-icons/fa6";

const iconMap = {
  "fa-lungs": <FaLungs />,
  "fa-tooth": <FaTooth />,
  "fa-bone": <FaBone />,
};

const HealthStatusCards = () => (
  <div className={styles.cardsContainer}>
    {healthIndicators
      .filter(i => i.id !== "heart")
      .map((indicator, idx, arr) => (
        <React.Fragment key={indicator.id}>
          <div className={styles.card}>
            <div className={styles.iconWrapper} style={{ backgroundColor: indicator.color + "22" }}>
              {iconMap[indicator.icon]}
            </div>
            <div className={styles.infoSection}>
              <div className={styles.labelRow}>
                <span className={styles.label}>{indicator.label}</span>
                <span className={styles.value} style={{ color: indicator.color }}>
                  {indicator.value}
                </span>
              </div>
              <div className={styles.progressBarBg}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${indicator.percentage}%`, backgroundColor: indicator.color }}
                />
              </div>
              <div className={styles.date}>Date:{indicator.date}</div>
            </div>
          </div>
          
          {indicator.id === "bone" && (
            <div className={styles.detailsRow}>
              <span className={styles.detailsLabel}>Details</span>
              <span className={styles.detailsArrow}>&rarr;</span>
            </div>
          )}
        </React.Fragment>
      ))}
  </div>
);

export default HealthStatusCards;