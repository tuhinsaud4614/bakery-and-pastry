import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<
  Theme,
  {
    gutterTop?: number;
    gutterBottom?: number;
    gutterLeft?: number;
    gutterRight?: number;
  }
>((theme: Theme) =>
  createStyles({
    root: {
      margin: ({
        gutterTop = 0,
        gutterRight = 0,
        gutterBottom = 0,
        gutterLeft = 0,
      }) => theme.spacing(gutterTop, gutterRight, gutterBottom, gutterLeft),
    },
    tableHeadCell: {
      textTransform: "capitalize",
      background: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    skeletonHeadCell: {
      background: theme.palette.grey[500],
    },
    title: {
      textTransform: "capitalize",
    },
    img: {
      width: theme.spacing(10),
      height: theme.spacing(7),
      borderRadius: theme.spacing(),
      objectFit: "cover",
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(13),
        height: theme.spacing(10),
      },
    },
    action: {
      whiteSpace: "nowrap",
    },
  })
);

export default useStyles;
