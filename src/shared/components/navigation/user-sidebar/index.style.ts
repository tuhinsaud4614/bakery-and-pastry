import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "max-content",
      padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
      [theme.breakpoints.up("sm")]: {
        border: `1px solid ${theme.palette.divider}`,
        width: theme.spacing(33),
      },
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 600,
    },
    items: {
      listStyle: "none",
      marginTop: theme.spacing(),
    },
    item: {
      ...theme.typography.body1,
      display: "block",
      textDecoration: "none",
      color: theme.palette.grey[500],
      padding: `${theme.spacing(0.75)}px 0`,
      textTransform: "capitalize",
      "&:hover, &.active": {
        color: theme.palette.primary.main,
      },
    },
  })
);

export default useStyles;
