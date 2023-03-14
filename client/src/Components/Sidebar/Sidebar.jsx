import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { getAnimes } from "../../Api/Anime/anime";
import { getManhuas } from "../../Api/Manhuas/mahuas";
import { getManhwas } from "../../Api/Manhwas/manhwas";
import { getMangas } from "../../Api/Mangas/mangas";
import { CardItem } from "../CardItem/CardItem";
import { CardLoop } from "../CardLoop/CardLoop";

export const Sidebar = () => {
  const [ultimos, setUltimos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const anime = await getAnimes();
      const mangas = await getMangas();
      const manhwas = await getManhwas();
      const manhuas = await getManhuas();
      const orderManhuas = manhuas?.data.sort((a, b) => b - a);
      const orderManhwas = manhwas?.data.sort((a, b) => b - a);
      const orderMangas = mangas?.data.sort((a, b) => b - a);
      const orderAnimes = anime?.data.sort((a, b) => b - a);

      setUltimos([
        ...orderAnimes.slice(0, 2),
        ...orderMangas.slice(0, 2),
        ...orderManhwas.slice(0, 2),
        ...orderManhuas.slice(0, 2),
      ]);
    };
    fetchData();
  }, []);
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
