import { createSlice } from "@reduxjs/toolkit";
import { getToken, getUser, removeToken } from "./service/localStorageService";
import { UserInterface } from "./interfaces/userInterface";
import client from "../../apollo/apolloApi";
import {
  loginReq,
  signUpReq,
  deleteUserReq,
  getUserReq,
  editUserReq,
} from "./service/asyncReq";

interface initialState {
  loading: boolean;
  userState: UserInterface | null;
  token: string | null;
  error: string;
}
const initialState: initialState = {
  error: "",
  loading: false,
  token: getToken(),
  userState: getUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      client.clearStore();
      state.userState = null;
      state.token = null;
      removeToken();
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginReq.pending, (state) => {
      state.loading = true;
      return state;
    }),
      builder.addCase(loginReq.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = "";
        if (payload) {
          state.token = payload;
          localStorage.setItem("token", payload);
          state.userState = getUser();
        }
        return state;
      }),
      builder.addCase(loginReq.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.error.message as string;
        return state;
      });
    builder.addCase(signUpReq.pending, (state) => {
      state.loading = true;
      return state;
    }),
      builder.addCase(signUpReq.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
        return state;
      }),
      builder.addCase(signUpReq.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
        return state;
      });
    builder.addCase(deleteUserReq.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(deleteUserReq.fulfilled, (state) => {
      client.clearStore();
      removeToken();
      state.error = "";
      state.loading = false;
      state.token = null;
      state.userState = null;
      return state;
    });
    builder.addCase(deleteUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message as string;
      return state;
    });
    builder.addCase(getUserReq.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(getUserReq.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.userState = payload.getUserService[0];
      return state;
    });
    builder.addCase(getUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error as string;
      return state;
    });
    builder.addCase(editUserReq.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(editUserReq.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.userState = payload;
      return state;
    });
    builder.addCase(editUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message as string;
      return state;
    });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
