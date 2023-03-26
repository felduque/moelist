import axios from "./axios";
import { ContentType } from "../types";

export const search = async (
  type: string,
  demography: string,
  status: string,
  genres: string[]
) => {
  console.log(type, demography, status, genres, "holaaaaaaaa");
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/filter?type=${type}&demography=${demography}&status=${status}&genres=${genres}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const searchTitle = async (title: string) => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/filter/title?title=${title}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const getContentAndPaginate = async (page = 1, limit = 24) => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/pagination/?page=${page}&limit=${limit}`
  );

  return response;
};
