import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      maxHeight: theme.spacing(28.25),
    },
    sideChild: {
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(2),
      },
    },
  })
);

export default useStyles;
