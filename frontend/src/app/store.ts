import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ResturantRootReducer from "../modules/resturant/slices/root";
import AuthRootReducer from "../modules/auth/slices/root";

export const store = configureStore({
  reducer: {
    resturant: ResturantRootReducer,
    auth: AuthRootReducer,
  },
  devTools: process.env.REACT_APP_STAGE === "dev",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
