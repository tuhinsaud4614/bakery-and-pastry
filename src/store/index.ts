import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import adminProductReducer from "./features/admin/product/index.slice";
import searchReducer from "./features/search/index.slice";
import settingsReducer from "./features/settings/index.slice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    search: searchReducer,
    adminProduct: adminProductReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
