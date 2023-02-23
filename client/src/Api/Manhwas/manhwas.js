import axios from "axios";

export const getManhwas = async () => {
  const response = await axios.get(`http://localhost:3000/manhwas`);
  return response;
};

export const getManhwasById = async (id) => {
  const response = await axios.get(`http://localhost:3000/manhwa/${id}`);
  return response;
};
