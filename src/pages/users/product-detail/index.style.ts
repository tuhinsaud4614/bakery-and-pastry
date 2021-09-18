import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageView: {
      height: "200px",
      [theme.breakpoints.up("sm")]: {
        height: "250px",
      },
      [theme.breakpoints.up("md")]: {
        height: "300px",
      },
      paddingLeft: theme.spacing(),
    },
    sliders: {
      height: "100%",
    },
    title: {
      ...theme.typography.body2,
      overflowWrap: "break-word",
      textTransform: "capitalize",
      [theme.breakpoints.up("sm")]: {
        ...theme.typography.h4,
      },
    },
  })
);

export default useStyles;
