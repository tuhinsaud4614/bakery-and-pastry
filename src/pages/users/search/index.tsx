import { Box, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAppSelector } from "../../../store";
import ProductCardSkeleton from "../components/product-card/index.skeleton";
import Wrapper from "../components/Wrapper";
import useStyles from "./index.style";

const Search = () => {
  const styles = useStyles();
  const searchValue = useAppSelector((state) => state.search.value);

  // console.log(searchValue);
  return (
    <Wrapper
      classes={{ sidebar: { root: styles.sidebar } }}
      sideChild={
        <Box className={styles.sideChild}>
          {!searchValue && (
            <Alert severity="success">No products were found.</Alert>
          )}
          <Grid spacing={2} container>
            <Grid xs={6} md={4} item>
              <ProductCardSkeleton />
            </Grid>
            <Grid xs={6} md={4} item>
              <ProductCardSkeleton />
            </Grid>
            <Grid xs={6} md={4} item>
              <ProductCardSkeleton />
            </Grid>
            <Grid xs={6} md={4} item>
              <ProductCardSkeleton />
            </Grid>
            <Grid xs={6} md={4} item>
              <ProductCardSkeleton />
            </Grid>
            <Grid xs={6} md={4} item>
              <ProductCardSkeleton />
            </Grid>
          </Grid>
        </Box>
      }
    />
  );
};

export default Search;
