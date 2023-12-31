import axios from "axios";
import { getToken } from "../../features/users/service/localStorageService";
import { Action } from "@reduxjs/toolkit";
import { Dispatch } from "react";

const axiosInterceptors =
  () => (next: Dispatch<Action>) => (action: Action) => {
    const token = getToken();
    axios.defaults.headers.common["Authorization"] = token;
    axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    });
    return next(action);
  };

export default axiosInterceptors;
