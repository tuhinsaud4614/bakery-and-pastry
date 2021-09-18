import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { convertSlugToTitle, IProduct } from "../../../../shared/constants";
import useStyles from "./index.style";

interface Props {
  product: IProduct;
}

const ProductCard = ({
  product: { category, featured, price, image, id, title },
}: Props) => {
  const classes = useStyles();
  const { push } = useHistory();
  return (
    <Card className={classes.root}>
      {featured && (
        <Chip
          label="HOT"
          color="secondary"
          className={classes.featured}
          size="small"
          component="span"
        />
      )}
      <CardActionArea onClick={() => push(`/product/${category}/${id}`)}>
        <CardMedia
          component="img"
          title={title}
          image={image.src}
          width={150}
          height={100}
          style={{ height: "auto", maxHeight: "155px" }}
        />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Link to={`/category/${category}`} className={classes.category}>
          {convertSlugToTitle(category)}
        </Link>
        <Link to={`/product/${category}/${id}`} className={classes.title}>
          {title}
        </Link>
        <Typography variant="body1" component="h3" className={classes.price}>
          {price}৳
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductCard.displayName = "ProductCard";
export default ProductCard;
