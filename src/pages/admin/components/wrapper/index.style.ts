import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    content: {
      padding: theme.spacing(9, 2, 2),
      [theme.breakpoints.up("sm")]: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexGrow: 1,
        marginLeft: -theme.spacing(30),
      },
    },
    contentShift: {
      [theme.breakpoints.up("sm")]: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  })
);

export default useStyles;
