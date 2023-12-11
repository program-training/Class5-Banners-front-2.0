import { createAsyncThunk } from "@reduxjs/toolkit";
import { BannerInterface } from "../interface/BannerInterface";
import {
  GET_ALL_BANNERS,
  GET_BANNER_BY_BANNER_ID,
  GET_BANNER_BY_PRODUCT_ID,
  GET_UNBANNERED_PRODUCTS,
  GET_USER_BANNERS,
} from "./GraphQl/queries";
import client from "../../../apollo/apolloApi";
import { ADD_BANNER, DELETE_BANNER, UPDATE_BANNER } from "./GraphQl/mutations";

export const getBannersReq = createAsyncThunk(
  "banners/getBannersReq",
  async () => {
    try {
      const { data } = await client.query({
        query: GET_ALL_BANNERS,
      });
      return data.getAllBannersService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addBannerReq = createAsyncThunk(
  "banners/addBannerReq",
  async (newBanner: Partial<BannerInterface>) => {
    try {
      const { data: banner } = await client.mutate({
        mutation: ADD_BANNER,
        variables: { newBanner },
      });
      return banner.addBannerService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getMyBannersReq = createAsyncThunk(
  "banners/getMyBannersReq",
  async () => {
    try {
      const { data } = await client.query({
        query: GET_USER_BANNERS,
      });
      return data.getBannerByUserService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getBannerByProdIdReq = createAsyncThunk(
  "banners/getBannerByIdReq",
  async (productId: string) => {
    try {
      const { data } = await client.query({
        query: GET_BANNER_BY_PRODUCT_ID,
        variables: { productId },
      });
      return data.getBannerByProdIDService[0];
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const getBannerByBannerIdReq = createAsyncThunk(
  "banners/getBannerByIdReq",
  async (bannerId: string) => {
    try {
      const { data } = await client.query({
        query: GET_BANNER_BY_BANNER_ID,
        variables: { bannerId },
      });
      return data.getBannerByBannerIDService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const editBannerReq = createAsyncThunk(
  "banners/editBannerReq",
  async (banner: BannerInterface) => {
    try {
      const { data } = await client.mutate({
        mutation: UPDATE_BANNER,
        variables: { bannerId: banner._id, properties: { ...banner } },
      });
      return data.updateBannerService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const deleteBannerReq = createAsyncThunk(
  "banners/deleteBannerReq",
  async (bannerId: string) => {
    try {
      const { data } = await client.mutate({
        mutation: DELETE_BANNER,
        variables: { bannerId },
      });
      return data.deleteBannerService;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getUnbanneredProducts = createAsyncThunk(
  "banners/getUnbannedProducts",
  async () => {
    try {
      const { data } = await client.query({
        query: GET_UNBANNERED_PRODUCTS,
      });

      return data.getProductForBanners;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
