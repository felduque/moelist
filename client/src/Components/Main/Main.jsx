import React, { useEffect, useState } from "react";
import { getAnimes } from "../../Api/Anime/anime";
import { getMangas } from "../../Api/Mangas/mangas";
import { getManhuas } from "../../Api/Manhuas/mahuas";
import { getManhwas } from "../../Api/Manhwas/manhwas";
import { CardItem } from "../CardItem/CardItem";
import "./Main.css";

export const Main = () => {
  const [animes, setAnimes] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [manhwas, setManhwas] = useState([]);
  const [manhuas, setManhuas] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const animes = await getAnimes();
      const mangas = await getMangas();
      const manhwas = await getManhwas();
      const manhuas = await getManhuas();
      setManhuas(manhuas?.data);
      setManhwas(manhwas?.data);
      setMangas(mangas?.data);

      setAnimes(animes?.data);
    };
    fetchAnimes();
  }, []);

  return (
    <div className="content-primary-main">
      <div className="content-all-main container">
        <div className="conent-title-catogory one-category-main">
          <h2 className="text-white">Animes</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6">
          {animes.map((anime) => {
            anime.type = "anime";
            return <CardItem {...anime} />;
          })}
        </div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Mangas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6">
          {mangas.map((manga) => {
            anime.type = "manga";
            return <CardItem {...manga} />;
          })}
        </div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Manhwas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6">
          {manhwas.map((manhwa) => {
            manhwa.type = "manwha";
            return <CardItem {...manhwa} />;
          })}
        </div>
        <div className="conent-title-catogory">
          <h2 className="text-white">Manhuas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6">
          {manhuas.map((manhua) => {
            manhua.type = "manhua";
            return <CardItem {...manhua} />;
          })}
        </div>
      </div>
    </div>
  );
};
