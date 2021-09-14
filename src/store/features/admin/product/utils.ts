import { ReduxErrorType } from "../..";

export const fileErrorGenerator = (code: unknown): ReduxErrorType => {
  switch (code) {
    case "storage/Unauthorized":
      return {
        message: "You are not authorized",
        title: "Error",
      };
    case "storage/canceled":
      // User canceled the upload
      return {
        message: "Image upload canceled",
        title: "Cancelled",
      };
    case "storage/retry-limit-exceeded":
      return {
        message:
          "The maximum time limit on an operation (upload, download, delete, etc.) has been excceded. Try uploading again",
        title: "Limit Exceeded",
      };
    default:
      return {
        message: "Something went wrong",
        title: "Error",
      };
  }
};
