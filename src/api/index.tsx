import axios from "axios";
export const API_CHECKOUT = "/users/checkout";
export const API_GET_TODO = "/todos";
export const API_ADD_TODO = "/todos";
export const API_UPDATE_TODO = (id: string) => `/todos/${id}`;
export const API_TOGGLE_TODO = (id: string) => `/todos/${id}`;
export const API_DELETE_TODO = (id: string) => `/todos/${id}/toggle`;

const todoAPI = axios.create({
  baseURL: "https://todolist-api.hexschool.io",
});

export const apiSignUp = async (data: SignUpDataType) => {
  try {
    const res = await todoAPI.post("/users/sign_up", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiSignIn = async (data: SignInDataType) => {
  try {
    const res = await todoAPI.post("/users/sign_in", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiSignOut = async (token: string) => {
  const config = { headers: { Authorization: token } };

  try {
    const res = await todoAPI.post("/users/sign_out", {}, config);
    return res.data;
  } catch (error) {
    console.log(error);
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
