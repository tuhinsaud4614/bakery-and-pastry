import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(),
    },
    sideChild: {
      height: "200px",
      paddingLeft: theme.spacing(),
      [theme.breakpoints.up("sm")]: {
        height: "300px",
      },
      [theme.breakpoints.up("md")]: {
        height: "350px",
      },
    },
    sideChildImage: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
    sliders: {
      height: "100%",
    },
    items: {
      paddingTop: theme.spacing(2),
    },
    alert: {
      marginTop: theme.spacing(3),
    },
  })
);

export default useStyles;
