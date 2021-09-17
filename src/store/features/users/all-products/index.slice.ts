import { createSlice } from "@reduxjs/toolkit";
import { UserProductsState } from "../..";
import { fetchUsersAllProducts } from "./actions";

// const initialState: UserProductsState = {
//   products: initData,
//   categorizedProducts: {
//     "pastry-cup-pastry-tart": initData,
//     "biscuits-toast": initData,
//     cake: initData,
//     others: initData,
//     sweets: initData,
//   },
//   featuredProducts: initData,
// };

const initialState: UserProductsState = {
  data: [],
  error: null,
  status: "idle",
};

const userAllProductsSlice = createSlice({
  name: "all-products",
  initialState: initialState,
  reducers: {
    removeAllProducts: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAllProducts.pending, (state) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.error = null;
        }
      })
      .addCase(fetchUsersAllProducts.fulfilled, (state, action) => {
        if (state.status === "pending") {
          state.data = [...action.payload];
          state.status = "idle";
          state.error = null;
        }
      })
      .addCase(fetchUsersAllProducts.rejected, (state, action) => {
        if (action.payload && action.payload.message) {
          state.status = "idle";
          state.error = action.payload;
        }
      });
  },
});

export const { removeAllProducts } = userAllProductsSlice.actions;

export default userAllProductsSlice.reducer;
