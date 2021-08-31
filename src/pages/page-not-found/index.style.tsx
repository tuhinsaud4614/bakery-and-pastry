import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
    },
    img: {
      maxWidth: theme.spacing(37.5),
    },
    title: {
      margin: `${theme.spacing()}px 0`,
    },
    subtitle: {
      textAlign: "center",
      marginBottom: theme.spacing(),
    },
  })
);

export default useStyles;
