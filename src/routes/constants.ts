type DetailType = {
  [key in "name" | "path"]: string;
};

// Admin routes
type AdminKeyType = "dashboard" | "auth";
type AdminRouteType = { [key in AdminKeyType]: DetailType };
const ADMIN_ROUTES: AdminRouteType = {
  auth: {
    name: "Auth",
    path: "/admin/auth",
  },
  dashboard: {
    name: "Dashboard",
    path: "/admin",
  },
};

// User routes
type UserKeyType = "home" | "search";
type UserRouteType = { [key in UserKeyType]: DetailType };
const USER_ROUTES: UserRouteType = {
  home: {
    name: "Home",
    path: "/",
  },
  search: {
    name: "Search",
    path: "/search",
  },
};

const ROUTES: { admin: AdminRouteType; user: UserRouteType } = {
  admin: ADMIN_ROUTES,
  user: USER_ROUTES,
};

export default ROUTES;
