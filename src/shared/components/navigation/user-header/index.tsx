import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import ROUTES from "../../../../routes/constants";
import { useAppDispatch } from "../../../../store";
import { toggleMenu } from "../../../../store/features/settings/index.slice";
import AppLogo from "../../app-logo";
import useStyles from "./index.style";
import SearchBox from "./search-box";

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
          <AppLogo to={ROUTES.user.home.path} />
          <div className={classes.content} />
          <SearchBox />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserHeader;
