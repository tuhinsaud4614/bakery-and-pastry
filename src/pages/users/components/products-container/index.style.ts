import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      background: green["50"],
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 600,
      padding: theme.spacing(1, 2),
    },
    items: {
      padding: theme.spacing(2, 2, 1, 2),
    },
  })
);

export default useStyles;
