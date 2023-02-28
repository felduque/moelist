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
  const [filters, setFilters] = useState({
    tipo: "todos",
    demografia: "todos",
    generos: [],
    estado: "todos",
    estreno: "",
    orden: "estreno",
  });

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAnimes();
      setItems(items.data);
    };

    fetchItems();
  }, []);

  return (
    <ExploradorContext.Provider value={{ setItems, filters, setFilters }}>
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
            <div className="row mt-4 ms-xl-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xxl-6">
              {items.map((item, index) => (
                <CardItem key={item.id} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ExploradorContext.Provider>
  );
};
