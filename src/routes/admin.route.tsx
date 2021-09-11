import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../shared/components/loader";
import ROUTES from "./constants";

const Auth = lazy(() => import("../pages/admin/auth"));
const Dashboard = lazy(() => import("../pages/admin/dashboard"));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
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
