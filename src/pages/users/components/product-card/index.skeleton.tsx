import { Box, Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./index.style";

const ProductCardSkeleton = () => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <Skeleton height={155} variant="rect" />
      <Box p={2}>
        <Skeleton width="30%" animation="wave" />
        <Skeleton width="100%" animation="wave" />
        <Skeleton width="40%" animation="wave" />
      </Box>
    </Card>
  );
};

ProductCardSkeleton.displayName = "ProductCard.Skeleton";
export default ProductCardSkeleton;
