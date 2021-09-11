import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import classNames from "classnames";
import ROUTES from "../../../../routes/constants";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { toggleAdminMenu } from "../../../../store/features/settings/index.slice";
import AppLogo from "../../app-logo";
import useStyles from "./index.style";

const AdminHeader = () => {
  const styles = useStyles();
  const { open } = useAppSelector((state) => state.settings.adminSidebarOpen);
  const rdxDispatch = useAppDispatch();
  return (
    <AppBar
      position="fixed"
      className={classNames(styles.appBar, open && styles.appBarShift)}
    >
      <Toolbar>
        {!open && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => rdxDispatch(toggleAdminMenu(true))}
            edge="start"
          >
            <Menu />
          </IconButton>
        )}
        <AppLogo to={ROUTES.admin.dashboard.path} />
      </Toolbar>
    </AppBar>
  );
};

AdminHeader.displayName = "AdminHeader";
export default AdminHeader;
