import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(),
    },
    sideChild: {
      height: "200px",
      [theme.breakpoints.up("sm")]: {
        height: "300px",
      },
      [theme.breakpoints.up("md")]: {
        height: "350px",
      },
      paddingLeft: theme.spacing(),
    },
    sliders: {
      height: "100%",
    },
  })
);

export default useStyles;
