import axios from "axios";

export const registerUser = async (user) => {
  try {
    const res = await axios.post("http://localhost:3000/register", user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
