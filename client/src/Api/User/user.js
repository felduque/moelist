import axios from "axios";

export const getUserById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/getuserid/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
