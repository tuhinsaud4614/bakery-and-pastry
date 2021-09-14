import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addAdminProduct,
  deleteAdminProduct,
  fetchAdminProducts,
} from "./actions";
import { AdminProductsActionKeysType, AdminProductsState } from "./types";

const initialState: AdminProductsState = {
  products: [],
  error: {
    adding: null,
    deleting: null,
    fetching: null,
    updating: null,
  },
  status: {
    adding: "idle",
    deleting: "idle",
    fetching: "idle",
    updating: "idle",
  },
};

const adminProductSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    clearAdminProductError: (
      state,
      { payload }: PayloadAction<AdminProductsActionKeysType>
    ) => {
      state.error[payload] = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProducts.pending, (state) => {
        if (state.status.fetching === "idle") {
          state.status.fetching = "pending";
          state.error.fetching = null;
        }
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        if (state.status.fetching === "pending") {
          state.products = action.payload;
          state.status.fetching = "idle";
          state.error.fetching = null;
        }
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status.fetching = "idle";
          state.error.fetching = action.payload;
        }
      })
      // add product data
      .addCase(addAdminProduct.pending, (state) => {
        if (state.status.adding === "idle") {
          state.status.adding = "pending";
          state.error.adding = null;
        }
      })
      .addCase(addAdminProduct.fulfilled, (state, action) => {
        if (state.status.adding === "pending") {
          state.status.adding = "idle";
          state.error.adding = null;
          state.products = [action.payload, ...state.products];
        }
      })
      .addCase(addAdminProduct.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status.adding = "idle";
          state.error.adding = action.payload;
        }
      })
      // delete product data
      .addCase(deleteAdminProduct.pending, (state) => {
        if (state.status.deleting === "idle") {
          state.status.deleting = "pending";
          state.error.deleting = null;
        }
      })
      .addCase(deleteAdminProduct.fulfilled, (state, action) => {
        if (state.status.deleting === "pending") {
          state.status.deleting = "idle";
          state.error.deleting = null;
          state.products = state.products.filter(
            (product) => product.id !== action.payload
          );
        }
      })
      .addCase(deleteAdminProduct.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status.deleting = "idle";
          state.error.deleting = action.payload;
        }
      });
  },
});

export const { clearAdminProductError } = adminProductSlice.actions;

export default adminProductSlice.reducer;
