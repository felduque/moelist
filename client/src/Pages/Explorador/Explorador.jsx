import React, { useState, useEffect } from "react";
import { getAnimes } from "../../Api/Anime/anime";
import { CardItem } from "../../Components/CardItem/CardItem";
import { ExploradorOrder } from "../../Components/Explorador/ExploradorOrder/ExploradorOrder";
import { ExploradorSearch } from "../../Components/Explorador/ExploradorSearch/ExploradorSearch";
import { ExploradorSidebar } from "../../Components/Explorador/ExploradorSidebar/ExploradorSidebar";
import { ExploradorContext } from "../../utils/context/ExploradorContext";

import "./Explorador.css";

export const Explorador = () => {
  const [items, setItems] = useState([]);

  return (
    <ExploradorContext.Provider value={{ setItems, items }}>
      <section className="container-fluid bg-dark px-4 px-md-5 pb-5">
        <div className="row py-5">
          <ExploradorSearch />
        </div>
        <div className="row">
          <div className="col-lg-3 text-white">
            <ExploradorSidebar />
          </div>
          <div className="col-lg-9 text-white">
            <ExploradorOrder />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 mt-5 mt-xl-3">
              {items?.map((item, index) => (
                <CardItem key={index} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ExploradorContext.Provider>
  );
};
