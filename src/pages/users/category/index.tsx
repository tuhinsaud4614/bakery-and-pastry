import { Redirect, useParams } from "react-router-dom";

import ROUTES from "../../../routes/constants";
import Carousel from "../../../shared/components/carousel";
import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();

  // If invalid found redirect to home
  const valid = CATEGORIES.some((category) => category.slug === slug);
  if (!valid) {
    return <Redirect to={ROUTES.user.home.path} />;
  }

  return (
    <Wrapper sideChild={"hello"}>
      <Carousel />
    </Wrapper>
  );
};

export default Category;
