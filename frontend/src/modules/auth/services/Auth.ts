import api from "../../../services/Instance";

export const login = (data: any) => {
  return api.post("/login", data);
};

export const signUp = (data: any) => {
  return api.post("/signup", data);
};
