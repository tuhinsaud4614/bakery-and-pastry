import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import ROUTES from "./constants";

const Auth = lazy(() => import("../pages/admin/auth"));
const Dashboard = lazy(() => import("../pages/admin/dashboard"));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<CircularProgress color="secondary" />}>
      <Switch>
        <Route path={ROUTES.admin.auth.path} exact>
          <Auth />
        </Route>
        <Route path={ROUTES.admin.dashboard.path} exact>
          <Dashboard />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AdminRoutes;
