import { Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { limit, where } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { fetchUsersAllProducts } from "../../../../../store/features/users/all-products/actions";
import { removeAllProducts } from "../../../../../store/features/users/all-products/index.slice";
import ProductCard from "../../../components/product-card";
import ProductsContainer, {
  ProductsLoading,
} from "../../../components/products-container";
import useStyles from "./index.style";

const RelatedProducts = () => {
  const styles = useStyles();

  const { categorySlug } =
    useParams<{ categorySlug?: string; productId?: string }>();

  const { error, data, status } = useAppSelector(
    (state) => state.usersAllProducts
  );
  const rdxDispatch = useAppDispatch();

  useEffect(() => {
    if (categorySlug) {
      const asyncFunc = async () => {
        await rdxDispatch(
          fetchUsersAllProducts([
            where("category", "==", categorySlug),
            limit(8),
          ])
        ).unwrap();
      };
      asyncFunc();
    }

    return () => {
      rdxDispatch(removeAllProducts());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rdxDispatch]);

  if (status === "pending") {
    return <ProductsLoading title="Related Products" count={4} />;
  }

  if (data.length === 0 || error) {
    return (
      <ProductsContainer title="Related Products">
        <Alert severity="warning" style={{ borderRadius: "0" }}>
          <AlertTitle>No Product Found</AlertTitle>
          There is no related product
        </Alert>
      </ProductsContainer>
    );
  }
  return (
    <ProductsContainer title="Related Products">
      <Grid container spacing={2} className={styles.items}>
        {data.map((product) => (
          <Grid key={product.id} item xs={6} sm={4} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </ProductsContainer>
  );
};

RelatedProducts.displayName = "RelatedProducts";
export default RelatedProducts;
