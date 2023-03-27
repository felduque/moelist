import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext";
import Select, { ActionMeta, SingleValue } from "react-select";
import { FaChevronDown } from "react-icons/fa";
// import {
//   tipos,
//   generos,
//   demografia,
//   estado,
// } from "../../helpers/valoresParaSelects";
import { CardLoop } from "../CardLoop/CardLoop";
import { selectStyles } from "@/utils/helpers";
import { demografia, estado, generos, tipos } from "@/utils/valoresParaSelects";
import { Pagination } from "../Pagination/Pagination";
import { ContentType, filterType } from "@/utils/types";

const filtersInitState = {
  tipo: "",
  demografia: "",
  generos: [],
  estado: "",
};

export const UserFavorites = () => {
  const { favorites } = useContext(AuthContext);
  const [filteredFavs, setFilterFavs] = useState(favorites);
  const [filters, setFilters] = useState<filterType>({
    tipo: "",
    demografia: "",
    generos: [],
    estado: "",
  });
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 18;

  let totalPages = Math.ceil(totalItems / itemsPerPage);

  const filtrar = (pag = 0) => {
    const filtersConditions = {
      tipo: (item: ContentType) =>
        !filters.tipo ? true : filters.tipo == item.contentType,
      demografia: (item: ContentType) =>
        !filters.demografia
          ? true
          : filters.demografia == item.demography.toLowerCase(),
      estado: (item: ContentType) =>
        !filters.estado
          ? true
          : filters.estado == item.status?.toLowerCase() ||
            item.status == "Emision",
      generos: (item: ContentType) =>
        filters.generos.length == 0
          ? true
          : filters.generos.every((g) => item?.genres?.includes(g.label)),
    };

    const selectedT = [
      filtersConditions.tipo,
      filtersConditions.demografia,
      filtersConditions.generos,
      filtersConditions.estado,
    ];

    const result = favorites.filter((fav) => selectedT.every((f) => f(fav)));
    let paginated = result.slice(
      pag * itemsPerPage,
      pag * itemsPerPage + itemsPerPage
    );

    if (paginated.length === 0 && pag > 0) pag--;

    let from = pag * itemsPerPage;
    let to = pag * itemsPerPage + itemsPerPage;

    paginated = result.slice(from, to);

    setTotalItems(result.length);
    setFilterFavs(paginated);
    setCurrentPage(pag);
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
    filtrar(currentPage);
  }, [favorites, currentPage]);

  const handleChange = (option: any) => {
    console.log(favorites);
    const { label } = option.val;
    const isArr = Array.isArray(option.val);
    console.log(label);
    setFilters({
      ...filters,
      [option.filter]: isArr ? option.val : label.toLowerCase(),
    });
  };

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
                      onChange={(val) => handleChange({ val, filter: "tipo" })}
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
                      onChange={(val) =>
                        handleChange({ val, filter: "demografia" })
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
                      onChange={(val) =>
                        handleChange({ val, filter: "estado" })
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
                      id="generos"
                      styles={selectStyles}
                      placeholder="Todos"
                      options={generos}
                      value={filters.generos}
                      onChange={(val) =>
                        handleChange({ val, filter: "generos" })
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
      <Pagination
        pages={totalPages}
        onPageChange={filtrar}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        initialPage={currentPage}
      />
    </>
  );
};
