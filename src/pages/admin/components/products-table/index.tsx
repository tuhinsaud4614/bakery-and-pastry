import {
  PaperProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import classNames from "classnames";
import { ChangeEvent, ReactNode, useState } from "react";
import ContentBox from "../content-box";
import ProductsTableSkeleton from "./index.skeleton";
import useStyles from "./index.style";

interface Props {
  rootProps?: PaperProps;
  gutterTop?: number;
  gutterBottom?: number;
  gutterLeft?: number;
  gutterRight?: number;
  title: string;
  rows: string[];
  data: {
    id: string;
    title: string;
    category: string;
    price: number;
    img: string;
    featured: boolean;
  }[];
  loadingData?: boolean;
  error?: {
    title?: string;
    message: string;
    messageStrong?: string;
  };
  size?: "medium" | "small";
  actions?: (product: {
    id: string;
    title: string;
    category: string;
    price: number;
    img: string;
    featured: boolean;
  }) => ReactNode | ReactNode[];
  showId?: boolean;
  showPaginate?: boolean;
}

const ProductsTable = ({
  gutterTop,
  gutterBottom,
  gutterLeft,
  gutterRight,
  title,
  rows,
  data = [],
  loadingData = false,
  error,
  actions,
  size = "medium",
  showId = false,
  showPaginate = false,
  rootProps,
}: Props) => {
  const styles = useStyles({
    gutterTop,
    gutterBottom,
    gutterLeft,
    gutterRight,
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loadingData) {
    return (
      <ContentBox className={styles.root} title={title} rootProps={rootProps}>
        <ProductsTableSkeleton
          rows={rows.length + (showId ? 1 : 0) + (!!actions ? 1 : 0)}
        />
      </ContentBox>
    );
  }

  if (error) {
    return (
      <ContentBox
        className={styles.root}
        title={title}
        rootProps={rootProps}
        alert={{
          props: {
            severity: "error",
          },
          title: error.title,
          message: error.message,
          messageStrong: error.messageStrong,
        }}
      />
    );
  }

  if (data.length === 0) {
    return (
      <ContentBox
        className={styles.root}
        title={title}
        rootProps={rootProps}
        alert={{
          props: {
            severity: "warning",
          },
          title: "No Found",
          message: "There is no product — ",
          messageStrong: "please add some products!",
        }}
      />
    );
  }

  return (
    <ContentBox className={styles.root} title={title} rootProps={rootProps}>
      {data.length > 1 && (
        <TableContainer>
          <Table aria-label="products table" size={size}>
            <TableHead>
              <TableRow>
                {showId && (
                  <TableCell className={styles.tableHeadCell}>ID</TableCell>
                )}
                {rows.map((row, index) => (
                  <TableCell key={index} className={styles.tableHeadCell}>
                    {row}
                  </TableCell>
                ))}

                {!!actions && (
                  <TableCell className={styles.tableHeadCell}>Action</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, index) => (
                  <TableRow key={index}>
                    {showId && (
                      <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                    )}
                    <TableCell
                      component="th"
                      scope="row"
                      className={classNames(
                        product.featured && styles.featured
                      )}
                      style={{ textTransform: "capitalize" }}
                    >
                      {product.title}
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <img
                        className={styles.img}
                        height="70"
                        width="50"
                        src={product.img}
                        alt={product.title}
                        title={product.title}
                      />
                    </TableCell>
                    <TableCell>৳{product.price}</TableCell>
                    {!!actions && (
                      <TableCell className={styles.action}>
                        {actions(product)}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {showPaginate && (
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </ContentBox>
  );
};
ProductsTable.displayName = "ProductsTable";
export default ProductsTable;
