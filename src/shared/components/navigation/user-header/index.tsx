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
import { KeyboardEvent, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ROUTES from "../../../../routes/constants";
import { useAppDispatch } from "../../../../store";
import { onSearch } from "../../../../store/features/search/index.slice";
import { toggleMenu } from "../../../../store/features/settings/index.slice";
import AppLogo from "../../app-logo";
import useStyles from "./index.style";

const UserHeader = () => {
  const classes = useStyles();
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const rdxDispatch = useAppDispatch();
  const { push, replace } = useHistory();
  const { pathname } = useLocation();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down("xs"));

  const clickHandler = () => {
    if (ref.current?.value) {
      rdxDispatch(onSearch(ref.current.value));
      if (pathname === ROUTES.user.search.path) {
        return replace(ROUTES.user.search.path);
      }
      push(ROUTES.user.search.path);
    }
  };

  const pressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  // const changeHandler = (
  //   e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  // ) => rdxDispatch(onSearch(e.target.value));

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
          <AppLogo to={ROUTES.user.home.path} />
          <div className={classes.content} />
          <div className={classes.search}>
            <InputBase
              inputRef={ref}
              // onChange={changeHandler}
              onKeyPress={pressHandler}
              // value={searchValue}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div
              className={classes.searchIcon}
              aria-label="search"
              onClick={clickHandler}
            >
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserHeader;
