import { ContentType } from "@/utils/types";
import axios from "axios";

export const getAnimes = async () => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/animes`
  );
  return response;
};

export const getAnimeById = async (id: string) => {
  const response = await axios.get<ContentType>(
    `http://localhost:3000/anime/${id}`
  );
  return response;
};

export const createAnime = async (anime: ContentType) => {
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
  try {
    const response = await axios.get<ContentType[]>(
      `http://localhost:3000/lastanime`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateAnime = async (id: string, anime: ContentType) => {
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