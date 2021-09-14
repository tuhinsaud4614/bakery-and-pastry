import { Snackbar, SnackbarOrigin } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import { ReactNode } from "react";

interface Props {
  show: boolean;
  onClose(): void;
  autoHideDuration?: number;
  props?: AlertProps;
  children: ReactNode;
  origin?: SnackbarOrigin;
}

const Toast = ({
  children,
  onClose,
  show = false,
  autoHideDuration,
  origin = { vertical: "top", horizontal: "right" },
  props,
}: Props) => {
  return (
    <Snackbar
      onClose={(_, reasons) => {
        if (reasons === "timeout") {
          onClose();
        }
      }}
      autoHideDuration={autoHideDuration}
      anchorOrigin={origin}
      open={show}
    >
      <Alert {...props}>{children}</Alert>
    </Snackbar>
  );
};

Toast.displayName = "Toast";
export default Toast;
