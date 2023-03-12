import React, { useState } from "react";
import { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Search.css";
import { searchTitle } from "../../Api/Search/Search";
import { SearchItem } from "./SearchItem";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const location = useLocation();

  //  es para que no bombardee el servidor fetch cada vez que se escriba algo en el search
  const [typingTimer, setTypingTimer] = useState();

  useEffect(() => {
    if (search.length < 2) return;

    setSearchItems([]); // vacia el search
    setLoading(true);

    const fetchSearch = async () => {
      const items = await searchTitle(search);
      setLoading(false);
      setSearchItems(items?.data);
    };

    clearTimeout(typingTimer);

    setTypingTimer(
      setTimeout(() => {
        fetchSearch();
      }, 1000)
    );
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [location]);

  return (
    <div className="search-wrapper">
      <input
        className="navbar-container__search__input"
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <div className="autocom-box text-center px-3 pt-3">
          {loading && <ScaleLoader color="var(--primary-color)" />}
          {searchItems.slice(0, 3).map((item) => (
            <SearchItem key={item.id} {...item} />
          ))}
          {searchItems.length === 0 && !loading && (
            <p>No se pudo encontrar tu busqueda</p>
          )}
        </div>
      )}
    </div>
  );
};
