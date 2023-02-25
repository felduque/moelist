import React, { useState, useEffect } from "react";
import { getAnimes } from "../../Api/Anime/anime";
import { CardItem } from "../../Components/CardItem/CardItem";
import { ExploradorOrder } from "../../Components/Explorador/ExploradorOrder/ExploradorOrder";
import { ExploradorSidebar } from "../../Components/Explorador/ExploradorSidebar/ExploradorSidebar";
import { ExploradorContext } from "../../utils/context/ExploradorContext";

import "./Explorador.css";

export const Explorador = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAnimes();
      setItems(items.data);
    };

    fetchItems();
  }, []);

  return (
    <ExploradorContext.Provider value={{ setItems }}>
      <section className="container-fluid bg-dark px-4 px-md-5 pb-5">
        <div className="row py-5">
          <div className="col-lg-10 mb-2 mb-lg-0">
            <input type="search" className="form-control" />
          </div>
          <div className="col-lg-2">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-white">
            <ExploradorSidebar />
          </div>
          <div className="col-lg-9 text-white">
            <ExploradorOrder />
            <div className="row mt-4 ms-xl-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xxl-6">
              {items.map((item) => (
                <CardItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ExploradorContext.Provider>
  );
};
