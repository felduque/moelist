import axios from "axios";

export const getManhuas = async () => {
  const response = await axios.get(`http://localhost:3000/manhuas`);
  return response;
};

export const getManhuasById = async (id) => {
  const response = await axios.get(`http://localhost:3000/manhua/${id}`);
  return response;
};
