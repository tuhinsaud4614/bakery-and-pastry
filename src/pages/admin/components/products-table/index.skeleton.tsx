import { Box, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import classNames from "classnames";
import { Fragment } from "react";
import useStyles from "./index.style";

interface Props {
  rows: number;
}

const ProductsTableSkeleton = ({ rows }: Props) => {
  const styles = useStyles({});
  return (
    <>
      <Divider />
      {Array.from({ length: rows }).map((_, topIndex) => (
        <Fragment key={topIndex}>
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            className={classNames(topIndex === 0 && styles.skeletonHeadCell)}
          >
            {Array.from({ length: rows }).map((_, index) => (
              <Box
                key={index}
                flexGrow="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                py={2}
              >
                <Skeleton width="85%" animation="wave" variant="text" />
              </Box>
            ))}
          </Box>
          <Divider />
        </Fragment>
      ))}
    </>
  );
};

ProductsTableSkeleton.displayName = "ProductsTableSkeleton";
export default ProductsTableSkeleton;
