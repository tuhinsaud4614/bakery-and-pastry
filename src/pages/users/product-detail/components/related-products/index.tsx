import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import { CATEGORIES } from "../../../../../shared/constants";
import ProductCard from "../../../components/product-card";
import useStyles from "./index.style";

const RelatedProducts = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.root} elevation={0} square>
      <Typography variant="body1" component="h3" className={styles.title}>
        Related Products
      </Typography>
      <Divider />
      <Grid container spacing={2} className={styles.items}>
        {CATEGORIES.map((category) => (
          <Grid key={category.slug} item xs={6} sm={4} md={3}>
            <ProductCard
              img={category.src}
              category={category.name}
              slug={category.slug}
              title="BLUEBERRY CUP"
              price={140}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

RelatedProducts.displayName = "RelatedProducts";
export default RelatedProducts;
