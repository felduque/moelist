import axios from "axios";
import { ContentType } from "../types";

export const getManhuas = async () => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/manhuas`
  );
  return response;
};

export const getManhuasById = async (id: string) => {
  const response = await axios.get<ContentType>(
    `http://localhost:3000/manhua/${id}`
  );
  return response;
};

export const updateManhua = async (id: string, manhua: ContentType) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `http://localhost:3000/manhua/${id}`,
    manhua,
    {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": token,
      },
    }
  );
  return response;
};

export const lastManhua = async () => {
  const response = await axios.get<ContentType[]>(
    `http://localhost:3000/lastmanhuas`
  );
  return response;
};

export const createManhua = async (manhua: ContentType) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`http://localhost:3000/manhua`, manhua, {
    headers: {
      "x-auth-token": token,
    },
  });
  return response;
};
