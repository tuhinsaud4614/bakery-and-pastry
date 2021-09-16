import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "@firebase/storage";
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

export const updateImageForProduct = async (
  image: File,
  prevImage: { name: string; src: string }
) => {
  try {
    const storage = getStorage();
    const deleteRef = ref(storage, prevImage.name);
    const result = await Promise.all([
      await deleteObject(deleteRef),
      await uploadBytes(deleteRef, image),
    ]);

    const imageUri = await getDownloadURL(result[1].ref);

    return { name: result[1].metadata.name, src: imageUri } as const;
  } catch (error) {
    throw error;
  }
};
