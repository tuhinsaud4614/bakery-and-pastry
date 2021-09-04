import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: grey[900],
      marginTop: theme.spacing(2),
      padding: theme.spacing(1, 2),
    },
  })
);

export default useStyles;
