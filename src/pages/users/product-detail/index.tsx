import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../../shared/components/carousel";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchUsersSingleProduct } from "../../../store/features/users/single-product/actions";
import { removeProduct } from "../../../store/features/users/single-product/index.slice";
import Wrapper from "../components/Wrapper";
import RelatedProducts from "./components/related-products";
import ShareLinks from "./components/share-links";
import ProductDetailSkeleton from "./components/skeleton";
import useStyles from "./index.style";

const Product = () => {
  const styles = useStyles();
  const { productId } =
    useParams<{ categorySlug?: string; productId?: string }>();

  const { error, product, status } = useAppSelector(
    (state) => state.usersSingleProduct
  );
  const rdxDispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      const asyncProduct = async () => {
        await rdxDispatch(fetchUsersSingleProduct(productId)).unwrap();
      };

      asyncProduct();
    }
    return () => {
      rdxDispatch(removeProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rdxDispatch]);

  if (status === "pending") {
    return <ProductDetailSkeleton />;
  }

  if (error) {
    return <p>error</p>;
  }

  if (!product) {
    return <p>hello</p>;
  }

  return (
    <Grid spacing={2} container>
      <Grid item xs={12} sm={6} md={5} className={styles.imageView}>
        <Carousel classes={{ root: styles.sliders }} actionBtn>
          <Carousel.Item>
            <img
              src={product.image.src}
              alt={product.title}
              title={product.title}
              width="150"
              height="300"
            />
          </Carousel.Item>
        </Carousel>
      </Grid>
      <Grid item xs={12} sm={6} md={7} style={{ overflow: "hidden" }}>
        <Typography className={styles.title} component="h1" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          {product.price}৳
        </Typography>
        <Divider light />
        <Box display="flex" alignItems="center" my={2}>
          <Button
            href={product.link}
            target="_blank"
            rel="noreferrer"
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
  return (
    <Wrapper hideSidebar>
      <Product />
      <RelatedProducts />
    </Wrapper>
  );
};

ProductDetail.displayName = "Product.Detail";
export default ProductDetail;
