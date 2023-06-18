import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import * as MenuService from "../services/Menu";

interface AccessLevelState {
  inProgress: boolean;
  error: any;
  actionType: string;
  menu: any[];
  menuWithDishes: any[];
}

const initialState: AccessLevelState = {
  inProgress: false,
  error: null,
  actionType: "",
  menu: [],
  menuWithDishes: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getAllMenuInProgress(state, action: PayloadAction) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
    },
    getAllMenuSuccess(state, action) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
      state.menu = action.payload;
    },
    getAllMenuFailed(state, action) {
      state.inProgress = false;
      state.error = action.payload;
      state.actionType = action.type;
    },
    getAllMenuWithDishesInProgress(state, action: PayloadAction) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
    },
    getAllMenuWithDishesSuccess(state, action) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
      state.menuWithDishes = action.payload;
    },
    getAllMenuWithDishesFailed(state, action) {
      state.inProgress = false;
      state.error = action.payload;
      state.actionType = action.type;
    },
  },
});

export const {
  getAllMenuInProgress,
  getAllMenuSuccess,
  getAllMenuFailed,
  getAllMenuWithDishesInProgress,
  getAllMenuWithDishesSuccess,
  getAllMenuWithDishesFailed,
} = menuSlice.actions;

export default menuSlice.reducer;

export const getAllMenu = () => async (dispatch: Dispatch) => {
  dispatch(getAllMenuInProgress());
  try {
    const response = await MenuService.fetchMenu(1);
    const data = response?.data;
    dispatch(getAllMenuSuccess(data));
  } catch (error: any) {
    const errorDetails = error.response;
    dispatch(getAllMenuFailed(errorDetails));
  }
};

export const getAllMenuWithDishes = () => async (dispatch: Dispatch) => {
  dispatch(getAllMenuWithDishesInProgress());
  try {
    const response = await MenuService.fetchMenuWithDishes(1);
    const data = response?.data;
    dispatch(getAllMenuWithDishesSuccess(data));
  } catch (error: any) {
    const errorDetails = error.response;
    dispatch(getAllMenuWithDishesFailed(errorDetails));
  }
};
