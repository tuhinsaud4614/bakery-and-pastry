import { Grid } from "@material-ui/core";
import { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import ROUTES from "../../../routes/constants";
import { CATEGORIES } from "../../../shared/constants";
import ProductCard from "../components/product-card";
import Wrapper from "../components/Wrapper";
import useStyles from "./index.style";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const styles = useStyles();

  // If invalid found redirect to home
  const category = useMemo(() => {
    const category = CATEGORIES.find((category) => category.slug === slug);
    return category;
  }, [slug]);

  if (!category) {
    return <Redirect to={ROUTES.user.home.path} />;
  }

  return (
    <Wrapper
      sideChild={
        <div className={styles.sideChild}>
          <img
            width="150"
            height="150"
            className={styles.sideChildImage}
            src={category.src}
            srcSet={category.srcSet}
            alt={category.name}
            title={category.name}
          />
        </div>
      }
    >
      <Grid container spacing={2} className={styles.items}>
        {CATEGORIES.map((category) => (
          <Grid key={category.slug} item xs={6} sm={4} md={3}>
            {/* <ProductCardSkeleton /> */}
            <ProductCard
              featured={true}
              img={category.src}
              category={category.name}
              slug={category.slug}
              title="BLUEBERRY CUP"
              price={140}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Category;
