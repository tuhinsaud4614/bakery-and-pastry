import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "#fff",
      borderRadius: 3,
      padding: theme.spacing(2, 3),
    },
    title: {
      ...theme.typography.body1,
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        ...theme.typography.h4,
      },
    },
    subtitle: {
      ...theme.typography.body2,
      [theme.breakpoints.up("sm")]: {
        ...theme.typography.h6,
      },
    },
  })
);

export default useStyles;
