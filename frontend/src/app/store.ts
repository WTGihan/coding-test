import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import OrderRootReducer from "../modules/order/slices/orderRootSlice";

export const store = configureStore({
  reducer: {
    order: OrderRootReducer,
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
