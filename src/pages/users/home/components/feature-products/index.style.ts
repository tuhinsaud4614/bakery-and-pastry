import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 600,
      padding: theme.spacing(1, 2),
    },
    items: {
      padding: theme.spacing(2, 2, 0),
    },
    pagination: {
      padding: theme.spacing(2),
    },
  })
);

export default useStyles;
