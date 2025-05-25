import React from "react";
import styles from "./AnatomySection.module.css";
import humanAnatomy from "../../assets/Human_Anatomy.jpg";


const AnatomySection = () => (
  <div className={styles.anatomySection}>
    <img src={humanAnatomy} alt="Human Anatomy" className={styles.anatomyImage} />
  </div>
);

export default AnatomySection;