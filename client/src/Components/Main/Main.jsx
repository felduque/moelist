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
    animes.push(i);
    mangas.push(i);
    manhwas.push(i);
    manhuas.push(i);
  }

  return (
    <div className="content-primary-main">
      <div className="content-all-main container">
        <div className="conent-title-catogory one-category-main">
          <h2 className="text-white">Animes</h2>
        </div>
        <div className="row">
          {animes.map((anime) => (
            <CardItem {...propsA} />
          ))}
        </div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Mangas</h2>
        </div>
        <div className="row">
          {mangas.map((manga) => (
            <CardItem {...propsM} />
          ))}
        </div>

        <div className="conent-title-catogory">
          <h2 className="text-white">Manhwas</h2>
        </div>
        <div className="row">
          {manhwas.map((manhwa) => (
            <CardItem {...PropsMan} />
          ))}
        </div>
        <div className="conent-title-catogory">
          <h2 className="text-white">Manhuas</h2>
        </div>
        <div className="row">
          {manhuas.map((manhua) => (
            <CardItem {...PropsMh} />
          ))}
        </div>
      </div>
    </div>
  );
};
