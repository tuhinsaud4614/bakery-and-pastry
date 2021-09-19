import { IProduct } from "../../shared/constants";

export type ReduxStatusType = "idle" | "pending" | "rejected";
export interface IReduxError {
  title?: string;
  message: string;
}
export type ReduxErrorType = null | IReduxError;

export interface UserProductsState {
  data: IProduct[];
  status: ReduxStatusType;
  error: ReduxErrorType;
}

export interface UserProductState {
  product: IProduct | null;
  status: ReduxStatusType;
  error: ReduxErrorType;
}

export interface IUser {
  email: string;
  token: string;
  refreshToken: string;
  expireTime?: string;
}

export interface UserState {
  user: IUser | null;
  status: ReduxStatusType;
  error: ReduxErrorType;
}

// Admin Action Types
export const ADMIN_AUTH = "admin/auth";
export const ADMIN_AUTH_OUT = "admin/auth/out";

// Users Action Types
export const USERS_ALL_PRODUCTS_FETCHING = "users/all-products/fetching";
export const USERS_SINGLE_PRODUCT_FETCHING = "users/single-products/fetching";
