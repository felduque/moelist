import React, { useContext, useEffect } from "react";
import { getAnimes } from "../../../Api/Anime/anime";
import { ExploradorContext } from "../../../utils/context/ExploradorContext";

export const ExploradorOrder = () => {
  const { setItems, filters, setFilters } = useContext(ExploradorContext);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAnimes();
      setItems(items.data);
    };

    fetchItems();
  }, [filters.orden]);

  return (
    <div className="row align-items-center mt-3 mt-md-0">
      <div className="col-lg-10 text-start text-lg-end">Ordenar por</div>
      <div className="col-lg-2">
        <select
          className="form-select bg-dark text-white mt-2 mt-md-0"
          onChange={(e) => setFilters({ ...filters, orden: e.target.value })}
        >
          <option value="estreno">Fecha</option>
          <option value="title">Titulo</option>
        </select>
      </div>
    </div>
  );
};
