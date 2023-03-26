import axios from "axios";
import { ContentType, CreatePublicationParams } from "../types";

export const getMangas = async () => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/mangas`
  );
  return response;
};

export const getMangasById = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/manga/${id}`);
  return response;
};

export const updateManga = async (
  id: number,
  img: File | string,
  manga?: ContentType
) => {
  if (typeof img === "string") return;
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `http://localhost:3000/manga/${id}`,
    {
      image: img,
    },
    {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": token,
      },
    }
  );
  return response;
};

export const lastManga = async () => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/lastmangas`
  );
  return response;
};

export const createManga = async (manga: CreatePublicationParams) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`http://localhost:3000/manga`, manga, {
    headers: {
      "x-auth-token": token,
    },
  });
  return response;
};
