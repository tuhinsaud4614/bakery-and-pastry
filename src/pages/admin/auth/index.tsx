import { Container, Paper, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Formik, FormikHelpers } from "formik";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../images/logo.svg";
import ROUTES from "../../../routes/constants";
import LoadingButton from "../../../shared/components/loading-button";
import { useAppDispatch, useAppSelector } from "../../../store";
import { adminAuth } from "../../../store/features/admin/auth/actions";
import { clearAuthError } from "../../../store/features/admin/auth/index.slice";
import useStyles from "./index.style";
import { authSchema } from "./validation.schema";

interface IFormState {
  username: "";
  password: "";
}

const Auth = () => {
  const styles = useStyles();
  const { error } = useAppSelector((state) => state.adminAuth);
  const rdxDispatch = useAppDispatch();
  const history = useHistory();

  const onsubmitHandler = async (
    values: IFormState,
    { resetForm }: FormikHelpers<IFormState>
  ): Promise<any> => {
    const resultAction = await rdxDispatch(
      adminAuth({ email: values.username, password: values.password })
    );
    if (adminAuth.fulfilled.match(resultAction)) {
      history.replace(ROUTES.admin.dashboard.path);
      return;
    }
    resetForm();
  };

  return (
    <Container maxWidth="lg">
      <Paper className={styles.wrapper}>
        <Link to={ROUTES.user.home.path} className={styles.homeLink}>
          <img src={logo} alt="logo" width="100" height="48" />
        </Link>
        {/* If any errors occurred */}

        {error && (
          <Alert severity="error" onClose={() => rdxDispatch(clearAuthError())}>
            {error.title && <AlertTitle>{error.title}</AlertTitle>}
            {error.message}
          </Alert>
        )}
        <Formik
          validationSchema={authSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={onsubmitHandler}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            touched,
            errors,
            values,
            isValid,
            dirty,
            isSubmitting,
          }) => {
            return (
              <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  error={touched.username && !!errors.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                  fullWidth
                  required
                />
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && !!errors.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  fullWidth
                  required
                />
                <LoadingButton
                  aria-label="login-btn"
                  color="secondary"
                  variant="contained"
                  className={styles.button}
                  size="large"
                  type="submit"
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
      </Paper>
    </Container>
  );
};

export default Auth;
