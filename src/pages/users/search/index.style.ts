import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      height: "fit-content",
    },
    sideChild: {
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(2),
      },
    },
  })
);

export default useStyles;
