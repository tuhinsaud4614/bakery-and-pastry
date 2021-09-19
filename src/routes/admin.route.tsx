import { getAuth, onAuthStateChanged } from "firebase/auth";
import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Wrapper from "../pages/admin/components/wrapper";
import PageNotFound from "../pages/page-not-found";
import Loader from "../shared/components/loader";
import { useAppDispatch, useAppSelector } from "../store";
import { autoAuthentication } from "../store/features/admin/auth/index.slice";
import ROUTES from "./constants";

const Auth = lazy(() => import("../pages/admin/auth"));
const Dashboard = lazy(() => import("../pages/admin/dashboard"));
const Product = lazy(() => import("../pages/admin/product"));

const AdminRoutes = () => {
  const rdxDispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.adminAuth);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    rdxDispatch(autoAuthentication());

    return unsubscribe;
  }, [rdxDispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {user && user.token ? (
        <Switch>
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
          <Redirect
            from={ROUTES.admin.auth.path}
            to={ROUTES.admin.dashboard.path}
          />
          <Route>
            <Wrapper>
              <PageNotFound path={ROUTES.admin.dashboard.path} />
            </Wrapper>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path={ROUTES.admin.auth.path} exact>
            <Auth />
          </Route>
          <Redirect to={ROUTES.admin.auth.path} />
        </Switch>
      )}
    </Suspense>
  );
};

export default AdminRoutes;
