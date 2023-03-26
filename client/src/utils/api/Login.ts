import axios from "./axios";
import { LoginParams, LoginResp } from "../types";

export const loginUser = async (user: LoginParams) => {
  try {
    const res = await axios.post<LoginResp>(
      "http://localhost:3000/login",
      user
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
