import { QueryConstraint } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReduxErrorType, USERS_ALL_PRODUCTS_FETCHING } from "../..";
import { fetchingProductsByQuery } from "../../../../services/users/products";
import { IProduct } from "../../../../shared/constants";

// user fetching all products
export const fetchUsersAllProducts = createAsyncThunk<
  IProduct[],
  QueryConstraint[] | void,
  {
    rejectValue: ReduxErrorType;
  }
>(USERS_ALL_PRODUCTS_FETCHING, async (queriesConst, { rejectWithValue }) => {
  try {
    let qConst: QueryConstraint[] = [];

    if (queriesConst) {
      qConst = [...qConst, ...queriesConst];
    }

    const data = await fetchingProductsByQuery(qConst);
    return data;
  } catch (err) {
    return rejectWithValue({
      title: "Products Fetching failed",
      message: "There is problem to load data",
    } as ReduxErrorType);
  }
});
