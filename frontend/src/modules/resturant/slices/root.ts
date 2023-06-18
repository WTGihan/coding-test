import { combineReducers } from "@reduxjs/toolkit";

import menuReducer from "./menu";

const resturantRootReducers = combineReducers({
  menu: menuReducer,
});

export default resturantRootReducers;
