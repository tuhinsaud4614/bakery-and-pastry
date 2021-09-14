import { Fragment, useEffect, useState } from "react";
import Toast from "../../../shared/components/toast";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchAdminProducts } from "../../../store/features/admin/product/actions";
import ProductsTable from "../components/products-table";
import AddProduct from "./components/add-product";
import DeleteProduct from "./components/delete-product";

const ProductsList = () => {
  const [showSnackbar, setShowSnackbar] = useState<{
    edit: string;
    delete: string;
  }>({ delete: "", edit: "" });

  const rdxDispatch = useAppDispatch();
  const { error, products, status } = useAppSelector(
    (state) => state.adminProduct
  );

  useEffect(() => {
    (async () => {
      await rdxDispatch(fetchAdminProducts()).unwrap();
    })();
  }, [rdxDispatch]);

  return (
    <Fragment>
      <Toast
        props={{ severity: "success", variant: "filled" }}
        onClose={() => setShowSnackbar((prev) => ({ delete: "", edit: "" }))}
        autoHideDuration={5000}
        show={!!showSnackbar.delete || !!showSnackbar.edit}
      >
        {showSnackbar.delete || showSnackbar.edit}
      </Toast>

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
        actions={(product) => (
          <Fragment>
            <DeleteProduct
              product={product}
              onDeleteComplete={(text) =>
                setShowSnackbar((prev) => ({
                  ...prev,
                  delete: text,
                }))
              }
            />
          </Fragment>
        )}
        showPaginate
        showId
      />
    </Fragment>
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
