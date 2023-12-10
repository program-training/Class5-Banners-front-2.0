import { createAsyncThunk } from "@reduxjs/toolkit";
import { BannerInterface } from "../interface/BannerInterface";
import {
  GET_ALL_BANNERS,
  GET_BANNER_BY_BANNER_ID,
  GET_BANNER_BY_ID,
  GET_UNBANNERED_PRODUCTS,
} from "./GraphQl/queries";
import client from "../../../apollo/apolloApi";
import { ApolloError } from "@apollo/client";
import { ADD_BANNER, DELETE_BANNER, UPDATE_BANNER } from "./GraphQl/mutations";

// const URL = `${import.meta.env.VITE_BASE_URL}/banners`;

export const getBannersReq = createAsyncThunk(
  "banners/getBannersReq",
  async () => {
    try {
      const { data } = await client.query({
        query: GET_ALL_BANNERS,
      });
      return data.getAllBannersQuery;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

// export const addBannerReq = createAsyncThunk(
//     "banners/addBannerReq",
//     async (newBanner: Partial<BannerInterface>, thunkAPI) => {
//         try {
//             const { data: banner } = await axios.post(URL, newBanner);
//             return banner;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const addBannerReq = createAsyncThunk(
  "banners/addBannerReq",
  async (newBanner: Partial<BannerInterface>, thunkAPI) => {
    try {
      const { data: banner } = await client.mutate({
        mutation: ADD_BANNER,
        variables: { newBanner },
      });
      return banner.addBanner;
    } catch (error) {
      if (error instanceof ApolloError) {
        return thunkAPI.rejectWithValue({ error: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          error: "An unknown error occurred",
        });
      }
    }
  }
);

// export const getMyBannersReq = createAsyncThunk(
//     "banners/getMyBannersReq",
//     async (_, thunkAPI) => {
//         try {
//             const { data: banner } = await axios.get(`${URL}/myBanners/`);
//             return banner;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const getMyBannersReq = createAsyncThunk(
  "banners/getMyBannersReq",
  async (_, thunkAPI) => {
    try {
      const { data } = await client.query({
        query: GET_BANNER_BY_ID,
      });
      return data.getBannerByUserIdQuery;
    } catch (error) {
      if (error instanceof ApolloError) {
        return thunkAPI.rejectWithValue({ error: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          error: "An unknown error occurred",
        });
      }
    }
  }
);

// export const getBannerByIdReq = createAsyncThunk(
//     "banners/getBannerByIdReq",
//     async (id: string, thunkAPI) => {
//         try {
//             const { data: banner } = await axios.get(`${URL}/${id}`);
//             if (banner.length) return banner[0];
//             return banner;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const getBannerByIdReq = createAsyncThunk(
  "banners/getBannerByIdReq",
  async (bannerId: string) => {
    try {
      const { data } = await client.query({
        query: GET_BANNER_BY_BANNER_ID,
        variables: { bannerId },
      });
      return data.getBannerByBannerIDQuery;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

// export const editBannerReq = createAsyncThunk(
//     "banners/editBannerReq",
//     async (editedBanner: BannerInterface, thunkAPI) => {
//         try {
//             const { _id } = editedBanner;
//             const { data: banner } = await axios.put(
//                 `${URL}/${_id}`,
//                 editedBanner
//             );
//             return banner;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const editBannerReq = createAsyncThunk(
  "banners/editBannerReq",
  async ({ _id, ...editedBanner }: BannerInterface, thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: UPDATE_BANNER,
        variables: { bannerId: _id, editedBanner },
      });
      return data.updateBannerQuery;
    } catch (error) {
      if (error instanceof ApolloError) {
        return thunkAPI.rejectWithValue({ error: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          error: "An unknown error occurred",
        });
      }
    }
  }
);

// export const deleteBannerReq = createAsyncThunk(
//     "banners/editBannerReq",
//     async (bannerId: string, thunkAPI) => {
//         try {
//             const { data: banner } = await axios.delete(`${URL}/${bannerId}`);
//             return banner;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const deleteBannerReq = createAsyncThunk(
  "banners/deleteBannerReq",
  async (bannerId: string, thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: DELETE_BANNER,
        variables: { bannerId },
      });
      return data.deleteBannerQuery;
    } catch (error) {
      if (error instanceof ApolloError) {
        return thunkAPI.rejectWithValue({ error: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          error: "An unknown error occurred",
        });
      }
    }
  }
);

// export const getUnbannerdProducts = createAsyncThunk(
//     "banners/getUnbannerdProducts",
//     async (_, thunkAPI) => {
//         try {
//             const { data: products } = await axios.get(`${URL}/products`);
//             return products;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const getUnbanneredProducts = createAsyncThunk(
  "banners/getUnbannedProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await client.query({
        query: GET_UNBANNERED_PRODUCTS,
      });
      return data.getUnbanneredProducts;
    } catch (error) {
      if (error instanceof ApolloError) {
        return thunkAPI.rejectWithValue({ error: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          error: "An unknown error occurred",
        });
      }
    }
  }
);
