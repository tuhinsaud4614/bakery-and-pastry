import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import { ReactNode } from "react";
import ProductCardSkeleton from "../product-card/index.skeleton";
import useStyles from "./index.style";

interface Props {
  title: string;
  children?: ReactNode | ReactNode[];
}

const ProductsContainer = ({ title, children }: Props) => {
  const styles = useStyles();
  return (
    <Paper className={styles.root} elevation={0} square>
      <Typography variant="h6" component="h3" className={styles.title}>
        {title}
      </Typography>
      <Divider />
      {children}
    </Paper>
  );
};

ProductsContainer.displayName = "ProductsContainer";
export default ProductsContainer;

export const ProductsLoading = ({
  title,
  count = 4,
}: {
  title: string;
  count?: number;
}) => {
  const styles = useStyles();
  return (
    <ProductsContainer title={title}>
      <Grid container spacing={2} className={styles.items}>
        {Array.from({ length: count }, (_, i) => i + 1).map((index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <ProductCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </ProductsContainer>
  );
};

ProductsLoading.displayName = "ProductsLoading";
