import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      alignItems: "center",
    },
    img: {
      height: "auto",
      width: theme.spacing(12),
      marginRight: theme.spacing(1.5),
      [theme.breakpoints.up("sm")]: {
        width: "auto",
        height: theme.spacing(6),
      },
    },
  })
);

export default useStyles;
