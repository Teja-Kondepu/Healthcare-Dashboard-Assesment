import React from "react";
import styles from "./Header.module.css";
import avatar from "../../assets/avatar.png";
import { FaBell, FaPlus, FaSearch } from "react-icons/fa";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.searchSection}>
      <div className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          disabled
        />
      </div>
      <div className={styles.bellWrapper}>
        <FaBell className={styles.bellIcon} />
      </div>
    </div>
    <div className={styles.actions}>
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt="User" className={styles.avatar} />
      </div>
      <button className={styles.addBtn}><FaPlus /></button>
    </div>
  </header>
);

export default Header;