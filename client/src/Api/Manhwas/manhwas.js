import axios from "axios";

export const getManhwas = async () => {
  const response = await axios.get(`http://localhost:3000/manhwas`);
  return response;
};

export const getManhwasById = async (id) => {
  const response = await axios.get(`http://localhost:3000/manhwa/${id}`);
  return response;
};

export const updateManhwa = async (id, manhwa) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `http://localhost:3000/manhwa/${id}`,
    manhwa,
    {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": token,
      },
    }
  );
  return response;
};

export const createManhwa = async (manhwa) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`http://localhost:3000/manhwa`, manhwa, {
    headers: {
      "x-auth-token": token,
    },
  });
  return response;
};
