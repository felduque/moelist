import React, { useState, useEffect, useContext } from "react";
import "./UserStyles.css";
import Creatable from "react-select/creatable";
import Swal from "sweetalert2";
import { selectStyles } from "../../helpers/selectStyles";
import { AuthContext } from "../../utils/context/AuthContext";
import {
  demografia,
  tipos,
  generos,
  estado,
  scans,
  source,
  dias,
} from "../../helpers/valoresParaSelects";
import { createAnime, updateAnime } from "../../Api/Anime/anime";
import { createManga, updateManga } from "../../Api/Mangas/mangas";
import { createManhua, updateManhua } from "../../Api/Manhuas/mahuas";
import { createManhwa, updateManhwa } from "../../Api/Manhwas/manhwas";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
import Select from "react-select";
// import { validatePublication } from "../../helpers/validatePublication";
import { FileUploader } from "react-drag-drop-files";
import { RiImageAddFill } from "react-icons/ri";

export const UserPublication = () => {
  const fileTypes = ["JPG", "PNG", "GIF", "WEBP", "AVIF", "JPEG"];
  const [productoras, setProductoras] = useState([]);
  const [genresView, setGenresView] = useState([]);
  const [estudioView, setEstudioView] = useState([]);
  const [authorsView, setAuthorsView] = useState([]);
  const [artistsView, setArtistsView] = useState([]);
  const [id, setId] = useState();
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    tipo: "",
    image: {},
    demografia: "",
    estado: "",
    titulo: "",
    source: "",
    capitulos: 0,
    volumenes: 0,
    estreno: "",
    duracion: "",
    temporada: "",
    estudio: [],
    autor: "",
    artista: "",
    sinopsis: "",
    producers: [],
    generos: [],
    scans: "",
    day: "",
    urlContent: "",
  });

  const handleImage = (image) => {
    const reader = new FileReader();
    setData({ ...data, image });
    reader.onloadend = () => {
      setPreview(reader.result?.toString());
    };

    reader.readAsDataURL(image);
  };
  useEffect(() => {
    let { id } = user;
    console.log(id);
    setId(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    savePublication();
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Publicación creada con éxito",
        text: "Felicidades ya puede ir a revisar tu publicacion :D",
        showConfirmButton: false,
        timer: 1500,
      });
    }, 3000);
  };

  const handlePush = (datos, type) => {
    if (data.producers.length != productoras.length) {
      setProductoras([]);
      setData({ ...data, producers: [] });
    }
    if (data.generos.length != genresView.length) {
      setGenresView([]);
      setData({ ...data, generos: [] });
    }

    if (data.estudio.length != estudioView.length) {
      setEstudioView([]);
      setData({ ...data, estudio: [] });
    }

    if (data.autor.length != authorsView.length) {
      setAuthorsView([]);
      setData({ ...data, autor: [] });
    }

    if (data.artista.length != artistsView.length) {
      setArtistsView([]);
      setData({ ...data, artista: [] });
    }

    if (type === "autor") {
      setAuthorsView(datos);
    }

    if (type === "artista") {
      setArtistsView(datos);
    }

    if (type === "producers") {
      setProductoras(datos);
    }

    if (type === "generos") {
      setGenresView(datos);
    }

    if (type === "estudio") {
      setEstudioView(datos);
    }
    datos.forEach((element) => {
      if (data[type].length > 0) {
        setData({
          ...data,
          [type]: [...new Set([...data[type], element.label])],
        });
      } else if (data[type].length === 0) {
        setData({ ...data, [type]: [element.label] });
      }
    });
  };

  const savePublication = () => {
    if (data.tipo === "Anime") {
      const scan = parseInt(data.scans);
      const newData = {
        type: "Tv", // ✔️
        demography: data.demografia, // ✔️
        status: data.estado, // ✔️
        title: data.titulo, // ✔️
        source: data.source, // ✔️
        episodes: data.capitulos, // ✔️
        premiered: data.estreno, // ✔️
        duration: data.duracion, // ✔️
        season: data.temporada, // ✔️
        studios: data.estudio, // ✔️
        author: data.autor, // ✔️
        artist: data.artista, // ✔️
        description: data.sinopsis, // ✔️
        producers: data.producers, // ✔️
        genres: data.generos, // ✔️
        scanId: scan, // ✔️
        authorId: id, // ✔️
        day: data.day, // ✔️
        urlContent: data.urlContent, // ✔️
      };
      createAnime(newData)
        .then((res) => {
          const id = parseInt(res?.data?.id);
          const images = {
            image: data.image,
          };
          console.log(data.image, id);
          updateAnime(id, images);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (data.tipo === "Manga") {
      const scan = parseInt(data.scans);
      const newData = {
        type: "Manga", // ✔️
        status: data.estado, // ✔️
        title: data.titulo, // ✔️
        demography: data.demografia, // ✔️
        description: data.sinopsis,
        source: data.source, // ✔️
        day: data.day, // ✔️
        volumes: data.volumenes, // ✔️
        chapters: data.capitulos, // ✔️
        genres: data.generos, // ✔️
        urlContent: data.urlContent, // ✔️
        scanId: scan, // ✔️
        authorId: id, // ✔️
        authors: data.autor, // ✔️
        artists: data.artista, // ✔️
        //premiered: data.estreno, // ❌
        //demography: data.demografia, // ❌
        // duration: data.duracion,  // ❌
        // season: data.temporada, // ❌
        //studios: data.estudio, // ❌
      };
      createManga(newData)
        .then((res) => {
          const id = parseInt(res?.data?.id);
          const images = {
            image: data.image,
          };
          updateManga(id, images);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (data.tipo === "Manhua") {
      const scan = parseInt(data.scans);
      const newData = {
        type: "Manhua", // ✔️
        status: data.estado, // ✔️
        title: data.titulo, // ✔️
        description: data.sinopsis,
        source: data.source, // ✔️
        demography: data.demografia, // ✔️
        day: data.day, // ✔️
        volumes: data.volumenes, // ✔️
        chapters: data.capitulos, // ✔️
        authorId: id, // ✔️
        genres: data.generos, // ✔️
        urlContent: data.urlContent, // ✔️
        scanId: scan, // ✔️
        authors: data.autor, // ✔️
        artists: data.artista, // ✔️
      };
      createManhua(newData)
        .then((res) => {
          const id = parseInt(res?.data?.id);
          const images = {
            image: data.image,
          };
          updateManhua(id, images);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (data.tipo === "Manhwa") {
      const scan = parseInt(data.scans);
      const newData = {
        type: "Manhwa", // ✔️
        status: data.estado, // ✔️
        title: data.titulo, // ✔️
        description: data.sinopsis,
        source: data.source, // ✔️
        day: data.day, // ✔️
        demography: data.demografia, // ✔️
        volumes: data.volumenes, // ✔️
        chapters: data.capitulos, // ✔️
        genres: data.generos, // ✔️
        authorId: id, // ✔️
        urlContent: data.urlContent, // ✔️
        scanId: scan, // ✔️
        authors: data.autor, // ✔️
        artists: data.artista, // ✔️
      };
      createManhwa(newData)
        .then((res) => {
          const id = parseInt(res?.data?.id);
          const images = {
            image: data.image,
          };
          updateManhwa(id, images);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // window.location.href = "/";
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
        {errors?.image && (
          <span className="text-danger mt-2 d-block">{errors?.image}</span>
        )}
      </div>

      <div className="row mb-4">
        <div className="col-12 col-md-4">
          <label htmlFor="">Tipo</label>
          <Select
            placeholder="Seleccione un tipo"
            options={tipos}
            styles={selectStyles}
            onChange={(val) => setData({ ...data, tipo: val.label })}
            classNamePrefix="select"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0">
          <label htmlFor="">Demografia</label>
          <Select
            placeholder="Seleccione una demografia"
            options={demografia}
            styles={selectStyles}
            onChange={(val) => setData({ ...data, demografia: val.label })}
            classNamePrefix="select"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0">
          <label htmlFor="">Estado</label>
          {data.tipo === "Manga" ||
          data.tipo === "Manhwa" ||
          data.tipo === "Manhua" ? (
            <div className="col-4">
              <label htmlFor="">Artistas</label>
              <Creatable
                name="artista"
                placeholder="Escriba los Artistas"
                isMulti
                value={artistsView}
                styles={selectStyles}
                classNamePrefix="select"
                onChange={(val) => handlePush(val, "artista")}
              />
            </div>
          ) : null}
        </div>

        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0">
          <label htmlFor="">Estado de la Obra</label>

          <Select
            placeholder="Seleccione un estado"
            options={estado}
            styles={selectStyles}
            classNamePrefix="select"
            onChange={(val) => setData({ ...data, estado: val.label })}
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 col-md-5 mb-3">
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            name="title"
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, titulo: e.target.value })}
          />
          {errors?.titulo && (
            <span className="text-danger mt-2 d-block">{errors?.titulo}</span>
          )}
        </div>

        <div className="col-12 col-sm-4 col-md-3 col-lg-3">
          <label htmlFor="">Source</label>
          <Select
            placeholder="Seleccione un tipo"
            name="source"
            options={source}
            styles={selectStyles}
            classNamePrefix="select"
            onChange={(val) => setData({ ...data, source: val.label })}
          />
        </div>

        <div className="col-12 col-sm-4 col-md-2 col-lg-2 mt-4 mt-sm-0">
          {data.tipo === "Anime" ? (
            <label htmlFor="">Capitulos</label>
          ) : (
            <label htmlFor="">Chapters</label>
          )}
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
        <div className="col-12 col-sm-4 col-md-2 col-lg-2 mt-4 mt-sm-0">
          <label htmlFor="">Volumenes</label>
          <input
            type="number"
            value={data.volumenes}
            disabled={data.tipo === "2" && true}
            className="form-control bg-dark text-white"
            onChange={(e) => setData({ ...data, volumenes: e.target.value })}
          />
          {errors?.capitulos && (
            <span className="text-danger mt-2 d-block">
              {errors?.capitulos}
            </span>
          )}
        </div>
        {/* Si Manga, Manhua o Manhwa existe muestra volumes */}
        {data.tipo === "Manga" ||
        data.tipo === "Manhua" ||
        data.tipo === "Manhwa" ? (
          <div className="col-2">
            <label htmlFor="">Volumenes</label>
            <input
              type="number"
              value={data.volumenes}
              className="form-control bg-dark text-white"
              onChange={(e) => setData({ ...data, volumenes: e.target.value })}
            />
            {errors?.volumenes && (
              <span className="text-danger mt-2 d-block">
                {errors?.volumenes}
              </span>
            )}
          </div>
        ) : null}
      </div>

      {data.tipo === "Anime" && (
        <div className="row  mb-4">
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-sm-0">
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

            {errors?.estreno && (
              <span className="text-danger mt-2 d-block">
                {errors?.estreno}
              </span>
            )}
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="">Duración</label>
            <input
              type="text"
              className="form-control bg-dark text-white"
              onChange={(e) => setData({ ...data, duracion: e.target.value })}
            />

            {errors?.duracion && (
              <span className="text-danger mt-2 d-block">
                {errors?.duracion}
              </span>
            )}
          </div>

          <div className="col-12 col-md-4 mt-4 mt-md-0">
            <label htmlFor="">Temporada</label>
            <input
              type="text"
              className="form-control bg-dark text-white"
              onChange={(e) => setData({ ...data, temporada: e.target.value })}
            />
            {errors?.temporada && (
              <span className="text-danger mt-2 d-block">
                {errors?.temporada}
              </span>
            )}
          </div>
        </div>
      )}

      {data.tipo === "Anime" && (
        <div className="row  mb-4">
          <div className="col-12 col-sm-4">
            <label htmlFor="">Estudio</label>
            <Creatable
              placeholder="Seleccione un estudio"
              isMulti
              value={estudioView}
              styles={selectStyles}
              onChange={(val) => handlePush(val, "estudio")}
              classNamePrefix="select"
            />

            {errors?.estudio && (
              <span className="text-danger mt-2 d-block">
                {errors?.estudio}
              </span>
            )}
          </div>

          <div className="col-12 col-sm-4 my-4 my-sm-0">
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

          <div className="col-12 col-sm-4">
            <label htmlFor="">Artista</label>
            <input
              type="text"
              className="form-control bg-dark text-white"
              onChange={(e) => setData({ ...data, artista: e.target.value })}
            />
            {errors.artista && (
              <span className="text-danger mt-2 d-block">{errors.artista}</span>
            )}
            <div className="col-4">
              <label htmlFor="">Autor</label>
              <input
                type="text"
                className="form-control bg-dark text-white"
                onChange={(e) => setData({ ...data, autor: e.target.value })}
              />
              {errors?.autor && (
                <span className="text-danger mt-2 d-block">
                  {errors?.autor}
                </span>
              )}
            </div>

            <div className="col-4">
              <label htmlFor="">Artista</label>
              <input
                type="text"
                className="form-control bg-dark text-white"
                onChange={(e) => setData({ ...data, artista: e.target.value })}
              />
              {errors?.artista && (
                <span className="text-danger mt-2 d-block">
                  {errors?.artista}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="row mb-4">
        {data.tipo === "Anime" && (
          <div className="col-sm-12 col-lg-4 mb-4 mb-lg-0">
            <label htmlFor="">Productoras</label>
            <Creatable
              name="producers"
              placeholder="Introduzca las productoras"
              isMulti
              value={productoras}
              styles={selectStyles}
              classNamePrefix="select"
              onChange={(val) => handlePush(val, "producers")}
            />
            {errors?.producers && (
              <span className="text-danger mt-2 d-block">
                {errors?.producers}
              </span>
            )}
          </div>
        )}

        {data.tipo === "Manga" ||
        data.tipo === "Manhwa" ||
        data.tipo === "Manhua" ? (
          <div className="col-sm-12 col-lg-4 mb-4 mb-lg-0">
            <label htmlFor="">Autor(es)</label>
            <Creatable
              name="autor"
              placeholder="Escriba los Autor(es)"
              isMulti
              value={authorsView}
              styles={selectStyles}
              classNamePrefix="select"
              onChange={(val) => handlePush(val, "autor")}
            />
          </div>
        ) : null}

        <div className="col-4">
          <label htmlFor="">Generos</label>
          <Select
            name="generos"
            placeholder="Seleccione generos"
            classNamePrefix="select"
            options={generos}
            isMulti
            styles={selectStyles}
            onChange={(val) => handlePush(val, "generos")}
          />
          {errors?.generos && (
            <span className="text-danger mt-2 d-block">{errors?.generos}</span>
          )}
        </div>

        <div className="col-sm-6 col-lg-4 mt-4 mt-sm-0">
          <label htmlFor="">Scans</label>
          <Select
            name="scans"
            placeholder="Seleccione scans"
            classNamePrefix="select"
            isMulti={false}
            options={scans}
            onChange={(val) => setData({ ...data, scans: val.value })}
            styles={selectStyles}
          />
          {errors?.scans && (
            <span className="text-danger mt-2 d-block">{errors?.scans}</span>
          )}
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor="">Url Para ver el contenido</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            placeholder="ejemplo: https://animefenix.tv/revenger"
            onChange={(e) => setData({ ...data, urlContent: e.target.value })}
          />
          {errors?.url && (
            <span className="text-danger mt-2 d-block">
              {errors?.urlContent}
            </span>
          )}
        </div>
        <div className="col-6">
          <label htmlFor="">Dia de la semana que sale capitulo</label>
          <Select
            name="dia"
            placeholder="Seleccione dia"
            classNamePrefix="select"
            isMulti={false}
            options={dias}
            onChange={(val) => setData({ ...data, day: val.label })}
            styles={selectStyles}
          />
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
          {errors?.sinopsis && (
            <span className="text-danger mt-2 d-block">{errors?.sinopsis}</span>
          )}
        </div>
      </div>

      <div className="col mt-4">
        <button
          className="btn btn-primary w-25 d-flex justify-content-center gap-3"
          type="submit"
          disabled={loading && true}
        >
          Publicar
          {loading && (
            <div
              className="spinner-border"
              role="status"
              style={{ width: "22px", height: "22px" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};
