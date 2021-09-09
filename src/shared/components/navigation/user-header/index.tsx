import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.svg";
import ROUTES from "../../../../routes/constants";
import { useAppDispatch } from "../../../../store";
import { toggleMenu } from "../../../../store/features/settings/index.slice";
import useStyles from "./index.style";

const UserHeader = () => {
  const classes = useStyles();
  const rdxDispatch = useAppDispatch();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down("xs"));
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
          <Link to={ROUTES.user.home.path} className={classes.titleLink}>
            <img
              src={logo}
              alt="logo"
              className={classes.title}
              width="100"
              height="48"
            />
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
