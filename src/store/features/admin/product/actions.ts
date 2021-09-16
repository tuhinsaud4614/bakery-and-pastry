import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import { ReduxErrorType } from "../..";
import { AppDispatch, AppState } from "../../..";
import { IProduct } from "../../../../shared/constants";
import { fireStore } from "../../../../shared/firebase-db";
import { fileErrorGenerator, updateImageForProduct } from "./utils";

// Admin fetching products
export const fetchAdminProducts = createAsyncThunk<
  IProduct[],
  number | void,
  {
    rejectValue: ReduxErrorType;
  }
>("admin/products/fetching", async (maxLimit, { rejectWithValue }) => {
  try {
    const qConst: QueryConstraint[] = maxLimit ? [limit(maxLimit)] : [];
    let q = query(
      collection(fireStore, "products"),
      orderBy("createdAt", "desc"),
      ...qConst
    );
    const querySnapshot = await getDocs(q);
    const data: IProduct[] = [];

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        title: doc.get("title"),
        category: doc.get("category"),
        link: doc.get("link"),
        price: doc.get("price"),
        image: { name: doc.get("image")["name"], src: doc.get("image")["src"] },
        featured: doc.get("featured"),
      });
    });

    return data;
  } catch (err) {
    return rejectWithValue({
      title: "Products Fetching failed",
      message: "There is problem to load data",
    } as ReduxErrorType);
  }
});

// Admin add product
export const addAdminProduct = createAsyncThunk<
  IProduct,
  {
    title: string;
    category: string;
    link: string;
    price: number;
    image: File | null;
    featured: boolean;
  },
  {
    rejectValue: ReduxErrorType;
  }
>(
  "admin/products/add",
  async (
    { category, featured, image, link, price, title },
    { rejectWithValue }
  ) => {
    try {
      let rdxError: ReduxErrorType = null;
      if (!image) {
        rdxError = {
          message: "Image cant't be empty",
          title: "Error",
        };
        return rejectWithValue(rdxError);
      }

      const storage = getStorage();
      const imageId = `${title} - ${Date.now().toString()}`;
      const storageRef = ref(storage, imageId);
      const snapshot = await uploadBytes(storageRef, image);
      const imageUri = await getDownloadURL(snapshot.ref);

      const addSnapshot = await addDoc(collection(fireStore, "products"), {
        category,
        featured,
        image: { name: snapshot.metadata.name, src: imageUri },
        link,
        price,
        title,
        createdAt: serverTimestamp(),
      });

      return {
        id: addSnapshot.id,
        category,
        featured,
        image: { name: snapshot.metadata.name, src: imageUri },
        link,
        price,
        title,
      };
    } catch (err: any) {
      let newError: ReduxErrorType = {
        title: "Error",
        message: "Something went wrong",
      };
      if (err.code) {
        newError = fileErrorGenerator(err.code);
        return rejectWithValue(newError);
      }
      if (
        err["error"] &&
        err["error"]["code"] &&
        err["error"]["code"] === 403
      ) {
        newError = {
          title: "Unauthorized",
          message: "You are not authorized",
        };
      }

      return rejectWithValue(newError);
    }
  }
);

// Admin delete product
export const deleteAdminProduct = createAsyncThunk<
  string,
  IProduct,
  {
    dispatch: AppDispatch;
    state: AppState;
    rejectValue: ReduxErrorType;
  }
>("admin/products/delete", async (product, { rejectWithValue }) => {
  try {
    const storage = getStorage();
    const deleteRef = ref(storage, product.image.name);

    await Promise.all([
      deleteObject(deleteRef),
      deleteDoc(doc(fireStore, "products", product.id)),
    ]);

    return product.id;
  } catch (err: any) {
    let newError: ReduxErrorType = {
      title: "Error",
      message: "Something went wrong",
    };
    if (err.code) {
      newError = fileErrorGenerator(err.code);
      return rejectWithValue(newError);
    }

    if (err["error"] && err["error"]["code"] && err["error"]["code"] === 403) {
      newError = {
        title: "Unauthorized",
        message: "You are not authorized",
      };
    }

    return rejectWithValue(newError);
  }
});

// Admin edit product
export const editAdminProduct = createAsyncThunk<
  IProduct,
  {
    id: string;
    title: string;
    category: string;
    link: string;
    price: number;
    image: File | null;
    prevImage: { name: string; src: string };
    featured: boolean;
  },
  {
    dispatch: AppDispatch;
    state: AppState;
    rejectValue: ReduxErrorType;
  }
>("admin/products/edit", async (product, { rejectWithValue }) => {
  try {
    // let rdxError: ReduxErrorType = null;

    let newImageUri = product.prevImage;

    if (product.image !== null) {
      newImageUri = await updateImageForProduct(
        product.image,
        product.prevImage
      );
    }

    const updatingRef = doc(fireStore, "products", product.id);
    await updateDoc(updatingRef, {
      title: product.title,
      category: product.category,
      link: product.link,
      price: product.price,
      featured: product.featured,
      image: { ...newImageUri },
    });
    return {
      id: product.id,
      title: product.title,
      category: product.category,
      link: product.link,
      price: product.price,
      featured: product.featured,
      image: { ...newImageUri },
    };
  } catch (err: any) {
    let newError: ReduxErrorType = {
      title: "Error",
      message: "Something went wrong",
    };
    if (err.code) {
      newError = fileErrorGenerator(err.code);
      return rejectWithValue(newError);
    }

    if (err["error"] && err["error"]["code"] && err["error"]["code"] === 403) {
      newError = {
        title: "Unauthorized",
        message: "You are not authorized",
      };
    }

    return rejectWithValue(newError);
  }
});
