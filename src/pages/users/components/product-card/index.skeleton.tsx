import { Box, Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./index.style";

const ProductCardSkeleton = () => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <Skeleton height={155} variant="rect" />
      <Box p={2}>
        <Skeleton width="30%" />
        <Skeleton width="100%" />
        <Skeleton width="40%" />
      </Box>
    </Card>
  );
};

ProductCardSkeleton.displayName = "ProductCard.Skeleton";
export default ProductCardSkeleton;
