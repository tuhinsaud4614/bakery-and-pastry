import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchAdminProducts } from "../../../store/features/admin/product/actions";
import ProductsTable from "../components/products-table";
import AddProduct from "./components/add-product";

const ProductsList = () => {
  const { error, products, status } = useAppSelector(
    (state) => state.adminProduct
  );
  const rdxDispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await rdxDispatch(fetchAdminProducts()).unwrap();
    })();
  }, [rdxDispatch]);

  return (
    <ProductsTable
      gutterTop={3}
      title="Products"
      rows={["title", "category", "image", "price"]}
      size="small"
      data={products}
      loadingData={status.fetching === "pending"}
      error={
        error.fetching
          ? { message: error.fetching.message, title: error.fetching.title }
          : undefined
      }
      actions={({ id }) => (
        <>
          <IconButton color="primary">
            <Edit />
          </IconButton>
          <IconButton color="secondary">
            <Delete />
          </IconButton>
        </>
      )}
      showPaginate
      showId
    />
  );
};

ProductsList.displayName = "ProductsList";

const Product = () => {
  return (
    <Fragment>
      <AddProduct />
      <ProductsList />
    </Fragment>
  );
};
Product.displayName = "Product";
export default Product;
