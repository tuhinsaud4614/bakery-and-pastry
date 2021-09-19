import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../..";
import { adminAuth, adminAuthOut } from "./actions";

const initialState: UserState = {
  user: null,
  error: null,
  status: "idle",
};

const adminAuthSlice = createSlice({
  name: "admin-auth",
  initialState: initialState,
  reducers: {
    clearAuthError(state) {
      state.error = null;
      state.status = "idle";
    },

    autoAuthentication(state) {
      const localData = localStorage.getItem("user");
      if (localData) {
        const user = JSON.parse(localData);
        if (
          user &&
          "email" in user &&
          "token" in user &&
          "refreshToken" in user &&
          "expireTime" in user
        ) {
          state.user = user;
          state.error = null;
          state.status = "idle";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminAuth.pending, (state) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.error = null;
        }
      })
      .addCase(adminAuth.fulfilled, (state, action) => {
        if (state.status === "pending") {
          state.user = action.payload;
          state.status = "idle";
          state.error = null;
        }
      })
      .addCase(adminAuth.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status = "idle";
          state.error = action.payload;
        }
      })
      //   Logout
      .addCase(adminAuthOut.pending, (state) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.error = null;
        }
      })
      .addCase(adminAuthOut.fulfilled, (state, action) => {
        if (state.status === "pending") {
          state.user = action.payload;
          state.status = "idle";
          state.error = null;
        }
      })
      .addCase(adminAuthOut.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status = "idle";
          state.error = action.payload;
        }
      });
  },
});

export const { autoAuthentication, clearAuthError } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
