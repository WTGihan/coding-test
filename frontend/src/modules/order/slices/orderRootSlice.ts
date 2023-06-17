import { combineReducers } from "@reduxjs/toolkit";

import orderReducer from "./orderSlice";

const orderRootReducers = combineReducers({
  order: orderReducer,
});

export default orderRootReducers;
