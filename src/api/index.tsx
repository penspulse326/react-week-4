import axios from "axios";
import { API_SIGN_UP } from "./API_PATH";
axios.defaults.baseURL = "https://todolist-api.hexschool.io";

export const apiSignUp = async (data: SignUpDataType) => {
  try {
    const response = await axios.post(API_SIGN_UP, data);
    if (!response.data.status) {
      return response.data.message;
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const apiSignIn = async (data: SignInDataType) => {
  try {
    const response = await axios.post(API_SIGN_UP, data);
    if (!response.data.status) {
      return response.data.message;
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

type SignUpDataType = {
  email: RegExp;
  password: string;
  nickname: string;
};

type SignInDataType = {
  email: RegExp;
  password: string;
};
