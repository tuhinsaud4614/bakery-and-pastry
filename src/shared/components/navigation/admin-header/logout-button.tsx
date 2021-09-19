import { IconButton, Snackbar, Tooltip } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { Fragment, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { adminAuthOut } from "../../../../store/features/admin/auth/actions";
import { clearAuthError } from "../../../../store/features/admin/auth/index.slice";

const LogoutButton = () => {
  const { status, error, user } = useAppSelector((state) => state.adminAuth);
  const rdxDispatch = useAppDispatch();

  const logoutHandler = async () => {
    await rdxDispatch(adminAuthOut());
  };
  return (
    <Fragment>
      <Snackbar
        onClose={(_, reasons) => {
          if (reasons === "timeout") {
            rdxDispatch(clearAuthError());
          }
        }}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!error && !!user}
      >
        <Alert severity="success" variant="filled">
          {error?.message}
        </Alert>
      </Snackbar>
      <Tooltip title="Logout from admin" aria-label="logout" arrow>
        <IconButton
          color="inherit"
          aria-label="logout"
          onClick={logoutHandler}
          disabled={status === "pending" && !!user}
        >
          <ExitToApp />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};

LogoutButton.displayName = "LogoutButton";
export default memo(LogoutButton);
