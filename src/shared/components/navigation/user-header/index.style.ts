import { alpha, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
    content: {
      flexGrow: 1,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    inputRoot: {
      color: "inherit",
      // vertical padding + font size from searchIcon
      marginRight: `calc(1em + ${theme.spacing(4)}px)`,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: theme.spacing(),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
    searchIcon: {
      top: 0,
      right: 0,
      cursor: "pointer",
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default useStyles;
