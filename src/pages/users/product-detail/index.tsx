import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import { Redirect, useParams } from "react-router";
import ROUTES from "../../../routes/constants";
import Carousel from "../../../shared/components/carousel";
import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";
import RelatedProducts from "./components/related-products";
import ShareLinks from "./components/share-links";
import useStyles from "./index.style";

const Product = () => {
  const styles = useStyles();
  return (
    <Grid spacing={2} container>
      <Grid item xs={12} sm={6} md={5} className={styles.imageView}>
        <Carousel classes={{ root: styles.sliders }} actionBtn>
          <Carousel.Item>
            <img
              src={CATEGORIES[0].src}
              alt={CATEGORIES[0].name}
              title={CATEGORIES[0].name}
              srcSet={CATEGORIES[0].srcSet}
            />
          </Carousel.Item>
        </Carousel>
      </Grid>
      <Grid item xs={12} sm={6} md={7} style={{ overflow: "hidden" }}>
        <Typography className={styles.title} component="h1" gutterBottom>
          MIX-BISCUIT (BABY+PLAIN+STAR) 300 gm
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          250৳
        </Typography>
        <Divider light />
        <Box display="flex" alignItems="center" my={2}>
          <Button
            href="https://www.facebook.com/"
            variant="outlined"
            color="secondary"
          >
            Contact to order
          </Button>
          <Typography
            variant="caption"
            component="span"
            style={{ padding: "0 8px" }}
          >
            or
          </Typography>
          <Typography variant="body1" component="p">
            Call us <b>01712969807</b>
          </Typography>
        </Box>
        <Divider light />
        <ShareLinks />
      </Grid>
    </Grid>
  );
};
Product.displayName = "Product";

// Product detail
const ProductDetail = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <Redirect to={ROUTES.user.home.path} />;
  }

  return (
    <Wrapper hideSidebar>
      <Product />
      <RelatedProducts />
    </Wrapper>
  );
};

ProductDetail.displayName = "Product.Detail";
export default ProductDetail;
