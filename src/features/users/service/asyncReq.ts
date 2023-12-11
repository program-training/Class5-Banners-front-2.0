import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/apolloApi";
import { UserInterface } from "../interfaces/userInterface";
import {
  LoginInterface,
  SignUpInterface,
} from "../interfaces/userSliceInterfaces";
import { LOGIN, SIGNUP, DELETE_USER, GET_USER, UPDATE_USER } from "./queries";

export const loginReq = createAsyncThunk(
  "user/loginReq",
  async (userFromClient: LoginInterface) => {
    try {
      const { data } = await client.query({
        query: LOGIN,
        variables: { user: { ...userFromClient } },
      });
      return data.loginService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const signUpReq = createAsyncThunk(
  "user/signUpReq",
  async (userFromClient: SignUpInterface) => {
    try {
      const { data: user } = await client.mutate({
        mutation: SIGNUP,
        variables: { user: { ...userFromClient } },
      });
      return user.signup;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const deleteUserReq = createAsyncThunk(
  "user/deleteUserReq",
  async () => {
    try {
      const { data: deletedUser } = await client.mutate({
        mutation: DELETE_USER,
      });
      return deletedUser;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getUserReq = createAsyncThunk("user/getUserReq", async () => {
  try {
    const { data: user } = await client.query({ query: GET_USER });
    return user.getUserService[0];
  } catch (error) {
    return Promise.reject(error);
  }
});

export const editUserReq = createAsyncThunk(
  "user/editUserReq",
  async (editedUser: Partial<UserInterface>) => {
    try {
      const { data } = await client.mutate({
        mutation: UPDATE_USER,
        variables: { user: { ...editedUser } },
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
