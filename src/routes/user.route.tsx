import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import ROUTES from "./constants";
import UserHeader from "../shared/components/navigation/user-header";
import UserSidebar from "../shared/components/navigation/user-sidebar";
import PageNotFound from "../pages/page-not-found";

const Home = lazy(() => import("../pages/users/home"));
const Search = lazy(() => import("../pages/users/search"));

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
        <Box display="flex">
          <UserSidebar />
          <Box component="main" flexGrow="1">
            <Switch>
              <Route path={ROUTES.user.search.path} exact>
                <Search />
              </Route>
              <Route path={ROUTES.user.home.path} exact>
                <Home />
              </Route>
              <Route>
                <PageNotFound path={ROUTES.user.home.path} />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Container>
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

export default UserRoutes;
