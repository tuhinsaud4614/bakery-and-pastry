type DetailType = {
  [key in "name" | "path"]: string;
};

// Admin routes
type AdminKeyType = "dashboard" | "auth" | "product";
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
  product: {
    name: "Product",
    path: "/admin/product",
  },
};

// User routes
type UserKeyType = "home" | "search" | "category" | "product";
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
  category: {
    name: "Category",
    path: "/category/:slug",
  },
  product: {
    name: "Category",
    path: "/product/:categorySlug/:productId",
  },
};

const ROUTES: { admin: AdminRouteType; user: UserRouteType } = {
  admin: ADMIN_ROUTES,
  user: USER_ROUTES,
};

export default ROUTES;
