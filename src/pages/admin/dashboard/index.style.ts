import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: theme.palette.info.dark,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${theme.spacing(30)}px)`,
        marginLeft: theme.spacing(30),
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
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
      justifyContent: "flex-end",
      // [theme.breakpoints.up("sm")]:{
      //   justifyContent: "flex-end",

      // }
    },
    content: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(9),
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
