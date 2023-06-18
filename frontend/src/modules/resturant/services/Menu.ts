import api from "../../../services/Instance";

export const fetchMenu = (resturantId: number) => {
  return api.get(`/menu?resturant_id=${resturantId}`);
};

export const fetchMenuWithDishes = (resturantId: number) => {
  return api.get(`/menu/dish?resturant_id=${resturantId}`);
};
