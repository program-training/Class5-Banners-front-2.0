import { createSlice } from "@reduxjs/toolkit";
import { getUser, removeToken, setItem } from "./service/localStorageService";
import { UserInterface } from "./interfaces/userInterface";
import client from "../../apollo/apolloApi";

interface initialState {
  userState: UserInterface | null;
}
const initialState: initialState = {
  userState: getUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      setItem("token", action.payload);
      state.userState = getUser();
      return state;
    },
    logOut: (state) => {
      state.userState = null;
      removeToken();
      client.clearStore();
      return state;
    },
  },
});

export const { logOut, logIn } = userSlice.actions;
export default userSlice.reducer;
