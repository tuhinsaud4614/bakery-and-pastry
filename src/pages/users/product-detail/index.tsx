import { Redirect, useParams } from "react-router";
import ROUTES from "../../../routes/constants";
import Carousel from "../../../shared/components/carousel";
import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";

const ProductDetail = () => {
  const { id } = useParams<{ id?: string }>();
  if (!id) {
    return <Redirect to={ROUTES.user.home.path} />;
  }

  return (
    <Wrapper hideSidebar>
      <Carousel actionBtn paginate autoplay>
        <Carousel.Item>
          <img
            src={CATEGORIES[0].src}
            alt={CATEGORIES[0].name}
            title={CATEGORIES[0].name}
            srcSet={CATEGORIES[0].srcSet}
          />
        </Carousel.Item>
      </Carousel>
      {/* <Grid spacing={2} container>
        <Grid item xs={12}>
          <Carousel actionBtn>
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
      </Grid> */}
    </Wrapper>
  );
};

ProductDetail.displayName = "Product.Detail";
export default ProductDetail;
