import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { selectStyles } from "../../../helpers/selectStyles";

import "react-datepicker/dist/react-datepicker.css";

import "./ExploradorSidebar.css";

import { search } from "../../../Api/Search/Search";

import { useContext } from "react";
import { ExploradorContext } from "../../../utils/context/ExploradorContext";

import {
  tipos,
  demografia,
  estado,
  generos,
} from "../../../helpers/valoresParaSelects";

const animatedComponents = makeAnimated();

export const ExploradorSidebar = () => {
  const { setItems } = useContext(ExploradorContext);
  const [data, setData] = useState({
    type: "",
    demography: "",
    status: "",
    genres: [],
  });
  const handlePushGenres = (e) => {
    console.log(e);
    //se usa set para que nose repitan los generos
    setData({ ...data, genres: [...new Set([...data.genres, e])] });
  };

  useEffect(() => {
    const fetchItems = async () => {
      const items = await search(
        data.type,
        data.demography,
        data.status,
        data.genres
      );
      setItems(items.data);
    };

    fetchItems();
    console.log("hola");
  }, [data.type, data.demography, data.status, data.genres, setItems]);

  return (
    <>
      <h5> Tipo </h5>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        options={tipos}
        classNamePrefix="select"
        styles={selectStyles}
        onChange={(value) => setData({ ...data, type: value.label })}
      />

      <h5 className="mt-4">Demografia</h5>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        options={demografia}
        classNamePrefix="select"
        styles={selectStyles}
        onChange={(value) => setData({ ...data, demography: value.label })}
      />

      <h5 className="mt-4">Estado</h5>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        options={estado}
        classNamePrefix="select"
        styles={selectStyles}
        onChange={(value) => setData({ ...data, status: value.label })}
      />
      <h5 className="mt-4"> Generos </h5>
      {generos.map((genero) => (
        <div key={genero.value} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={genero.label}
            name="genero"
            // cuando se marca se agrega el genero al array de generos si se desmarca se elimina
            onChange={(e) => {
              if (e.target.checked) {
                handlePushGenres(e.target.value);
              } else {
                setData({
                  ...data,
                  genres: data.genres.filter((item) => item !== e.target.value),
                });
              }
            }}

            // onChange={(e) => handlePushGenres(e.target.value)}
          />
          <label className="form-check-label">{genero.label}</label>
        </div>
      ))}
    </>
  );
};
