export const validatePublication = (values) => {
  let errors = {};
  const requerido = "Este campo es requirido";

  if (!values.titulo) {
    errors.titulo = requerido;
  }

  if (!values.demografia) {
    errors.demografia = requerido;
  }

  if (!values.tipo) {
    errors.tipo = requerido;
  }

  if (!values.image) {
    errors.image = requerido;
  }

  if (values.capitulos <= 0) {
    errors.capitulos = "Agrega un valor valido";
  }

  if (values.volumenes <= 0 && values.tipo !== "Anime") {
    errors.volumenes = requerido;
  }

  if (!values.estreno && values.tipo === "Anime") {
    errors.estreno = requerido;
  }

  if (!values.source && values.tipo === "Anime") {
    errors.source = requerido;
  }

  if (!values.duracion.trim() && values.tipo === "Anime") {
    errors.duracion = requerido;
  }

  if (!values.temporada.trim() && values.tipo === "Anime") {
    errors.temporada = requerido;
  }

  if (values.tipo !== "Anime") {
    if (values.artista.length === 0) {
      errors.artista = requerido;
    }

    if (values.autor.length === 0) {
      errors.autor = requerido;
    }
  }

  if (values.tipo === "Anime" && !values.autor.trim()) {
    errors.autor = requerido;
  }

  if (!values.artista && values.tipo === "Anime") {
    errors.artista = requerido;
  }

  if (!values.estado) {
    errors.estado = requerido;
  }

  if (values.estudio.length === 0 && values.tipo === "Anime") {
    errors.estudio = requerido;
  }

  if (values.producers.length === 0 && values.tipo === "Anime") {
    errors.producers = "Debe tener al menos una productora";
  }

  if (values.generos.length === 0) {
    errors.generos = "Debe tener al menos un genero";
  }

  if (values.scans.length === 0) {
    errors.scans = "Debe tener al menos un scan asignado";
  }

  if (!values.day) {
    errors.day = requerido;
  }

  if (!values.sinopsis.trim()) {
    errors.sinopsis = requerido;
  }

  if (!values.urlContent.trim()) {
    errors.urlContent = requerido;
  }

  return errors;
};
