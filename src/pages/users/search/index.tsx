import { orderBy, where } from "@firebase/firestore";
import { Box, Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchUsersAllProducts } from "../../../store/features/users/all-products/actions";
import { removeAllProducts } from "../../../store/features/users/all-products/index.slice";
import ProductCard from "../components/product-card";
import ProductCardSkeleton from "../components/product-card/index.skeleton";
import Wrapper from "../components/Wrapper";
import useStyles from "./index.style";

const Search = () => {
  const styles = useStyles();
  const rdxDispatch = useAppDispatch();

  const {
    search: { value: searchValue },
    usersAllProducts: { data, error, status },
  } = useAppSelector((state) => state);

  useEffect(() => {
    (async () => {
      if (searchValue.length) {
        await rdxDispatch(
          fetchUsersAllProducts([
            orderBy("title"),
            where("title", ">=", searchValue),
            where("title", "<=", searchValue + "\uf8ff"),
          ])
        ).unwrap();
      }
    })();

    return () => {
      rdxDispatch(removeAllProducts());
    };
  }, [rdxDispatch, searchValue]);

  if (status === "pending") {
    return (
      <Wrapper
        classes={{ sidebar: { root: styles.sidebar } }}
        sideChild={
          <Box className={styles.sideChild}>
            <Grid spacing={2} container>
              {Array.from({ length: 4 }, (_, i) => i + 1).map((index) => (
                <Grid key={index} xs={6} md={4} item>
                  <ProductCardSkeleton />
                </Grid>
              ))}
            </Grid>
          </Box>
        }
      />
    );
  }

  if (error) {
    return (
      <Wrapper
        classes={{ sidebar: { root: styles.sidebar } }}
        sideChild={
          <Box className={styles.sideChild}>
            <Alert severity="error">
              {error.title && <AlertTitle>{error.title}</AlertTitle>}
              {error.message}
            </Alert>
          </Box>
        }
      />
    );
  }

  if (data.length === 0) {
    return (
      <Wrapper
        classes={{ sidebar: { root: styles.sidebar } }}
        sideChild={
          <Box className={styles.sideChild}>
            {data.length === 0 && (
              <Alert severity="warning">No searched products were found.</Alert>
            )}
          </Box>
        }
      />
    );
  }

  return (
    <Wrapper
      classes={{ sidebar: { root: styles.sidebar } }}
      sideChild={
        <Box className={styles.sideChild}>
          <Grid spacing={2} container>
            {data.map((product) => (
              <Grid key={product.id} xs={6} md={4} item>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      }
    />
  );
};

export default Search;
