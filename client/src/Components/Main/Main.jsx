import React, { useState, useEffect } from "react";
import "./Main.css";
import { getContentAndPaginate } from "../../Api/Search/search";
import { CardLoop } from "../CardLoop/CardLoop";

export const Main = () => {
  const [animes, setAnimes] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [manhwas, setManhwas] = useState([]);
  const [manhuas, setManhuas] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const resp = await getContentAndPaginate(1, 12);
      const content = resp.data;

      setAnimes(content.filter((c) => c.contentType === "anime"));
      setManhuas(content.filter((c) => c.contentType === "manhua"));
      setManhwas(content.filter((c) => c.contentType === "manhwa"));
      setMangas(content.filter((c) => c.contentType === "manga"));
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
        <CardLoop cards={animes} />
        <div className="conent-title-catogory">
          <h2 className="text-white">Mangas</h2>
        </div>
        <CardLoop cards={mangas} />
        <div className="conent-title-catogory">
          <h2 className="text-white">Manhwas</h2>
        </div>
        <CardLoop cards={manhwas} />

        <div className="conent-title-catogory">
          <h2 className="text-white">Manhuas</h2>
        </div>
        <CardLoop cards={manhuas} />
      </div>
    </div>
  );
};
