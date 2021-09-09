import { Box, Grid, Typography } from "@material-ui/core";
import { CATEGORIES } from "../../../../../shared/constants";
import ProductCard from "../../../components/product-card";
import useStyles from "./index.style";

interface Props {
  title: string;
  slug: string;
}

const CategorizedProducts = ({ title, slug }: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h3" variant="body1" className={classes.title}>
        {title}
      </Typography>
      <Grid container spacing={2} className={classes.items}>
        {CATEGORIES.map((category) => (
          <Grid key={category.slug} item xs={6} sm={4} md={3}>
            <ProductCard
              img={category.src}
              category={title}
              slug={slug}
              title="BLUEBERRY CUP"
              price={140}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

CategorizedProducts.displayName = "CategorizedProducts";
export default CategorizedProducts;
