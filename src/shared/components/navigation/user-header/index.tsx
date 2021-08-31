import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";

import { useAppDispatch } from "../../../../store";
import { toggleMenu } from "../../../../store/features/settings/index.slice";
import ROUTES from "../../../../routes/constants";
import logo from "../../../../images/logo.svg";
import useStyles from "./index.style";
import { useMediaQuery } from "@material-ui/core";

const UserHeader = () => {
  const classes = useStyles();
  const rdxDispatch = useAppDispatch();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down("xs"));
  console.log(matches);
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg" className={classes.root}>
        <Toolbar>
          {matches && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => rdxDispatch(toggleMenu())}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to={ROUTES.user.home.path}>
            <img src={logo} alt="logo" className={classes.title} />
          </Link>
          <div className={classes.content}></div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserHeader;
