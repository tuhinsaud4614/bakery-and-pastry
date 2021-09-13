import { alpha, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      borderRadius: theme.spacing(),
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: alpha(theme.palette.common.black, 0.3),
      },
    },
    removeImage: {
      position: "absolute",
      zIndex: 2,
      top: theme.spacing(0.5),
      right: theme.spacing(0.5),
      cursor: "pointer",
      color: theme.palette.secondary.main,
      fontSize: theme.spacing(3),
      "&:hover": {
        color: theme.palette.secondary.dark,
      },
    },
    common: {
      width: theme.spacing(10),
      height: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(13),
        height: theme.spacing(10),
      },
    },
    img: {
      objectFit: "cover",
      height: "inherit",
      width: "inherit",
    },
  })
);

export default useStyles;
