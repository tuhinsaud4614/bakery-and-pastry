import {
  Box,
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../pages/page-not-found";
import ProductDetail from "../pages/users/product-detail";
import UserFooter from "../shared/components/navigation/user-footer";
import UserHeader from "../shared/components/navigation/user-header";
import ROUTES from "./constants";

const Home = lazy(() => import("../pages/users/home"));
const Search = lazy(() => import("../pages/users/search"));
const Category = lazy(() => import("../pages/users/category"));

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="100px">
      <CircularProgress />
    </Box>
  );
};

const UserRoutes = () => {
  const classes = useStyles();
  return (
    <Suspense fallback={<Loader />}>
      <UserHeader />
      <Container maxWidth="lg" className={classes.container}>
        <Switch>
          <Route path={ROUTES.user.search.path} exact>
            <Search />
          </Route>
          <Route path={ROUTES.user.category.path} exact>
            <Category />
          </Route>
          <Route path={ROUTES.user.product.path} exact>
            <ProductDetail />
          </Route>
          <Route path={ROUTES.user.home.path} exact>
            <Home />
          </Route>
          <Route>
            <PageNotFound path={ROUTES.user.home.path} />
          </Route>
        </Switch>
      </Container>
      <UserFooter />
    </Suspense>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(9),
    },
  })
);

UserRoutes.displayName = "User.Routes";
export default UserRoutes;
