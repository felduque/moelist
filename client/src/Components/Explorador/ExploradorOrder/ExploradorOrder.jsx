import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { getAnimes } from "../../../Api/Anime/anime";
import { ExploradorContext } from "../../../utils/context/ExploradorContext";

export const ExploradorOrder = () => {
  const [orden, setOrden] = useState("DESC");
  const { setItems } = useContext(ExploradorContext);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAnimes();
      setItems(items.data);
      console.log("pasa");
    };

    fetchItems();
  }, [orden]);

  return (
    <div className="row align-items-center mt-3 mt-md-0">
      <div className="col-md-9 text-start text-lg-end">Ordenar por</div>
      <div className="col-md-3">
        <select
          className="form-select bg-dark text-white mt-2 mt-md-0"
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="title">Titulo</option>
          <option value="estreno">Fecha</option>
        </select>
      </div>
    </div>
  );
};
