import { Redirect, useParams } from "react-router-dom";

import ROUTES from "../../../routes/constants";
import { CATEGORIES } from "../../../shared/constants";

const Category = () => {
  
  const { slug } = useParams<{ slug: string }>();

  // If invalid found redirect to home
  const valid = CATEGORIES.some((category) => category.slug === slug);
  if (!valid) {
    return <Redirect to={ROUTES.user.home.path} />;
  }

  return null;
};

export default Category;
