import React from "react";

import { HomeMain } from "@/components/Main/HomeMain";
import { Sidebar } from "@/components/Sidebar/Sidebar";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section className={`${styles.container_home_grid} px-5 `}>
      {/* maquetacion grid main, sidebar lateral derecho   y footer*/}
      <div className={styles.container_home_grid__main}>
        <HomeMain />
      </div>
      <div className={styles.container_home_grid__sidebar}>
        <Sidebar />
      </div>
    </section>
  );
};

export default Home;
