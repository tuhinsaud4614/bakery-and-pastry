import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: deepPurple[50],
      position: "relative",
      height: "100%"
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
      ...theme.typography.caption,
      color: theme.palette.text.secondary,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    title: {
      textTransform: "uppercase",
    },
    price: {
      textTransform: "uppercase",
      fontWeight: 600,
    },
  })
);

export default useStyles;
