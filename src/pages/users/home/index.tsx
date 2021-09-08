import Carousel from "../../../shared/components/carousel";
import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";
import CategorizedProducts from "./components/categorized-products";
import FeatureProducts from "./components/feature-products";
import useStyles from "./index.style";

const list = [
  "https://material-ui.com/static/images/image-list/burgers.jpg",
  "https://material-ui.com/static/images/image-list/breakfast.jpg",
  "https://material-ui.com/static/images/image-list/vegetables.jpg",
  "https://material-ui.com/static/images/cards/paella.jpg",
  "https://material-ui.com/static/images/image-list/olive.jpg",
];

const Home = () => {
  const classes = useStyles();
  return (
    <Wrapper
      sideChild={
        <div className={classes.sideChild}>
          <Carousel classes={{ root: classes.sliders }} autoplay paginate>
            {list.map((li, i) => (
              <img key={i} src={li} alt="ok" title="ok" />
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
