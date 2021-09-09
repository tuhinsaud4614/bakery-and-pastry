import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useState } from "react";
import { CATEGORIES } from "../../../../../shared/constants";
import ProductCard from "../../../components/product-card";
import useStyles from "./index.style";

const FeatureProducts = () => {
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);
  const categories = CATEGORIES.slice(page - 1, page + 3);
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography variant="body1" component="h3" className={classes.title}>
        Features Products
      </Typography>
      <Divider />
      <Grid container spacing={2} className={classes.items}>
        {categories.map((category) => (
          <Grid key={category.slug} item xs={6} sm={4} md={3}>
            <ProductCard
              featured={true}
              img={category.src}
              category={category.name}
              slug={category.slug}
              title="BLUEBERRY CUP"
              price={140}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.pagination}
      >
        <Pagination
          page={page}
          onChange={(e, value) => setPage(value)}
          count={Math.ceil(CATEGORIES.length / 4)}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Paper>
  );
};

FeatureProducts.displayName = "FeatureProducts";
export default FeatureProducts;
