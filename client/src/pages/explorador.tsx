import { CardLoop } from "@/components/CardLoop/CardLoop";
import { ExploradorOrder } from "@/components/Explorador/ExploradorOrder/ExploradorOrder";
import { ExploradorSearch } from "@/components/Explorador/ExploradorSearch/ExploradorSearch.";
import { ExploradorSidebar } from "@/components/Explorador/ExploradorSidebar/ExploradorSidebar";
import { LoadingOverlay } from "@/components/LoadingOverlay/LoadingOverlay";
import { ExploradorContext } from "@/utils/context/ExploradorContext";
import { ContentType } from "@/utils/types";
import React, { useState } from "react";

//loadingOverlay

const Explorador = () => {
  const [items, setItems] = useState<ContentType[]>([]);
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

export default Explorador;
