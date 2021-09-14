import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Formik, FormikHelpers } from "formik";
import { useState } from "react";
import ImagePicker from "../../../../../shared/components/image-picker";
import LoadingButton from "../../../../../shared/components/loading-button";
import { CATEGORIES } from "../../../../../shared/constants";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { addAdminProduct } from "../../../../../store/features/admin/product/actions";
import { clearAdminProductError } from "../../../../../store/features/admin/product/index.slice";
import ContentBox from "../../../components/content-box";
import useStyles from "./index.style";
import { validationSchema } from "./validation.schema";

interface IValues {
  title: string;
  category: string;
  link: string;
  price: number;
  featured: boolean;
  image: File | null;
}

const AddProduct = () => {
  const styles = useStyles();
  const [showSnackbar, setShowSnackbar] = useState<string>("");
  const rdxDispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.adminProduct);

  const initialValues: IValues = {
    title: "",
    category: CATEGORIES[0].slug,
    link: "",
    featured: false,
    price: 0,
    image: null,
  };

  const onSubmit = async (
    values: IValues,
    { resetForm }: FormikHelpers<IValues>
  ): Promise<any> => {
    const resultAction = await rdxDispatch(addAdminProduct({ ...values }));
    if (addAdminProduct.fulfilled.match(resultAction)) {
      setShowSnackbar(
        `Product ${resultAction.payload.title} added successfully!`
      );
    }
    resetForm({ values: initialValues });
  };

  return (
    <ContentBox title="add product" className={styles.root}>
      <Snackbar
        onClose={(_, reasons) => {
          if (reasons === "timeout") {
            setShowSnackbar("");
          }
        }}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!showSnackbar}
      >
        <Alert severity="success" variant="filled">
          {showSnackbar}
        </Alert>
      </Snackbar>
      <Divider />
      {/* If any errors occurred */}
      {error.adding && (
        <Alert
          severity="error"
          style={{ borderRadius: "0" }}
          onClose={() => rdxDispatch(clearAdminProductError("adding"))}
        >
          {error.adding.title && <AlertTitle>{error.adding.title}</AlertTitle>}
          {error.adding.message}
        </Alert>
      )}

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
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                placeholder="xyz"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                error={touched.title && !!errors.title}
                helperText={errors.title && touched.title && errors.title}
                margin="dense"
                fullWidth
                required
              />
              <TextField
                id="category"
                name="category"
                label="Category"
                variant="outlined"
                placeholder="Select a category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.category && !!errors.category}
                helperText={
                  errors.category && touched.category && errors.category
                }
                margin="dense"
                select
                fullWidth
                required
              >
                {CATEGORIES.map((option) => (
                  <MenuItem
                    key={option.slug}
                    value={option.slug}
                    className={styles.option}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                type="url"
                id="link"
                name="link"
                label="Link"
                variant="outlined"
                placeholder="https://www.example.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.link}
                error={touched.link && !!errors.link}
                helperText={errors.link && touched.link && errors.link}
                margin="dense"
                fullWidth
                required
              />
              <FormGroup className={styles.group} row>
                <FormControl
                  className={styles.price}
                  variant="outlined"
                  margin="dense"
                  required
                >
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <OutlinedInput
                    type="number"
                    id="price"
                    name="price"
                    placeholder="120"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    startAdornment={
                      <InputAdornment position="start">৳</InputAdornment>
                    }
                    labelWidth={60}
                    error={touched.price && !!errors.price}
                  />
                  {errors.price && touched.price && (
                    <FormHelperText id="price" variant="filled" error>
                      {errors.price}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      aria-label="featured"
                      id="featured"
                      name="featured"
                      checked={values.featured}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label="Featured"
                />
              </FormGroup>
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
              />
              <LoadingButton
                aria-label="login-btn"
                type="submit"
                color="secondary"
                variant="contained"
                className={styles.button}
                size="large"
                disabled={!(isValid && dirty)}
                loading={isSubmitting}
                fullWidth
              >
                Add
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
