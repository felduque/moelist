import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { lastAnime } from "../../Api/Anime/anime";
import { lastManga } from "../../Api/Mangas/mangas";
import { lastManhua } from "../../Api/Manhuas/mahuas";
import { lastManhwa } from "../../Api/Manhwas/manhwas";

import { CardLoop } from "../CardLoop/CardLoop";

export const Sidebar = () => {
  const [ultimos, setUltimos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await lastAnime();
      const response2 = await lastManga();
      const response3 = await lastManhua();
      const response4 = await lastManhwa();
      const data = response.data;
      const data2 = response2.data;
      const data3 = response3.data;
      const data4 = response4.data;
      setUltimos([...data, ...data2, ...data3, ...data4]);
    };
    fetchData();
  }, []);

  console.log(ultimos);
  return (
    <div className="sidebar-container-rigth">
      <div className="sidebar-container-cards container">
        <div className="sidebar-content-title-list-cards">
          <h2 className="sidebar-text-title-list-cards">Ultimos Agregados</h2>
        </div>
        <CardLoop cards={ultimos} oneCol={true} showDesc={false} />
      </div>
    </div>
  );
};
