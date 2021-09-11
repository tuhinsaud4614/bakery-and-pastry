import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: theme.breakpoints.values.sm,
      margin: "0 auto",
      marginTop: theme.spacing(10),
      padding: theme.spacing(2),
    },
    homeLink: {
      width: "170px",
      margin: "0 auto",
      display: "block",
      "& img": {
        width: "inherit",
      },
    },
    button: {
      marginTop: theme.spacing(1),
    },
  })
);

export default useStyles;
