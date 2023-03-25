import axios from "axios";
import { RegisterParams } from "../types";

export const registerUser = async (user: RegisterParams) => {
  try {
    const res = await axios.post("http://localhost:3000/register", user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
