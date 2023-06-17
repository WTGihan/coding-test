import axios from "axios";

const baseAPI = "/";

export const getAllOrders = () => {
  return axios.get(`${baseAPI}/access_levels`);
};
