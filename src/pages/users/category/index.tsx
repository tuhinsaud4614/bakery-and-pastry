import { Redirect, useParams } from "react-router-dom";
import ROUTES from "../../../routes/constants";
import Carousel from "../../../shared/components/carousel";
import { CATEGORIES } from "../../../shared/constants";
import Wrapper from "../components/Wrapper";

const list = [
  "https://material-ui.com/static/images/image-list/burgers.jpg",
  "https://material-ui.com/static/images/image-list/breakfast.jpg",
  "https://material-ui.com/static/images/image-list/vegetables.jpg",
  "https://material-ui.com/static/images/cards/paella.jpg",
  "https://material-ui.com/static/images/image-list/olive.jpg",
];

const Category = () => {
  const { slug } = useParams<{ slug: string }>();

  // If invalid found redirect to home
  const valid = CATEGORIES.some((category) => category.slug === slug);
  if (!valid) {
    return <Redirect to={ROUTES.user.home.path} />;
  }

  return (
    <Wrapper sideChild={"hello"}>
      <Carousel autoplay paginate actionBtn>
        {list.map((li, i) => (
          <img key={i} src={li} alt="ok" title="ok" />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Category;
