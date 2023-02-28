import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { getAnimes } from "../../Api/Anime/anime";
import { getManhuas } from "../../Api/Manhuas/mahuas";
import { getManhwas } from "../../Api/Manhwas/manhwas";
import { getMangas } from "../../Api/Mangas/mangas";
import { CardItemSidebar } from "../CardItem/CardItemSidebar";

export const Sidebar = () => {
  const [animes, setAnimes] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [manhwas, setManhwas] = useState([]);
  const [manhuas, setManhuas] = useState([]);

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

      setManhuas(orderManhuas);
      setManhwas(orderManhwas);
      setMangas(orderMangas);

      setAnimes(orderAnimes);
    };
    fetchData();
  }, []);
  return (
    <div className="sidebar-container-rigth">
      <div className="sidebar-container-cards container">
        <div className="sidebar-content-title-list-cards">
          <h2 className="sidebar-text-title-list-cards">Ultimos Agregados</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-1 px-3 px-sm-0 pt-4">
          {animes?.slice(0, 2).map((anime, index) => {
            anime.type = "anime";
            return <CardItemSidebar key={index} {...anime} />;
          })}

          {mangas.slice(0, 2).map((manga, index) => {
            manga.type = "manga";
            return <CardItemSidebar key={index} {...manga} />;
          })}

          {manhwas.slice(0, 2).map((manhwa, index) => {
            manhwa.type = "manwha";
            return <CardItemSidebar key={index} {...manhwa} />;
          })}

          {manhuas.slice(0, 2).map((manhua, index) => {
            manhua.type = "manhua";
            return <CardItemSidebar key={index} {...manhua} />;
          })}
        </div>
      </div>
    </div>
  );
};
