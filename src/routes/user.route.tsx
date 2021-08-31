import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import ROUTES from "./constants";
import UserHeader from "../shared/components/navigations/user-header";

const Home = lazy(() => import("../pages/users/home"));
const Search = lazy(() => import("../pages/users/search"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <UserHeader/>
      <Switch>
        <Route path={ROUTES.user.search.path} exact>
          <Search />
        </Route>
        <Route path={ROUTES.user.home.path} exact>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default UserRoutes;
