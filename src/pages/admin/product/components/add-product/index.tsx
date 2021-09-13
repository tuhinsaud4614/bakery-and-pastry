import { TextField } from "@material-ui/core";
import { Formik, FormikHelpers } from "formik";
import ImagePicker from "../../../../../shared/components/image-picker";
import LoadingButton from "../../../../../shared/components/loading-button";
import ContentBox from "../../../components/content-box";
import useStyles from "./index.style";
import { validationSchema } from "./validation.schema";

interface IValues {
  title: string;
  image: File | null;
}

const AddProduct = () => {
  const styles = useStyles();

  const initialValues: IValues = {
    title: "",
    image: null,
  };

  const onSubmit = async (
    { title, image }: IValues,
    { resetForm }: FormikHelpers<IValues>
  ): Promise<any> => {
    console.log(title);
    console.log(image);
  };
  return (
    <ContentBox title="add product" className={styles.root}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldTouched,
          setFieldValue,
          touched,
          errors,
          values,
          isValid,
          dirty,
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <TextField
                type="text"
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                error={touched.title && !!errors.title}
                helperText={errors.title && touched.title && errors.title}
                fullWidth
                required
              />
              <ImagePicker
                id="image"
                name="image"
                onChanged={(f) => {
                  setFieldTouched("image", true);
                  setFieldValue("image", f);
                }}
                onBlur={handleBlur}
                data={values.image}
                error={touched.image && !!errors.image}
                helperText={errors.image && touched.image && errors.image}
                margin
              />
              <LoadingButton
                aria-label="login-btn"
                color="secondary"
                variant="contained"
                className={styles.button}
                size="large"
                disabled={!(isValid && dirty)}
                loading={isSubmitting}
                fullWidth
              >
                LOGIN
              </LoadingButton>
            </form>
          );
        }}
      </Formik>
    </ContentBox>
  );
};

AddProduct.displayName = "AddProduct";
export default AddProduct;
