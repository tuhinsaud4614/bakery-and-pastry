import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Fragment, memo, useState } from "react";
import { IProduct } from "../../../../../shared/constants";
import { useAppDispatch } from "../../../../../store";
import { clearAdminProductError } from "../../../../../store/features/admin/product/index.slice";
import EditForm from "./edit-form";

interface Props {
  product: IProduct;
  onEditComplete?(message: string): void;
}

const EditProduct = ({
  product: { category, featured, id, image, link, price, title },
  onEditComplete,
}: Props) => {
  const [openForm, setOpenForm] = useState(false);

  const rdxDispatch = useAppDispatch();

  const onClose = () => {
    setOpenForm(false);
    rdxDispatch(clearAdminProductError("updating"));
  };

  console.log("hello");

  return (
    <Fragment>
      <EditForm
        open={openForm}
        product={{ category, featured, id, image, link, price, title }}
        onClose={onClose}
        onEditComplete={onEditComplete}
      />
      <IconButton
        color="primary"
        onClick={() => setOpenForm(true)}
        aria-label="edit product"
      >
        <Edit />
      </IconButton>
    </Fragment>
  );
};

EditProduct.displayName = "EditProduct";
export default memo(
  EditProduct,
  (prev, next) =>
    prev.product.id === next.product.id &&
    prev.product.category === next.product.category &&
    prev.product.featured === next.product.featured &&
    prev.product.image.src === next.product.image.src &&
    prev.product.link === next.product.link &&
    prev.product.price === next.product.price &&
    prev.product.title === next.product.title
);
