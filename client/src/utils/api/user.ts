import axios from "axios";
import { ContentType, EditUserParams, GetUserResponseType } from "../types";

export const getUserById = async (id: string) => {
  try {
    const res = await axios.get<GetUserResponseType>(
      `http://localhost:3000/getuserid/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id: string, data: EditUserParams) => {
  console.log(data, id);
  try {
    const token = localStorage.getItem("token");
    const res = await axios.patch(
      `http://localhost:3000/updateuser/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavorite = async (
  type: string,
  idContent: string,
  idUser: string
) => {
  try {
    const res = await axios.delete("http://localhost:3000/deletefavorite/", {
      data: {
        type,
        idContent,
        idUser,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getFavorites = async (id: string) => {
  try {
    const res = await axios.get<ContentType[]>(
      `http://localhost:3000/getfavorites/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = async (
  type: string,
  idContent: string,
  idUser: string
) => {
  try {
    const res = await axios.post<ContentType>(
      `http://localhost:3000/addfavorite`,
      {
        type,
        idContent,
        idUser,
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
