import React from "react";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <section className="container-fluid not_found_container">
      <div className="not_found_wrapper d-flex flex-column text-white justify-content-center align-items-center">
        <img
          src="../../../public/not-found-error.svg"
          alt="Pagina no encontrada"
          className="not-found-img"
        />
        <div className="not_found_text_wrapper text-center">
          <h1 className="fw-bold">Pagina no encontrada</h1>
          <p className="text-white mt-4">La pagina que buscas no existe</p>
        </div>
      </div>
    </section>
  );
};
