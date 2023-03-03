export const validatePublication = (values) => {
  let errors = {};
  const requerido = "Este campo es requirido";

  if (!values.image) {
    errors.image = requerido;
  }

  if (!values.titulo.trim()) {
    errors.titulo = requerido;
  }

  if (values.capitulos <= 0) {
    errors.capitulos = "Agrega un valor valido";
  }

  if (values.volumenes <= 0 && values.tipo !== "2") {
    errors.volumenes = requerido;
  }

  if (!values.estreno) {
    errors.estreno = requerido;
  }

  if (!values.source && values.tipo === "2") {
    errors.source = requerido;
  }

  if (!values.duracion.trim() && values.tipo === "2") {
    errors.duracion = requerido;
  }

  if (!values.temporada.trim()) {
    errors.temporada = requerido;
  }

  if (!values.autor.trim()) {
    errors.autor = requerido;
  }

  if (!values.artista.trim()) {
    errors.artista = requerido;
  }

  if (!values.estudio.trim() && values.tipo === "2") {
    errors.estudio = requerido;
  }

  if (values.producers.length === 0 && values.tipo === "2") {
    errors.producers = "Debe tener al menos una productora";
  }

  if (values.generos.length === 0) {
    errors.generos = "Debe tener al menos un genero";
  }

  if (values.scans.length === 0) {
    errors.scans = "Debe tener al menos un scan asignado";
  }

  if (!values.sinopsis.trim()) {
    errors.sinopsis = requerido;
  }
  return errors;
};
