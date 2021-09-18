import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: green["50"],
      [theme.breakpoints.down("xs")]: {
        height: "inherit",
      },
      [theme.breakpoints.up("sm")]: {
        border: `1px solid ${theme.palette.divider}`,
        width: theme.spacing(33),
      },
    },
    title: {
      background: green["A100"],
      textTransform: "uppercase",
      fontWeight: 600,
      padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    },
    items: {
      listStyle: "none",
      marginTop: theme.spacing(),
    },
    item: {
      fontWeight: theme.typography.fontWeightBold,
      ...theme.typography.body1,
      [theme.breakpoints.up("sm")]: {
        ...theme.typography.h6,
      },
      display: "block",
      textDecoration: "none",
      color: theme.palette.grey[500],
      padding: `${theme.spacing(0.75)}px ${theme.spacing(2)}px`,
      textTransform: "capitalize",
      "&:hover, &.active": {
        color: theme.palette.primary.main,
      },
    },
  })
);

export default useStyles;
