import React, { useState } from "react";
import { CardLoop } from "../../Components/CardLoop/CardLoop";
import { ExploradorOrder } from "../../Components/Explorador/ExploradorOrder/ExploradorOrder";
import { ExploradorSearch } from "../../Components/Explorador/ExploradorSearch/ExploradorSearch";
import { ExploradorSidebar } from "../../Components/Explorador/ExploradorSidebar/ExploradorSidebar";
import { LoadingOverlay } from "../../Components/LoadingOverlay/LoadingOverlay";
import { ExploradorContext } from "../../utils/context/ExploradorContext";

import "./Explorador.css";

export const Explorador = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <ExploradorContext.Provider
      value={{ setItems, items, setLoading, loading }}
    >
      <LoadingOverlay loading={loading}>
        <section className="container-fluid bg-dark px-4 px-md-5 pb-5">
          <div className="row py-5">
            <ExploradorSearch />
          </div>
          <div className="row">
            <div className="col-lg-3 text-white">
              <ExploradorSidebar />
            </div>
            <div className="col-lg-9 text-white">
              <div className="mb-4">
                <ExploradorOrder />
              </div>
              <CardLoop cards={items.slice(0, 18)} />
            </div>
          </div>
        </section>
      </LoadingOverlay>
    </ExploradorContext.Provider>
  );
};
