import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Fragment } from "react";
import { CATEGORIES } from "../../../shared/constants";
import ProductsTable from "../components/products-table";
import AddProduct from "./components/add-product";

const data = CATEGORIES.map((item, i) => ({
  id: item.slug,
  title: item.name,
  link: "https://www.facebook.com",
  category: item.slug,
  img: item.src,
  price: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
  featured: i % 2 === 0,
}));

const ProductsList = () => {
  return (
    <ProductsTable
      gutterTop={3}
      title="Products"
      rows={["title", "category", "image", "price"]}
      data={[...data]}
      size="small"
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
