import Carousel from "../../../shared/components/carousel";
import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";
import CategorizedProducts from "./components/categorized-products";
import FeatureProducts from "./components/feature-products";
import useStyles from "./index.style";

const Home = () => {
  const classes = useStyles();
  return (
    <Wrapper
      sideChild={
        <div className={classes.sideChild}>
          <Carousel classes={{ root: classes.sliders }} autoplay paginate>
            {CATEGORIES.map((category, i) => (
              <img
                width="150"
                height="150"
                key={category.slug}
                src={category.src}
                srcSet={category.srcSet}
                alt={category.name}
                title={category.name}
              />
            ))}
          </Carousel>
        </div>
      }
    >
      <FeatureProducts />
      {CATEGORIES.map((category) => (
        <CategorizedProducts
          key={category.slug}
          title={category.name}
          slug={category.slug}
        />
      ))}
    </Wrapper>
  );
};

Home.displayName = "Home";
export default Home;
