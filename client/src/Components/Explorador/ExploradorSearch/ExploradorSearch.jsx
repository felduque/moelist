import React, { useState } from "react";
import { useContext } from "react";
import { getAnimes } from "../../../Api/Anime/anime";
import { ExploradorContext } from "../../../utils/context/ExploradorContext";

export const ExploradorSearch = () => {
  const { setItems } = useContext(ExploradorContext);
  const [search, setSearch] = useState();

  const handleSearch = () => {
    if (search) {
      const fetchItems = async () => {
        const items = await getAnimes();
        setItems(items.data);
      };
      fetchItems();
    }

    setSearch("");
  };

  return (
    <>
      <div className="col-lg-10 mb-2 mb-lg-0">
        <input
          type="search"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && handleSearch(e.target.value)}
        />
      </div>
      <div className="col-lg-2">
        <button className="btn btn-primary w-100" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};
