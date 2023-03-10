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

export const UserFavorites = () => {
  const { favorites } = useContext(AuthContext);
  const [filters, setFilters] = useState({
    tipo: "todos",
    demografia: demografia[0].value,
    generos: [],
    estado: demografia[0].value,
  });

  useEffect(() => {}, [
    filters.tipo,
    filters.demografia,
    filters.estado,
    filters.generos.length,
  ]);

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
                      onChange={({ value }) =>
                        setFilters({ ...filters, estado: value })
                      }
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
                      onChange={(value) =>
                        setFilters({ ...filters, generos: value })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9 d-flex justify-content-end gap-3"></div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
        {favorites?.map((favorite, index) => (
          <CardItem
            key={`${favorite.id}` + favorite.contentType + index}
            {...favorite}
            index={index}
            action="remove"
          />
        ))}
      </div>
    </>
  );
};
