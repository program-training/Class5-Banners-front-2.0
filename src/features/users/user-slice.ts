import { createSlice } from "@reduxjs/toolkit";
import {
  getToken,
  getUser,
  removeToken,
  setItem,
} from "./service/localStorageService";
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
      state.error = "";
      state.loading = true;
      return state;
    }),
      builder.addCase(loginReq.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = "";
        if (payload) {
          state.token = payload;
          setItem("token", payload);
          state.userState = getUser();
        }
        return state;
      }),
      builder.addCase(loginReq.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || "";
        return state;
      });
    builder.addCase(signUpReq.pending, (state) => {
      state.error = "";
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
        state.error = error.message || "";
        return state;
      });
    builder.addCase(deleteUserReq.pending, (state) => {
      state.error = "";
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
      state.error = error.message || "";
      return state;
    });
    builder.addCase(getUserReq.pending, (state) => {
      state.error = "";
      state.loading = true;
      return state;
    });
    builder.addCase(getUserReq.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.userState = payload;
      return state;
    });
    builder.addCase(getUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(editUserReq.pending, (state) => {
      state.error = "";
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
      state.error = error.message || "";
      return state;
    });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
