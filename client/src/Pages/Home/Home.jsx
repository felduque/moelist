import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Main } from "../../Components/Main/Main";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container-home-grid">
      {/* maquetacion grid main, sidebar lateral derecho   y footer*/}
      <div className="container-home-grid__main">
        <Main />
      </div>
      <div className="container-home-grid__sidebar">
        <Sidebar />
      </div>
      <div className="container-home-grid__footer">
        <Footer />
      </div>
    </div>
  );
};
