import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    items: {
      padding: theme.spacing(2, 2, 0),
    },
  })
);

export default useStyles;
