import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { getContentAndPaginate } from "../../Api/Search/search";
import { CardLoop } from "../CardLoop/CardLoop";

export const Sidebar = () => {
  const [ultimos, setUltimos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getContentAndPaginate(1, 2);
      const content = resp.data;

      const animes = content.filter((c) => c.contentType === "anime");
      const mangas = content.filter((c) => c.contentType === "manga");
      const manhuas = content.filter((c) => c.contentType === "manhua");
      const manhwas = content.filter((c) => c.contentType === "manhwa");

      setUltimos([...animes, ...mangas, ...manhuas, ...manhwas]);
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
