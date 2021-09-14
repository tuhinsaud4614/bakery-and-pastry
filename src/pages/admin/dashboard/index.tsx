import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchAdminProducts } from "../../../store/features/admin/product/actions";
import ProductsTable from "../components/products-table";
import Banners from "./components/banners";

const Dashboard = () => {
  const { error, products, status } = useAppSelector(
    (state) => state.adminProduct
  );
  const rdxDispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await rdxDispatch(fetchAdminProducts(5)).unwrap();
    })();
  }, [rdxDispatch]);
  return (
    <>
      <Banners />
      <ProductsTable
        gutterTop={3}
        title="Latest Product"
        rows={["title", "category", "image", "price"]}
        size="small"
        data={products}
        loadingData={status.fetching === "pending"}
        error={
          error.fetching
            ? { message: error.fetching.message, title: error.fetching.title }
            : undefined
        }
      />
    </>
  );
};
Dashboard.displayName = "Dashboard";
export default Dashboard;
