import axios from "axios";

export const getManhuas = async () => {
  const response = await axios.get(`https://apix.moelist.online/manhuas`);
  return response;
};

export const getManhuasById = async (id) => {
  const response = await axios.get(`https://apix.moelist.online/manhua/${id}`);
  return response;
};
