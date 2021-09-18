import { createSlice } from "@reduxjs/toolkit";
import { UserProductState } from "../..";
import { fetchUsersSingleProduct } from "./actions";

const initialState: UserProductState = {
  product: null,
  error: null,
  status: "idle",
};

const userAllProductsSlice = createSlice({
  name: "single-product",
  initialState: initialState,
  reducers: {
    removeProduct: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersSingleProduct.pending, (state) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.error = null;
        }
      })
      .addCase(fetchUsersSingleProduct.fulfilled, (state, action) => {
        if (state.status === "pending") {
          state.product = action.payload;
          state.status = "idle";
          state.error = null;
        }
      })
      .addCase(fetchUsersSingleProduct.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status = "idle";
          state.error = action.payload;
        }
      });
  },
});

export const { removeProduct } = userAllProductsSlice.actions;

export default userAllProductsSlice.reducer;
