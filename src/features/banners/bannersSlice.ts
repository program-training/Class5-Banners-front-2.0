import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BannerInterface } from "./interface/BannerInterface";

import { ProductInterface } from "./interface/ProductInterface";

interface InitialState {
  bannersState: BannerInterface[] | null;
  specificBanner: BannerInterface | null;
  products: ProductInterface[] | null;
}

const initialState: InitialState = {
  bannersState: null,
  specificBanner: null,
  products: null,
};

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    setBanners: (state, action: PayloadAction<BannerInterface[]>) => {
      state.bannersState = action.payload;
      return state;
    },
    setSpecificBanner: (state, action) => {
      state.specificBanner = action.payload;
      return state;
    },
  },
});
export const { setBanners, setSpecificBanner } = bannersSlice.actions;
export default bannersSlice.reducer;
