import React from "react";
import styles from "./AnatomySection.module.css";
import humanAnatomy from "../../assets/Human_Anatomy.jpg";
import { FaHeart, FaRunning } from "react-icons/fa";

const AnatomySection = () => (
  <div className={styles.anatomySection}>
    {/* Heart label */}
    <div className={`${styles.label} ${styles.heartLabel}`}>
      <FaHeart className={styles.heartIcon} />
      Healthy Heart
    </div>
    {/* Scanner frame for heart */}
    <span className={styles.hscannerFrame} />

    {/* Leg label */}
    <div className={`${styles.label} ${styles.legLabel}`}>
      <FaRunning className={styles.legIcon} />
      Healthy Leg
    </div>
    {/* Scanner frame for leg */}
    <span className={styles.lscannerFrame} />

    <div className={styles.imageContainer}>
      <img src={humanAnatomy} alt="Human Anatomy" className={styles.anatomyImage} />
    </div>
  </div>
);

export default AnatomySection;