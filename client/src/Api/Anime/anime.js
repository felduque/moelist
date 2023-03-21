import axios from "axios";

export const getAnimes = async () => {
  const response = await axios.get(`http://localhost:3000/animes`);
  return response;
};

export const getAnimeById = async (id) => {
  const response = await axios.get(`http://localhost:3000/anime/${id}`);
  return response;
};

export const createAnime = async (anime) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const response = await axios.post(`http://localhost:3000/anime`, anime, {
    // se envia token
    headers: {
      "x-auth-token": token,
    },
  });
  return response;
};

export const lastAnime = async () => {
  const response = await axios.get(`http://localhost:3000/lastanime`);
  return response;
};

export const updateAnime = async (id, anime) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `http://localhost:3000/anime/${id}`,
    anime,
    {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": token,
      },
    }
  );
  return response;
};
