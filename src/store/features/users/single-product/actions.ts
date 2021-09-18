import { doc, getDoc } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReduxErrorType, USERS_SINGLE_PRODUCT_FETCHING } from "../..";
import { IProduct } from "../../../../shared/constants";
import { fireStore } from "../../../../shared/firebase-db";

// user fetching single products
export const fetchUsersSingleProduct = createAsyncThunk<
  IProduct,
  string,
  {
    rejectValue: ReduxErrorType;
  }
>(USERS_SINGLE_PRODUCT_FETCHING, async (productId, { rejectWithValue }) => {
  try {
    const ref = doc(fireStore, "products", productId);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        title: docSnap.get("title"),
        category: docSnap.get("category"),
        link: docSnap.get("link"),
        price: docSnap.get("price"),
        image: {
          name: docSnap.get("image")["name"],
          src: docSnap.get("image")["src"],
        },
        featured: docSnap.get("featured"),
      };
    }

    return rejectWithValue({
      title: "Product Not Found",
      message: "There is problem to find the product",
    } as ReduxErrorType);
  } catch (err) {
    return rejectWithValue({
      title: "Product Fetching failed",
      message: "There is problem to load the product",
    } as ReduxErrorType);
  }
});
