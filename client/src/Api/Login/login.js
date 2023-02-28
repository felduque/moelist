import axios from "axios";

export const loginUser = async (user) => {
  try {
    const res = await axios.post("http://localhost:3000/login", user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
