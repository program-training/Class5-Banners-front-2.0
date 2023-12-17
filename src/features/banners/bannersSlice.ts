import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BannerInterface } from "./interface/BannerInterface";
import {
  getBannersReq,
  addBannerReq,
  getMyBannersReq,
  deleteBannerReq,
  getUnbanneredProducts,
  getBannerByBannerIdReq,
} from "./service/bannerReqFromServer";
import { ProductInterface } from "./interface/ProductInterface";

interface InitialState {
  pending: boolean;
  bannersState: BannerInterface[] | null;
  bannersToDisplay: BannerInterface[] | null;
  specificBanner: BannerInterface | null;
  products: ProductInterface[] | null;
  error: string;
}

const initialState: InitialState = {
  pending: false,
  bannersState: null,
  bannersToDisplay: null,
  specificBanner: null,
  products: null,
  error: "",
};

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    setBannersToDisplay: (state, action: PayloadAction<BannerInterface[]>) => {
      if (!action.payload) state.bannersToDisplay = state.bannersState;
      state.bannersToDisplay = action.payload;
      return state;
    },
    setSpecificBanner: (state, action) => {
      state.specificBanner = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBannersReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getBannersReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.bannersToDisplay = payload;
      state.bannersState = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getBannersReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(addBannerReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(addBannerReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.bannersState?.push(payload[0]);
      state.error = "";
      return state;
    });
    builder.addCase(addBannerReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });

    builder.addCase(getMyBannersReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getMyBannersReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.bannersState = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getMyBannersReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(getBannerByBannerIdReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getBannerByBannerIdReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.specificBanner = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getBannerByBannerIdReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(deleteBannerReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(deleteBannerReq.fulfilled, (state) => {
      state.pending = false;
      state.error = "";
      return state;
    });
    builder.addCase(deleteBannerReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(getUnbanneredProducts.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getUnbanneredProducts.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.products = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getUnbanneredProducts.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
  },
});
export const { setBannersToDisplay: setBanners, setSpecificBanner } =
  bannersSlice.actions;
export default bannersSlice.reducer;
