import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";

import logo from "../../../../Images/logo.svg";
import useStyles from "./index.style";

const UserHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" className={classes.title} />
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
