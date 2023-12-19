export const API_CHECKOUT = "/users/checkout";
export const API_SIGN_UP = "/users/sign_up";
export const API_SIGN_IN = "/users/sign_in";
export const API_SIGN_OUT = "/users/sign_out";
export const API_GET_TODO = "/todos";
export const API_ADD_TODO = "/todos";
export const API_UPDATE_TODO = (id: string) => `/todos/${id}`;
export const API_TOGGLE_TODO = (id: string) => `/todos/${id}`;
export const API_DELETE_TODO = (id: string) => `/todos/${id}/toggle`;
