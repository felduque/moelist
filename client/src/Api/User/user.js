import axios from "axios";

export const getUserById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/getuserid/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, data) => {
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

export const deleteFavorite = async (type, idContent, idUser) => {
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

export const getFavorites = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/getfavorites/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = async (type, idContent, idUser) => {
  try {
    const res = await axios.post(`http://localhost:3000/addfavorite`, {
      type,
      idContent,
      idUser,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
