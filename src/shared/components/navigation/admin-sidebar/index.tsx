import {
  Divider,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { toggleAdminMenu } from "../../../../store/features/settings/index.slice";
import useStyles from "./index.style";
import Items from "./Items";

const AdminSidebar = () => {
  const styles = useStyles();
  const { open } = useAppSelector((state) => state.settings.adminSidebarOpen);
  const rdxDispatch = useAppDispatch();
  const theme = useTheme();
  const queries = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 600px)");

    if (matches) {
      rdxDispatch(toggleAdminMenu(true));
    }
  }, [rdxDispatch]);

  const content = (
    <>
      <div className={styles.drawerHeader}>
        <Typography variant="h6" component="h1">
          Admin Panel
        </Typography>
        <IconButton
          aria-label="close drawer"
          onClick={() => rdxDispatch(toggleAdminMenu(false))}
        >
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <Items />
    </>
  );

  return queries ? (
    <Drawer
      className={styles.drawer}
      anchor="left"
      open={open}
      variant="persistent"
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      {content}
    </Drawer>
  ) : (
    <Drawer
      className={styles.drawer}
      variant="temporary"
      onClose={() => rdxDispatch(toggleAdminMenu(false))}
      anchor="left"
      open={open}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      {content}
    </Drawer>
  );
};
AdminSidebar.displayName = "AdminSidebar";
export default AdminSidebar;
