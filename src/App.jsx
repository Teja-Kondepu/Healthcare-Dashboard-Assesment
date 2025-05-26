import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./styles/globals.css";
import "./styles/variables.css";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Header />
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;