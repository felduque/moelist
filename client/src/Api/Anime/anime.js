import axios from "axios";

export const getAnimes = async () => {
  const response = await axios.get(`https://apix.moelist.online/animes`);
  return response;
};

export const getAnimeById = async (id) => {
  const response = await axios.get(`https://apix.moelist.online/anime/${id}`);
  return response;
};
