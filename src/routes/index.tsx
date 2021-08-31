import { Route, Switch } from "react-router-dom";

import ROUTES from "./constants";
import AdminRoutes from "./admin.route";
import UserRoutes from "./user.route";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.admin.dashboard.path}>
        <AdminRoutes />
      </Route>
      <Route path={ROUTES.user.home.path}>
        <UserRoutes />
      </Route>
    </Switch>
  );
};

export default Routes;
