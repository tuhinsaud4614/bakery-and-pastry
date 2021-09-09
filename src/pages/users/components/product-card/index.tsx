import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./index.style";

interface Props {
  title: string;
  price: number;
  slug: string;
  category: string;
  img: string;
  featured?: boolean;
}

const ProductCard = ({
  category,
  featured,
  img,
  price,
  slug,
  title,
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
      <CardActionArea onClick={() => push(`/category/${slug}`)}>
        <CardMedia
          component="img"
          title={title}
          image={img}
          width={150}
          height={100}
          style={{ height: "auto" }}
        />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Link to={`/category/${slug}`} className={classes.category}>
          {category}
        </Link>
        <Link to={`/category/${slug}`} className={classes.title}>
          {title}
        </Link>
        <Typography variant="h6" component="h3" className={classes.price}>
          {price}৳
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductCard.displayName = "ProductCard";
export default ProductCard;
