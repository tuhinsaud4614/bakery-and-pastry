import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../..";

const initialState: {
  user: null | IUser;
  status: "idle" | "pending" | "complete";
} = {
  user: null,
  status: "idle",
};

const adminAuthSlice = createSlice({
  name: "admin-auth",
  initialState: initialState,
  reducers: {
    authStateChanged(
      state,
      action: PayloadAction<{
        user: null | IUser;
        loading: "idle" | "pending" | "complete";
      }>
    ) {
      if (action.payload.loading === "pending") {
        state.user = null;
        state.status = "pending";
      } else if (action.payload.loading === "complete") {
        state.user = action.payload.user;
        state.status = "complete";
      }
    },
  },
});

export const { authStateChanged } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
