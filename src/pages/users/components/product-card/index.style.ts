import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: green["A100"],
      position: "relative",
      height: "100%",
    },
    featured: {
      position: "absolute",
      top: theme.spacing(),
      left: theme.spacing(),
      borderRadius: 0,
      zIndex: 1,
    },
    content: {
      "&:last-child": {
        paddingBottom: theme.spacing(2),
      },
    },
    category: {
      textTransform: "capitalize",
      textDecoration: "none",
      ...theme.typography.body2,
      [theme.breakpoints.down("sm")]: {
        ...theme.typography.body1,
      },
      color: "#7B4B94",
      "&:hover": {
        color: "#505591",
      },
    },
    title: {
      ...theme.typography.body1,
      [theme.breakpoints.down("sm")]: {
        ...theme.typography.h6,
      },
      fontWeight: "bold",
      display: "block",
      textDecoration: "none",
      color: theme.palette.info.main,
      textTransform: "uppercase",
      "&:hover": {
        color: theme.palette.info.dark,
      },
    },
    price: {
      textTransform: "uppercase",
      fontWeight: 600,
    },
  })
);

export default useStyles;
