import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: theme.breakpoints.values.sm,
    },
    form: {
      width: "100%",
      padding: theme.spacing(0, 2, 2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  })
);

export default useStyles;
