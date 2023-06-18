import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";

const authRootReducers = combineReducers({
  auth: authReducer,
});

export default authRootReducers;
