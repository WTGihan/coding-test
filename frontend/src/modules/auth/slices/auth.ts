import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import * as AuthService from "../services/Auth";
import TokenService from "../../../services/Token";

interface AuthState {
  inProgress: boolean;
  error: any;
  actionType: string;
  user: any;
}

const initialState: AuthState = {
  inProgress: false,
  error: null,
  actionType: "",
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginInProgress(state, action: PayloadAction) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
    },
    loginSuccess(state, action) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.inProgress = false;
      state.error = action.payload;
      state.actionType = action.type;
    },
    signUpInProgress(state, action: PayloadAction) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
    },
    signUpSuccess(state, action) {
      state.inProgress = false;
      state.error = null;
      state.actionType = action.type;
    },
    signUpFailed(state, action) {
      state.inProgress = false;
      state.error = action.payload;
      state.actionType = action.type;
    },
  },
});

export const {
  loginInProgress,
  loginSuccess,
  loginFailed,
  signUpInProgress,
  signUpSuccess,
  signUpFailed,
} = authSlice.actions;

export default authSlice.reducer;

export const login = (userData: any) => async (dispatch: Dispatch) => {
  dispatch(loginInProgress());
  try {
    const response = await AuthService.login(userData);
    const data = response?.data;
    TokenService.setUser(data);
    const responseUserData: any = {
      id: data?.id,
      email: data?.email,
      username: data?.username,
    };
    dispatch(loginSuccess(responseUserData));
  } catch (error: any) {
    const errorDetails = error.response;
    dispatch(loginFailed(errorDetails));
  }
};

export const signUp = (userData: any) => async (dispatch: Dispatch) => {
  dispatch(signUpInProgress());
  try {
    const response = await AuthService.signUp(userData);
    const data = response?.data;
    const responseUserData: any = {
      id: data?.id,
      email: data?.email,
      username: data?.username,
    };
    TokenService.setUser(data);
    dispatch(signUpSuccess(responseUserData));
  } catch (error: any) {
    const errorDetails = error.response;
    dispatch(signUpFailed(errorDetails));
  }
};
