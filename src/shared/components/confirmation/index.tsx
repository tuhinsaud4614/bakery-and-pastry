import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogContentTextProps,
  DialogTitle,
  PropTypes,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { ReactNode } from "react";
import { ICustomError } from "../../constants";
import LoadingButton from "../loading-button";

interface Props {
  loading?: boolean;
  error?: ICustomError;
  confirm: boolean;
  onClose(): void;
  onConfirm(): void;
  headerText?: string;
  children: ReactNode | ReactNode[];
  messageProps?: DialogContentTextProps;
  actionAgreeColor?: PropTypes.Color;
  actionDisagreeColor?: PropTypes.Color;
}

const Confirmation = ({
  loading = false,
  error,
  confirm,
  onClose,
  children,
  headerText,
  messageProps,
  onConfirm,
  actionAgreeColor = "secondary",
  actionDisagreeColor = "default",
}: Props) => {
  return (
    <Dialog
      open={confirm}
      aria-labelledby="confirmation"
      aria-describedby="confirmation-description"
    >
      {headerText && <DialogTitle>{headerText}</DialogTitle>}
      <DialogContent>
        {error && (
          <Alert severity="error" style={{ marginBottom: 8 }}>
            {error.title && <AlertTitle>{error.title}</AlertTitle>}
            {error.message}{" "}
            {error.messageStrong && <strong>{error.messageStrong}</strong>}
          </Alert>
        )}
        <DialogContentText {...messageProps} id="confirmation-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color={actionDisagreeColor}
          onClick={onClose}
          aria-label="cancel confirmation"
        >
          Disagree
        </Button>
        <LoadingButton
          aria-label="confirmation"
          type="button"
          variant="text"
          onClick={onConfirm}
          disabled={loading}
          loading={loading}
          color={actionAgreeColor}
          autoFocus
        >
          Agree
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

Confirmation.displayName = "Confirmation";
export default Confirmation;
