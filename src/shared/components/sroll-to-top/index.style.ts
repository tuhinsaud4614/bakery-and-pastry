import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      zIndex: theme.zIndex.appBar,
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
  })
);

export default useStyles;
