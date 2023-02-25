import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { selectStyles } from "../../../helpers/selectStyles";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./ExploradorSidebar.css";

import { getAnimes } from "../../../Api/Anime/anime";

import { useContext } from "react";
import { ExploradorContext } from "../../../utils/context/ExploradorContext";

const animatedComponents = makeAnimated();

export const ExploradorSidebar = () => {
  const { setItems, filters, setFilters } = useContext(ExploradorContext);

  const tipos = [
    { value: "todos", label: "Todos" },
    { value: "1", label: "Manga" },
    { value: "2", label: "Anime" },
    { value: "3", label: "Manwha" },
    { value: "4", label: "Manhua" },
  ];

  const handleSelectChange = ({ filter, value }) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  const handleCheckBoxChange = ({ value }) => {
    const generosArr = filters.generos;
    const selectedGenre = generosArr.find((genreVal) => genreVal == value);

    if (!selectedGenre) {
      setFilters({
        ...filters,
        generos: [value, ...filters.generos],
      });
    } else {
      setFilters({
        ...filters,
        generos: [...filters.generos.filter((genreVal) => genreVal !== value)],
      });
    }
  };

  useEffect(() => {
    console.log(filters);
    const fetchItems = async () => {
      const items = await getAnimes();
      setItems(items.data);
    };

    fetchItems();
  }, [
    filters.tipo,
    filters.demografia,
    filters.generos,
    filters.estado,
    filters.estreno,
  ]);

  return (
    <>
      <h5> Tipo </h5>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={[tipos[0]]}
        options={tipos}
        classNamePrefix="select"
        styles={selectStyles}
        onChange={(value) => handleSelectChange({ ...value, filter: "tipo" })}
      />

      <h5 className="mt-4">Demografia</h5>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={[tipos[0]]}
        options={tipos}
        classNamePrefix="select"
        styles={selectStyles}
        onChange={(value) =>
          handleSelectChange({ ...value, filter: "demografia" })
        }
      />

      <h5 className="mt-4">Estado</h5>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={[tipos[0]]}
        options={tipos}
        classNamePrefix="select"
        styles={selectStyles}
        onChange={(value) => handleSelectChange({ ...value, filter: "estado" })}
      />

      <h5 className="mt-4">Estreno</h5>
      <DatePicker
        placeholderText="Ingrese una fecha"
        selected={filters.estreno}
        className="form-control bg-dark text-white"
        onChange={(date) =>
          handleSelectChange({ filter: "estreno", value: date })
        }
      />
      <h5 className="mt-4"> Generos </h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={1}
          name="genero"
          onChange={(e) => handleCheckBoxChange(e.target)}
        />
        <label className="form-check-label">Accion</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={2}
          name="genero"
          onChange={(e) => handleCheckBoxChange(e.target)}
        />
        <label className="form-check-label">Aventura</label>
      </div>
    </>
  );
};
