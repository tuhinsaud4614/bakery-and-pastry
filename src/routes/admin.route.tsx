import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Wrapper from "../pages/admin/components/wrapper";
import PageNotFound from "../pages/page-not-found";
import Loader from "../shared/components/loader";
import ROUTES from "./constants";

const Auth = lazy(() => import("../pages/admin/auth"));
const Dashboard = lazy(() => import("../pages/admin/dashboard"));
const Product = lazy(() => import("../pages/admin/product"));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={ROUTES.admin.auth.path} exact>
          <Auth />
        </Route>
        <Route path={ROUTES.admin.product.path} exact>
          <Wrapper>
            <Product />
          </Wrapper>
        </Route>
        <Route path={ROUTES.admin.dashboard.path} exact>
          <Wrapper>
            <Dashboard />
          </Wrapper>
        </Route>
        <Route>
          <Wrapper>
            <PageNotFound path={ROUTES.admin.dashboard.path} />
          </Wrapper>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AdminRoutes;
