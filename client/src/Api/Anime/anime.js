import axios from "axios";

export const getAnimes = async () => {
  const response = await axios.get(`http://localhost:3000/animes`);
  return response;
};

export const getAnimeById = async (id) => {
  const response = await axios.get(`http://localhost:3000/anime/${id}`);
  return response;
};
