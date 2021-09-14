import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Fragment, useState } from "react";
import Confirmation from "../../../../../shared/components/confirmation";
import { IProduct } from "../../../../../shared/constants";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { deleteAdminProduct } from "../../../../../store/features/admin/product/actions";
import { clearAdminProductError } from "../../../../../store/features/admin/product/index.slice";

interface Props {
  product: IProduct;
  onDeleteComplete?(text: string): void;
}

const DeleteProduct = ({ product, onDeleteComplete }: Props) => {
  const [confirm, setConfirm] = useState(false);

  const rdxDispatch = useAppDispatch();
  const { error, status } = useAppSelector((state) => state.adminProduct);

  const onDelete = async () => {
    const resultAction = await rdxDispatch(deleteAdminProduct(product));
    if (
      !!onDeleteComplete &&
      deleteAdminProduct.fulfilled.match(resultAction)
    ) {
      onDeleteComplete(`Product ${product.title} deleted successfully!`);
    }
  };

  const onClose = () => {
    setConfirm(false);
    rdxDispatch(clearAdminProductError("deleting"));
  };
  return (
    <Fragment>
      <Confirmation
        confirm={confirm}
        onClose={onClose}
        onConfirm={onDelete}
        messageProps={{ color: "primary" }}
        loading={status.deleting === "pending"}
        error={error.deleting ? { message: error.deleting.message } : undefined}
      >
        Do you really want to delete <b>{product.title}</b>
      </Confirmation>

      <IconButton
        color="secondary"
        onClick={() => setConfirm(true)}
        aria-label="delete product"
      >
        <Delete />
      </IconButton>
    </Fragment>
  );
};

DeleteProduct.displayName = "DeleteProduct";
export default DeleteProduct;
