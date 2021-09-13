import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required."),
  image: Yup.mixed<File>()
    .required("Image File is required!")
    .test("fileSize", "The file is too large. Maximum 2mb", (value) => {
      return !!value && value.size / (1024 * 1024) <= 2;
    })
    .test(
      "fileFormat",
      "Only accepted image like (.png, .jpg, .jpeg, .gif)",
      (value) =>
        !!value &&
        ["image/jpeg", "image/png", "image/gif", "image/jpg"].includes(
          value.type
        )
    ),
});
