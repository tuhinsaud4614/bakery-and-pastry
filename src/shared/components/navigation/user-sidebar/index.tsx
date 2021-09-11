import {
  Box,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { toggleMenu } from "../../../../store/features/settings/index.slice";
import { CATEGORIES } from "../../../constants";
import useStyles from "./index.style";

interface ContentProps {
  classes?: {
    root?: string;
    title?: string;
    items?: string;
    item?: string;
  };
}

const Content = ({ classes }: ContentProps) => {
  const styles = useStyles();
  return (
    <Box
      component="aside"
      flexShrink="0"
      className={classNames(styles.root, classes?.root)}
    >
      <Typography
        variant="body2"
        component="h3"
        className={classNames(styles.title, classes?.title)}
      >
        Categories
      </Typography>
      <ul className={classNames(styles.items, classes?.items)}>
        {CATEGORIES.map((category) => (
          <li key={category.slug} className={classes?.item}>
            <NavLink
              to={`/category/${category.slug}`}
              className={styles.item}
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
  classes?: {
    drawer?: string;
    root?: string;
    title?: string;
    items?: string;
    item?: string;
  };
}

const UserSidebar = ({ classes, hide = false }: Props) => {
  const { open } = useAppSelector((state) => state.settings.sidebar);
  const rdxDispatch = useAppDispatch();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down("xs"));

  const content = (
    <Content
      classes={{
        root: classes?.root,
        title: classes?.title,
        items: classes?.items,
        item: classes?.item,
      }}
    />
  );

  return matches ? (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => rdxDispatch(toggleMenu())}
      className={classes?.drawer}
    >
      {content}
    </Drawer>
  ) : !hide ? (
    content
  ) : null;
};

export default UserSidebar;
