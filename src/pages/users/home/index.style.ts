import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(),
    },
    sideChild: {
      height: "226px",
      paddingLeft: theme.spacing(),
    },
    sliders: {
      height: "100%",
    },
  })
);

export default useStyles;
