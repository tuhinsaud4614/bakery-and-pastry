import Wrapper from "../components/Wrapper";
import FeatureProducts from "./components/feature-products";
// import useStyles from "./index.style";

const Home = () => {
  // const classes = useStyles();
  return (
    <Wrapper sideChild={"sliders"}>
      <FeatureProducts />
    </Wrapper>
  );
};

Home.displayName = "Home";
export default Home;
