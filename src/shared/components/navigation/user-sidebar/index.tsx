import {
  Box,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { toggleMenu } from "../../../../store/features/settings/index.slice";
import useStyles from "./index.style";

const Content = () => {
  const classes = useStyles();
  return (
    <Box component="aside" flexShrink="0" className={classes.root}>
      <Typography variant="body2" component="h3" className={classes.title}>
        Categories
      </Typography>
      <ul className={classes.items}>
        <li>
          <NavLink to="/abc" className={classes.item} exact>
            Pastry, Cup Pastry & Tart
          </NavLink>
        </li>
        <li>
          <NavLink to="/xyz" className={classes.item} exact>
            Cake
          </NavLink>
        </li>
        <li>
          <NavLink to="/cc" className={classes.item} exact>
            Sweets
          </NavLink>
        </li>
        <li>
          <NavLink to="/b" className={classes.item} exact>
            Biscuits & Toast
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={classes.item} exact>
            Others
          </NavLink>
        </li>
      </ul>
    </Box>
  );
};

const UserSidebar = () => {
  const { open } = useAppSelector((state) => state.settings.sidebar);
  const rdxDispatch = useAppDispatch();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down("xs"));

  return matches ? (
    <Drawer anchor="left" open={open} onClose={() => rdxDispatch(toggleMenu())}>
      <Content />
    </Drawer>
  ) : (
    <Content />
  );
};

export default UserSidebar;
