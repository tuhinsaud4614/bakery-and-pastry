import { where } from "@firebase/firestore";
import { Box, Grid } from "@material-ui/core";
import { Alert, AlertTitle, Pagination } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { fetchUsersAllProducts } from "../../../../../store/features/users/all-products/actions";
import { removeAllProducts } from "../../../../../store/features/users/all-products/index.slice";
import ProductCard from "../../../components/product-card";
import ProductsContainer, {
  ProductsLoading,
} from "../../../components/products-container";
import useStyles from "./index.style";

const PRODUCT_PER_PAGE = 4;

const FeatureProducts = () => {
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);

  const { error, data, status } = useAppSelector(
    (state) => state.usersAllProducts
  );
  const rdxDispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await rdxDispatch(
        fetchUsersAllProducts([where("featured", "==", true)])
      ).unwrap();
    })();

    return () => {
      rdxDispatch(removeAllProducts());
    };
  }, [rdxDispatch]);

  if (status === "pending") {
    return (
      <ProductsLoading title="Features Products" count={PRODUCT_PER_PAGE} />
    );
  }

  if (error) {
    return (
      <ProductsContainer title="Features Products">
        <Alert severity="error" style={{ borderRadius: "0" }}>
          {error.title && <AlertTitle>{error.title}</AlertTitle>}
          {error.message}
        </Alert>
      </ProductsContainer>
    );
  }

  if (data.length === 0) {
    return (
      <ProductsContainer title="Features Products">
        <Alert severity="success" style={{ borderRadius: "0" }}>
          <AlertTitle>No Product Found</AlertTitle>
          There is no featured product
        </Alert>
      </ProductsContainer>
    );
  }

  return (
    <ProductsContainer title="Features Products">
      <Grid container spacing={2} className={classes.items}>
        {data
          .slice(
            (page - 1) * PRODUCT_PER_PAGE,
            (page - 1) * PRODUCT_PER_PAGE + PRODUCT_PER_PAGE
          )
          .map((product) => (
            <Grid key={product.id} item xs={6} sm={4} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
      {data.length > PRODUCT_PER_PAGE && (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.pagination}
        >
          <Pagination
            page={page}
            onChange={(e, value) => {
              setPage(value);
            }}
            count={Math.ceil(data.length / PRODUCT_PER_PAGE)}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
    </ProductsContainer>
  );
};

FeatureProducts.displayName = "FeatureProducts";
export default FeatureProducts;
