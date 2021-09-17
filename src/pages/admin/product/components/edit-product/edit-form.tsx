import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Formik, FormikHelpers } from "formik";
import { memo } from "react";
import ImagePicker from "../../../../../shared/components/image-picker";
import LoadingButton from "../../../../../shared/components/loading-button";
import { CATEGORIES, IProduct } from "../../../../../shared/constants";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { editAdminProduct } from "../../../../../store/features/admin/product/actions";
import { clearAdminProductError } from "../../../../../store/features/admin/product/index.slice";
import { validationSchema } from "./validation.schema";

interface IValues {
  title: string;
  category: string;
  link: string;
  price: number;
  featured: boolean;
  image: File | null;
}

interface Props {
  product: IProduct;
  open: boolean;
  onClose: () => void;
  onEditComplete?: (message: string) => void;
}

const EditForm = ({
  product: { category, featured, id, image, link, price, title },
  open,
  onClose,
  onEditComplete,
}: Props) => {
  const initialValues: IValues = {
    title: title,
    category: category,
    link: link,
    featured: featured,
    price: price,
    image: null,
  };

  const rdxDispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.adminProduct);

  const onSubmit = async (
    values: IValues,
    { resetForm }: FormikHelpers<IValues>
  ): Promise<any> => {
    const resultAction = await rdxDispatch(
      editAdminProduct({
        category: values.category,
        featured: values.featured,
        id: id,
        image: values.image,
        prevImage: image,
        link: values.link,
        price: values.price,
        title: values.title,
      })
    );

    if (editAdminProduct.fulfilled.match(resultAction)) {
      onClose();
      if (onEditComplete) {
        onEditComplete(
          `Product ${resultAction.payload.title} updated successfully!`
        );
      }
    }
  };

  return (
    <Dialog
      open={open}
      scroll="paper"
      aria-labelledby="edit-form"
      aria-describedby="edit-form-description"
    >
      <DialogTitle id="edit-form">
        Edit{" "}
        <Typography
          color="primary"
          component="span"
          variant="h6"
          style={{ textTransform: "capitalize" }}
        >
          {title}
        </Typography>
      </DialogTitle>
      {error.updating && (
        <>
          <Divider />
          <Alert
            severity="error"
            style={{ borderRadius: "0" }}
            onClose={() => rdxDispatch(clearAdminProductError("updating"))}
          >
            {error.updating.title && (
              <AlertTitle>{error.updating.title}</AlertTitle>
            )}
            {error.updating.message}
          </Alert>
        </>
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
            <form onSubmit={handleSubmit}>
              <DialogContent dividers>
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
                      style={{ textTransform: "capitalize" }}
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
                <FormGroup
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                  row
                >
                  <FormControl
                    style={{ flexGrow: 1, paddingRight: "16px" }}
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
                  id={id}
                  // label="Image"
                  name="image"
                  onChanged={(f) => {
                    setFieldTouched("image", true);
                    setFieldValue("image", f);
                  }}
                  onBlur={handleBlur}
                  data={values.image}
                  error={touched.image && !!errors.image}
                  helperText={errors.image && touched.image && errors.image}
                  prevImage={image.src}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  onClick={onClose}
                  type="button"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <LoadingButton
                  variant="contained"
                  color="secondary"
                  aria-label="add-product"
                  type="submit"
                  disabled={!(isValid && dirty)}
                  loading={isSubmitting}
                  onClick={() => {}}
                >
                  update
                </LoadingButton>
              </DialogActions>
            </form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

EditForm.displayName = "EditForm";
export default memo(EditForm, (prev, next) => prev.open === next.open);
