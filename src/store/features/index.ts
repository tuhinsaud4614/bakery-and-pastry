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

// Users Action Types
export const USERS_ALL_PRODUCTS_FETCHING = "users/all-products/fetching";
