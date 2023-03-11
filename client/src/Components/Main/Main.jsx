import React, { useState, useEffect } from "react";
import "./Main.css";
import { getAnimes } from "../../Api/Anime/anime";
import { getMangas } from "../../Api/Mangas/mangas";
import { getManhuas } from "../../Api/Manhuas/mahuas";
import { getManhwas } from "../../Api/Manhwas/manhwas";
import { CardItem } from "../CardItem/CardItem";

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
      <div className="content-all-main pt-5 container">
        <div className="alert_page">
          <h2 className="alert_page_text">
            Estas son las <span className="txt-primary">novedades:</span>
            <ul className="mt-3">
              <li>Ya puedes registrarte </li>
              <li>
                Guarda tu contenido favorito y accede a el desde cualquier
                dispositivo
              </li>
              <li>Explora todos los contenidos de la página</li>
              <li>Diseños más amigables</li>
              <li>Conviértete en Autor y empezá a publicar contenido</li>
            </ul>
          </h2>
        </div>
        <div className="conent-title-catogory one-category-main">
          <h2 className="text-white">Animes</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
          {animes.map((anime) => {
            return <CardItem key={anime.id} {...anime} />;
          })}
        </div>
        <div className="conent-title-catogory">
          <h2 className="text-white">Mangas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
          {mangas.map((manga) => {
            return <CardItem key={manga.id} {...manga} />;
          })}
        </div>
        <div className="conent-title-catogory">
          <h2 className="text-white">Manhwas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
          {manhwas.map((manhwa) => {
            return <CardItem key={manhwa.id} {...manhwa} />;
          })}
        </div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Manhuas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
          {manhuas.map((manhua) => {
            return <CardItem key={manhua.id} {...manhua} />;
          })}
        </div>
      </div>
    </div>
  );
};
