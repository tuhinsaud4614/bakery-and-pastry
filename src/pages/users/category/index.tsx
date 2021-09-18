import { where } from "@firebase/firestore";
import { Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import others300 from "../../../images/others-300w.jpeg";
import others from "../../../images/others.jpeg";
import { CATEGORIES, convertSlugToTitle } from "../../../shared/constants";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchUsersAllProducts } from "../../../store/features/users/all-products/actions";
import { removeAllProducts } from "../../../store/features/users/all-products/index.slice";
import ProductCard from "../components/product-card";
import ProductCardSkeleton from "../components/product-card/index.skeleton";
import Wrapper from "../components/Wrapper";
import useStyles from "./index.style";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const styles = useStyles();

  const { error, data, status } = useAppSelector(
    (state) => state.usersAllProducts
  );
  const rdxDispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await rdxDispatch(
        fetchUsersAllProducts([where("category", "==", slug)])
      ).unwrap();
    })();

    return () => {
      rdxDispatch(removeAllProducts());
    };
  }, [rdxDispatch, slug]);

  // If invalid found redirect to home
  const category = useMemo(() => {
    const category = CATEGORIES.find((category) => category.slug === slug);

    return category;
  }, [slug]);

  let content: JSX.Element | JSX.Element[] | null = null;
  if (status === "pending") {
    content = (
      <Grid container spacing={2} className={styles.items}>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <ProductCardSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  } else if (error) {
    content = (
      <Alert severity="error" className={styles.alert}>
        {error.title && <AlertTitle>{error.title}</AlertTitle>}
        {error.message}
      </Alert>
    );
  } else if (data.length === 0) {
    content = (
      <Alert severity="warning" className={styles.alert}>
        <AlertTitle>No Product Found</AlertTitle>
        There is no product for the category <b>({convertSlugToTitle(slug)})</b>
      </Alert>
    );
  } else if (data.length) {
    content = (
      <Grid container spacing={2} className={styles.items}>
        {data.map((product) => (
          <Grid key={product.id} item xs={6} sm={4} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Wrapper
      sideChild={
        <div className={styles.sideChild}>
          <img
            width="150"
            height="150"
            className={styles.sideChildImage}
            src={category ? category.src : others}
            srcSet={
              category ? category.srcSet : `${others300} 300w, ${others} 1200w`
            }
            alt={convertSlugToTitle(slug)}
            title={convertSlugToTitle(slug)}
          />
        </div>
      }
    >
      {content}
    </Wrapper>
  );
};

export default Category;
