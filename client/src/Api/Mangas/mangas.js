import axios from "axios";

export const getMangas = async () => {
  const response = await axios.get(`https://apix.moelist.online/mangas`);
  return response;
};

export const getMangasById = async (id) => {
  const response = await axios.get(`https://apix.moelist.online/manga/${id}`);
  return response;
};
