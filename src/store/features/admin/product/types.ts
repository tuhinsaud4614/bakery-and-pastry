import { ReduxErrorType, ReduxStatusType } from "../..";
import { IProduct } from "../../../../shared/constants";

export type AdminProductsActionKeysType =
  | "fetching"
  | "adding"
  | "updating"
  | "deleting";

export interface AdminProductsState {
  products: IProduct[];
  status: {
    [key in AdminProductsActionKeysType]: ReduxStatusType;
  };
  error: {
    [key in AdminProductsActionKeysType]: ReduxErrorType;
  };
}
