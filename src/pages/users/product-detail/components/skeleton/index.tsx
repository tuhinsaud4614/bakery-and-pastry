import { Box, Divider, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles from "../../index.style";

const ProductDetailSkeleton = () => {
  const styles = useStyles();
  return (
    <Grid spacing={2} container>
      <Grid item xs={12} sm={6} md={5} className={styles.imageView}>
        <Skeleton height="100%" variant="rect" />
      </Grid>
      <Grid item xs={12} sm={6} md={7} style={{ overflow: "hidden" }}>
        <Skeleton height="40px" width="75%" variant="rect" animation="wave" />
        <Skeleton width="25%" animation="wave" />
        <Divider style={{ marginTop: "8px" }} light />
        <Box display="flex" alignItems="center" my={2}>
          <Skeleton
            height="35px"
            width="33%"
            variant="rect"
            style={{ borderRadius: "8px" }}
          />
          <Skeleton
            width="33%"
            animation="wave"
            style={{ marginLeft: "16px" }}
          />
        </Box>
        <Divider light />
        <Box display="flex" alignItems="center" my={2}>
          <Skeleton
            height="30px"
            width="30px"
            variant="rect"
            style={{ borderRadius: "8px" }}
          />
          <Skeleton
            height="30px"
            width="30px"
            variant="rect"
            style={{ borderRadius: "8px", marginLeft: "16px" }}
          />
          <Skeleton
            height="30px"
            width="30px"
            variant="rect"
            style={{ borderRadius: "8px", marginLeft: "16px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

ProductDetailSkeleton.displayName = "ProductDetail.Skeleton";
export default ProductDetailSkeleton;
