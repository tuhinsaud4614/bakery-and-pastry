import { IconButton, Snackbar, Tooltip } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { getAuth, signOut } from "firebase/auth";
import { Fragment, memo, useState } from "react";

const LogoutButton = () => {
  const [error, setError] = useState<string | null>(null);

  const logoutHandler = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      setError("Logout failed!");
    }
  };
  return (
    <Fragment>
      <Snackbar
        onClose={(_, reasons) => {
          if (reasons === "timeout") {
            setError(null);
          }
        }}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!error}
      >
        <Alert severity="success" variant="filled">
          {error}
        </Alert>
      </Snackbar>
      <Tooltip title="Logout from admin" aria-label="logout" arrow>
        <IconButton color="inherit" aria-label="logout" onClick={logoutHandler}>
          <ExitToApp />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};

LogoutButton.displayName = "LogoutButton";
export default memo(LogoutButton);
