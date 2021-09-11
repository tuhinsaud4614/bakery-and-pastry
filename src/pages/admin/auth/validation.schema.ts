import * as Yup from "yup";

export const authSchema = Yup.object({
  password: Yup.string()
    .min(6, "Invalid password.")
    .required("Password is required."),
  username: Yup.string()
    .email("Invalid username address.")
    .required("Username is required."),
});
