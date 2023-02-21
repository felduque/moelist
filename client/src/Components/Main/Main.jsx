import React from "react";
import { CardItem } from "../CardItem/CardItem";
import "./Main.css";

export const Main = () => {
  const animes = [];
  const mangas = [];
  const manhwas = [];
  const manhuas = [];

  const propsA = {
    type: "anime",
  };

  const propsM = {
    type: "manga",
  };

  const PropsMan = {
    type: "manwha",
  };

  const PropsMh = {
    type: "manhua",
  };

  for (let i = 0; i < 6; i++) {
    animes.push(<CardItem {...propsA} />);
    mangas.push(<CardItem {...propsM} />);
    manhwas.push(<CardItem {...PropsMan} />);
    manhuas.push(<CardItem {...PropsMh} />);
  }

  return (
    <div className="content-primary-main">
      <div className="content-all-main container">
        <div className="conent-title-catogory one-category-main">
          <h2 className="text-white">Animes</h2>
        </div>
        <div className="row">{animes}</div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Mangas</h2>
        </div>
        <div className="row">{mangas}</div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Manhwas</h2>
        </div>
        <div className="row">{manhwas}</div>
        <div className="conent-title-catogory">
          <h2 className="text-white">Manhuas</h2>
        </div>
        <div className="row">{manhuas}</div>
      </div>
    </div>
  );
};
