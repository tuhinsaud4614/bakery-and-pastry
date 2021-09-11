import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: theme.spacing(30),
      [theme.breakpoints.up("sm")]: {
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: theme.spacing(30),
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "space-between",
    },
  })
);

export default useStyles;
