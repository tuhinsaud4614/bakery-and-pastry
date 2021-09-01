import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";
import CategorizedProducts from "./components/categorized-products";
import FeatureProducts from "./components/feature-products";
// import useStyles from "./index.style";

const Home = () => {
  // const classes = useStyles();
  return (
    <Wrapper sideChild={"sliders"}>
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
