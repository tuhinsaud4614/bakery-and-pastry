import { Container, Paper, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import ROUTES from "../../../routes/constants";
import LoadingButton from "../../../shared/components/loading-button";
import useStyles from "./index.style";
import { authSchema } from "./validation.schema";

const Auth = () => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg">
      <Paper className={styles.wrapper}>
        <Link to={ROUTES.user.home.path} className={styles.homeLink}>
          <img src={logo} alt="logo" width="100" height="48" />
        </Link>
        <Formik
          validationSchema={authSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            console.log(values);
          }}
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
