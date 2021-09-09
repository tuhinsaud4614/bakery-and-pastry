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
import { CATEGORIES } from "../../../constants";
import useStyles from "./index.style";

const Content = () => {
  const classes = useStyles();
  return (
    <Box component="aside" flexShrink="0" className={classes.root}>
      <Typography variant="body2" component="h3" className={classes.title}>
        Categories
      </Typography>
      <ul className={classes.items}>
        {CATEGORIES.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/category/${category.slug}`}
              className={classes.item}
              exact
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Box>
  );
};

interface Props {
  hide?: boolean;
}

const UserSidebar = ({ hide = false }: Props) => {
  const { open } = useAppSelector((state) => state.settings.sidebar);
  const rdxDispatch = useAppDispatch();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down("xs"));

  return matches ? (
    <Drawer anchor="left" open={open} onClose={() => rdxDispatch(toggleMenu())}>
      <Content />
    </Drawer>
  ) : !hide ? (
    <Content />
  ) : null;
};

export default UserSidebar;
