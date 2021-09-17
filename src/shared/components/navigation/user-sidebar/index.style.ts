import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("sm")]: {
        border: `1px solid ${theme.palette.divider}`,
        width: theme.spacing(33),
      },
    },
    title: {
      background: theme.palette.divider,
      textTransform: "uppercase",
      fontWeight: 600,
      padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    },
    items: {
      listStyle: "none",
      marginTop: theme.spacing(),
    },
    item: {
      ...theme.typography.h6,
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
