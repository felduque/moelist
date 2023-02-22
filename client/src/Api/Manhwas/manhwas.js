import axios from "axios";

export const getManhwas = async () => {
  const response = await axios.get(`https://apix.moelist.online/manhwas`);
  return response;
};

export const getManhwasById = async (id) => {
  const response = await axios.get(`https://apix.moelist.online/manhwa/${id}`);
  return response;
};
