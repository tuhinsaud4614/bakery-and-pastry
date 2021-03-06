import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import adminAuthReducer from "./features/admin/auth/index.slice";
import adminProductReducer from "./features/admin/product/index.slice";
import searchReducer from "./features/search/index.slice";
import settingsReducer from "./features/settings/index.slice";
import usersAllProductsReducer from "./features/users/all-products/index.slice";
import usersSingleProductReducer from "./features/users/single-product/index.slice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    search: searchReducer,
    adminAuth: adminAuthReducer,
    adminProduct: adminProductReducer,
    usersAllProducts: usersAllProductsReducer,
    usersSingleProduct: usersSingleProductReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
