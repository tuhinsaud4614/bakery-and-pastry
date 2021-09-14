export type ReduxStatusType = "idle" | "pending" | "rejected";
export interface IReduxError {
  title?: string;
  message: string;
}
export type ReduxErrorType = null | IReduxError;
