import { Grid } from "@material-ui/core";
import { useAppSelector } from "../../../../../store";
import ProductCard from "../../../components/product-card";
import ProductsContainer, {
  ProductsLoading,
} from "../../../components/products-container";
import useStyles from "./index.style";

interface Props {
  title: string;
  slug: string;
}

const CategorizedProducts = ({ title, slug }: Props) => {
  const classes = useStyles();

  const { error, data, status } = useAppSelector(
    (state) => state.usersAllProducts
  );

  if (status === "pending") {
    return <ProductsLoading title={title} count={4} />;
  }

  const newData = data.filter((product) => product.category === slug);
  if (data.length === 0 || newData.length === 0 || error) {
    return null;
  }

  return (
    <ProductsContainer title={title}>
      <Grid container spacing={2} className={classes.items}>
        {newData.slice(0, 4).map((product) => (
          <Grid key={product.id} item xs={6} sm={4} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </ProductsContainer>
  );
};

CategorizedProducts.displayName = "CategorizedProducts";
export default CategorizedProducts;
