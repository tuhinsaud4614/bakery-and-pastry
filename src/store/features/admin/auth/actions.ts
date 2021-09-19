import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ADMIN_AUTH, ADMIN_AUTH_OUT, IUser, ReduxErrorType } from "../..";

// Admin Auth
export const adminAuth = createAsyncThunk<
  IUser,
  { email: string; password: string },
  {
    rejectValue: ReduxErrorType;
  }
>(ADMIN_AUTH, async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const credential = await signInWithEmailAndPassword(auth, email, password);
    // console.log(credential.user);

    const {
      refreshToken,
      metadata: { lastSignInTime },
    } = credential.user;
    const token = await credential.user.getIdToken();
    const userInfo = {
      email: email,
      token: token,
      refreshToken: refreshToken,
      expireTime: lastSignInTime,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));

    return {
      ...userInfo,
    };
  } catch (err: any) {
    let message = "Something went wrong";
    if ("code" in err && err["code"] === "auth/user-not-found") {
      message = "Username/password is incorrect!";
    }

    return rejectWithValue({
      title: "Authentication Failed",
      message: message,
    });
  }
});

// Admin Auth Out
export const adminAuthOut = createAsyncThunk<
  null,
  void,
  {
    rejectValue: ReduxErrorType;
  }
>(ADMIN_AUTH_OUT, async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
    localStorage.removeItem("user");
    return null;
  } catch (err: any) {
    let message = "Logout failed";
    return rejectWithValue({
      message: message,
    });
  }
});
