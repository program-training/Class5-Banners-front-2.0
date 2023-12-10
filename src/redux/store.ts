import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/user-slice";
import bannersSlice from "../features/banners/bannersSlice";

const rootReducer = combineReducers({
  user: userReducer,
  banners: bannersSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
