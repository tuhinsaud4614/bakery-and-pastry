import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../pages/page-not-found";
import ProductDetail from "../pages/users/product-detail";
import Loader from "../shared/components/loader";
import UserFooter from "../shared/components/navigation/user-footer";
import UserHeader from "../shared/components/navigation/user-header";
import ScrollToTop from "../shared/components/scroll-to-top";
import ROUTES from "./constants";

const Home = lazy(() => import("../pages/users/home"));
const Search = lazy(() => import("../pages/users/search"));
const Category = lazy(() => import("../pages/users/category"));

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
      <ScrollToTop showBelow={200} />
    </Suspense>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(9),
      position: "relative",
    },
  })
);

UserRoutes.displayName = "User.Routes";
export default UserRoutes;
