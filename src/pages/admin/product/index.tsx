import { Fragment } from "react";
import AddProduct from "./components/add-product";

const Product = () => {
  return (
    <Fragment>
      <AddProduct />
    </Fragment>
  );
};
Product.displayName = "Product";
export default Product;
