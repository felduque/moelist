import axios from "axios";

export const getMangas = async () => {
  const response = await axios.get(`http://localhost:3000/mangas`);
  return response;
};

export const getMangasById = async (id) => {
  const response = await axios.get(`http://localhost:3000/manga/${id}`);
  return response;
};
