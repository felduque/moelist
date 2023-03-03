import React, { useState, useEffect } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { selectStyles } from "../../helpers/selectStyles";
import {
  demografia,
  tipos,
  generos,
  estado,
  scans,
} from "../../helpers/valoresParaSelects";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FileUploader } from "react-drag-drop-files";
import moment from "moment";
import { RiImageAddFill } from "react-icons/ri";

import "./UserStyles.css";
import { validatePublication } from "../../helpers/validatePublication";

export const UserPublication = () => {
  const fileTypes = ["JPG", "PNG", "GIF", "WEBP", "AVIF", "JPEG"];

  const [todosSelect, ...tiposSelect] = tipos;
  const [todosDemo, ...demografiaSelect] = demografia;
  const [todosEstado, ...estadoSelect] = estado;
  const [one, two, ...sources] = tipos;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    tipo: tiposSelect[0].value,
    image: null,
    demografia: demografiaSelect[0].value,
    estado: demografiaSelect[0].value,
    titulo: "",
    source: sources[0].value,
    capitulos: 0,
    volumenes: 0,
    estreno: "",
    duracion: "",
    temporada: "",
    estudio: "",
    autor: "",
    artista: "",
    sinopsis: "",
    producers: [],
    generos: [],
    scans: [],
  });

  useEffect(() => {
    if (data.tipo !== "2")
      setData({ ...data, estudio: "", producers: [], source: null });
    if (data.tipo === "2") setData({ ...data, volumenes: null });
  }, [data.tipo]);

  const handleImage = (image) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result?.toString());
    };

    reader.readAsDataURL(image);

    setData({ ...data, image });
  };

  useEffect(() => {}, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validatePublication(data));
    savePublication();
  };

  const savePublication = () => {
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000); // simula guardar la publicacion
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="fw-bold">Publicacion </h1>
      <div className="col mb-4">
        <label className="mb-2" htmlFor="">
          Imagen
        </label>
        <FileUploader
          multiple={false}
          classes="drop-zone"
          maxSize={1}
          handleChange={(file) => handleImage(file)}
          children={
            <>
              {preview ? (
                <img src={preview} />
              ) : (
                <>
                  <RiImageAddFill className="fs-1" />
                  <span className="fs-3 fw-semibold">
                    Arrasta una imagen aca!
                  </span>
                </>
              )}
            </>
          }
          name="image"
          label="Arrastra una imagen aqui"
          types={fileTypes}
        />
        {errors.image && (
          <span className="text-danger mt-2 d-block">{errors.image}</span>
        )}
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label htmlFor="">Tipo</label>
          <Select
            placeholder="Seleccione un tipo"
            options={tiposSelect}
            defaultValue={tiposSelect[0]}
            styles={selectStyles}
            onChange={(val) => setData({ ...data, tipo: val.value })}
            classNamePrefix="select"
          />
        </div>

        <div className="col-4">
          <label htmlFor="">Demografia</label>
          <Select
            placeholder="Seleccione una demografia"
            options={demografiaSelect}
            styles={selectStyles}
            defaultValue={demografiaSelect[0]}
            onChange={(val) => setData({ ...data, demografia: val.value })}
            classNamePrefix="select"
          />
        </div>

        <div className="col-4">
          <label htmlFor="">Estado</label>
          <Select
            placeholder="Seleccione un estado"
            options={estadoSelect}
            styles={selectStyles}
            defaultValue={estadoSelect[0]}
            classNamePrefix="select"
            onChange={(val) => setData({ ...data, estado: val.value })}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            name="title"
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, titulo: e.target.value })}
          />
          {errors.titulo && (
            <span className="text-danger mt-2 d-block">{errors.titulo}</span>
          )}
        </div>
        <div className="col-2">
          <label htmlFor="">Source</label>
          <Select
            placeholder="Seleccione un tipo"
            name="source"
            options={sources}
            styles={selectStyles}
            defaultValue={sources[0]}
            classNamePrefix="select"
            isDisabled={data.tipo !== "2" && true}
            onChange={(val) => setData({ ...data, source: val.value })}
          />
        </div>

        <div className="col-2">
          <label htmlFor="">Capitulos</label>
          <input
            type="number"
            value={data.capitulos}
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, capitulos: e.target.value })}
          />
          {errors.capitulos && (
            <span className="text-danger mt-2 d-block">{errors.capitulos}</span>
          )}
        </div>
        <div className="col-2">
          <label htmlFor="">Volumenes</label>
          <input
            type="number"
            value={data.volumenes}
            disabled={data.tipo === "2" && true}
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, volumenes: e.target.value })}
          />
          {errors.volumenes && (
            <span className="text-danger mt-2 d-block">{errors.volumenes}</span>
          )}
        </div>
      </div>

      <div className="row  mb-4">
        <div className="col-4">
          <label htmlFor="">Estreno</label>
          <DatePicker
            name="estreno"
            placeholderText="Ingrese una fecha"
            selected={data.estreno}
            className="form-control bg-dark text-white"
            onChange={(date) => {
              setData({
                ...data,
                estreno: date,
              });
            }}
          />

          {errors.estreno && (
            <span className="text-danger mt-2 d-block">{errors.estreno}</span>
          )}
        </div>

        <div className="col-4">
          <label htmlFor="">Duración</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            disabled={data.tipo !== "2" && true}
            onChange={(e) => setData({ ...data, duracion: e.target.value })}
          />

          {errors.duracion && (
            <span className="text-danger mt-2 d-block">{errors.duracion}</span>
          )}
        </div>

        <div className="col-4">
          <label htmlFor="">Temporada</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, temporada: e.target.value })}
          />
          {errors.temporada && (
            <span className="text-danger mt-2 d-block">{errors.temporada}</span>
          )}
        </div>
      </div>

      <div className="row  mb-4">
        <div className="col-4">
          <label htmlFor="">Estudio</label>
          <input
            type="text"
            disabled={data.tipo !== "2" && true}
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, estudio: e.target.value })}
          />

          {errors.estudio && (
            <span className="text-danger mt-2 d-block">{errors.estudio}</span>
          )}
        </div>

        <div className="col-4">
          <label htmlFor="">Autor</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, autor: e.target.value })}
          />
          {errors.autor && (
            <span className="text-danger mt-2 d-block">{errors.autor}</span>
          )}
        </div>

        <div className="col-4">
          <label htmlFor="">Artista</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, artista: e.target.value })}
          />
          {errors.artista && (
            <span className="text-danger mt-2 d-block">{errors.artista}</span>
          )}
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label htmlFor="">Productoras</label>
          <Creatable
            name="producers"
            placeholder="Introduzca las productoras"
            isMulti
            value={data.producers}
            isDisabled={data.tipo !== "2" && true}
            styles={selectStyles}
            classNamePrefix="select"
            onChange={(val) => {
              console.log(val);
              setData({ ...data, producers: val });
            }}
          />
          {errors.producers && (
            <span className="text-danger mt-2 d-block">{errors.producers}</span>
          )}
        </div>
        <div className="col-4">
          <label htmlFor="">Generos</label>
          <Select
            name="generos"
            placeholder="Seleccione generos"
            classNamePrefix="select"
            options={generos}
            isMulti
            styles={selectStyles}
            onChange={(val) => setData({ ...data, generos: val })}
          />
          {errors.generos && (
            <span className="text-danger mt-2 d-block">{errors.generos}</span>
          )}
        </div>

        <div className="col-4">
          <label htmlFor="">Scans</label>
          <Select
            name="scans"
            placeholder="Seleccione scans"
            classNamePrefix="select"
            options={scans}
            isMulti
            onChange={(val) => setData({ ...data, scans: val })}
            styles={selectStyles}
          />
          {errors.scans && (
            <span className="text-danger mt-2 d-block">{errors.scans}</span>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <label htmlFor="">Sinopsis</label>
          <textarea
            className="form-control bg-dark text-white"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setData({ ...data, sinopsis: e.target.value })}
          ></textarea>
          {errors.sinopsis && (
            <span className="text-danger mt-2 d-block">{errors.sinopsis}</span>
          )}
        </div>
      </div>

      <div className="col-12 mt-4">
        <button
          className="btn btn-primary w-25 d-flex justify-content-center gap-3"
          type="submit"
          disabled={loading && true}
        >
          Publicar
          {loading && (
            <div
              class="spinner-border"
              role="status"
              style={{ width: "22px", height: "22px" }}
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};
