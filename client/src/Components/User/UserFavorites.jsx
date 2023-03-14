import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext";
import { CardItem } from "../CardItem/CardItem";
import Select from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { selectStyles } from "../../helpers/selectStyles";
import {
  tipos,
  generos,
  demografia,
  estado,
} from "../../helpers/valoresParaSelects";
import { CardLoop } from "../CardLoop/CardLoop";

const filtersInitState = {
  tipo: "",
  demografia: "",
  generos: [],
  estado: "",
};

export const UserFavorites = () => {
  const { favorites } = useContext(AuthContext);
  const [filteredFavs, setFilterFavs] = useState(favorites);
  const [filters, setFilters] = useState(filtersInitState);

  // console.log(favorites);
  console.log(favorites);

  const filtrar = () => {
    const filtersConditions = {
      tipo: (item) => (!filters.tipo ? true : filters.tipo == item.contentType),
      demografia: (item) =>
        !filters.demografia ? true : filters.demografia == item.demography,
      estado: (item) =>
        !filters.estado
          ? true
          : filters.estado == item.status || item.status == "Emision",
      generos: (item) =>
        filters.generos.length == 0
          ? true
          : filters.generos.every((g) => item.genres.includes(g.label)),
    };

    const selectedT = [
      filtersConditions.tipo,
      filtersConditions.demografia,
      filtersConditions.generos,
      filtersConditions.estado,
    ];

    const result = favorites.filter((fav) => selectedT.every((f) => f(fav)));

    setFilterFavs(result);
  };

  useEffect(() => {
    filtrar();
  }, [
    filters.tipo,
    filters.demografia,
    filters.estado,
    filters.generos.length,
  ]);

  useEffect(() => {
    setFilterFavs(favorites);
    filtrar();
  }, [favorites]);

  return (
    <>
      <div className="row mb-4 align-items-center">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-dark text-white fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-controls="collapseOne"
              >
                Favoritos Añadidos:
                <span className="ms-1 txt-primary"> {favorites.length}</span>
                <FaChevronDown className="ms-auto" />
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse txt-primary"
              aria-labelledby="favorites-filter"
            >
              <div className="accordion-body bg-dark text-white">
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-3">
                    <label htmlFor="tipos">Tipos</label>
                    <Select
                      className="mt-2"
                      id="tipos"
                      styles={selectStyles}
                      placeholder="Todos"
                      defaultValue={filters.tipo}
                      value={{ label: filters.tipo, value: filters.tipo }}
                      options={tipos}
                      onChange={({ label }) =>
                        setFilters({ ...filters, tipo: label.toLowerCase() })
                      }
                      classNamePrefix="select"
                    />
                  </div>

                  <div className="col-12 col-md-6 col-xl-3">
                    <label htmlFor="demografia">Demografia</label>
                    <Select
                      className="mt-2"
                      id="demografia"
                      styles={selectStyles}
                      placeholder="Todos"
                      value={{
                        label: filters.demografia,
                        value: filters.demografia,
                      }}
                      options={demografia}
                      onChange={({ label }) =>
                        setFilters({ ...filters, demografia: label })
                      }
                      classNamePrefix="select"
                    />
                  </div>

                  <div className="col-12 col-md-6 col-xl-3 mt-4 mt-xl-0">
                    <label htmlFor="estado">Estado</label>
                    <Select
                      className="mt-2"
                      id="estado"
                      styles={selectStyles}
                      onChange={({ label }) =>
                        setFilters({ ...filters, estado: label })
                      }
                      value={{
                        label: filters.estado,
                        value: filters.estado,
                      }}
                      placeholder="Todos"
                      options={estado}
                      classNamePrefix="select"
                    />
                  </div>

                  <div className="col-12 col-md-6 col-xl-3 mt-4 mt-xl-0">
                    <label htmlFor="generos">Generos</label>
                    <Select
                      isMulti
                      className="mt-2"
                      id="tipos"
                      styles={selectStyles}
                      placeholder="Todos"
                      options={generos}
                      value={filters.generos}
                      onChange={(value) =>
                        setFilters({ ...filters, generos: value })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => setFilters(filtersInitState)}
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9 d-flex justify-content-end gap-3"></div>
      </div>
      <CardLoop cards={filteredFavs} action="remove" />
    </>
  );
};
