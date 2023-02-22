import React, { useEffect, useState } from "react";
import { CardItemSidebar } from "../CardItem/CardItemSidebar";
import "./Sidebar.css";

import { getAnimes } from "../../Api/Anime/anime";
import { getManhuas } from "../../Api/Manhuas/mahuas";
import { getManhwas } from "../../Api/Manhwas/manhwas";
import { getMangas } from "../../Api/Mangas/mangas";

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

      console.log(orderManhuas, orderManhwas, orderMangas, orderAnimes);
      setManhuas(orderManhuas);
      setManhwas(orderManhwas);
      setMangas(orderMangas);

      setAnimes(orderAnimes);
    };
    fetchData();
  }, []);

  return (
    <div className="sidebar-container-rigth">
      <div className="row row-cols-3 row-cols-lg-1 p-3 pt-5">
        <h5>Ultimos Animes Agregados</h5>
        {animes?.slice(0, 2).map((anime, index) => {
          anime.type = "anime";
          return <CardItemSidebar {...anime} />;
        })}

        <h5>Ultimos Mangas Agregados</h5>
        {mangas.map((manga) => {
          anime.type = "manga";
          return <CardItem {...manga} />;
        })}

        <h5>Ultimos Manhwas Agregados</h5>
        {manhwas.map((manhwa) => {
          manhwa.type = "manwha";
          return <CardItem {...manhwa} />;
        })}

        <h5>Ultimos Manhuas Agregados</h5>
        {manhuas.map((manhua) => {
          manhua.type = "manhua";
          return <CardItem {...manhua} />;
        })}
      </div>
    </div>
  );
};
