import { createSlice } from "@reduxjs/toolkit";
import { getUser, removeToken, setItem } from "./service/localStorageService";
import { UserInterface } from "./interfaces/userInterface";

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
      return state;
    },
  },
});

export const { logOut, logIn } = userSlice.actions;
export default userSlice.reducer;
