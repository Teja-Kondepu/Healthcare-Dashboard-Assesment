import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <FaSearch className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}