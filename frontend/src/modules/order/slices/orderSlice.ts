import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import * as OrderService from "../services/OrderService";
import { ordersData } from "../../../model/Order";

interface AccessLevelState {
  inProgress: boolean;
  error: any;
  actionType: string;
  data: ordersData[];
}

const initialState: AccessLevelState = {
  inProgress: false,
  error: null,
  actionType: "",
  data: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getAllOrderInProgress(state, action: PayloadAction) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
    },
    getAllOrderSuccess(state, action) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
      state.data = action.payload;
    },
    getAllOrderFailed(state, action) {
      state.inProgress = false;
      state.error = action.payload;
      state.actionType = action.type;
    },
  },
});

export const { getAllOrderInProgress, getAllOrderSuccess, getAllOrderFailed } =
  orderSlice.actions;

export default orderSlice.reducer;

export const getAllOrdersData = () => async (dispatch: Dispatch) => {
  dispatch(getAllOrderInProgress());
  try {
    const response = await OrderService.getAllOrders();
    console.log("Response data", response);
    const data = response?.data;
    dispatch(getAllOrderSuccess(data));
  } catch (error: any) {
    const errorDetails = error.response;
    dispatch(getAllOrderFailed(errorDetails));
  }
};
