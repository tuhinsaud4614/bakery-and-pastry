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
    title: {
      ...theme.typography.h6,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(2),
    },
    tableHeadCell: {
      textTransform: "capitalize",
      background: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    skeletonHeadCell: {
      background: theme.palette.grey[500],
    },
    featured: {
      color: theme.palette.secondary.main,
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
    editBtn: {
      color: theme.palette.warning.main,
    },
  })
);

export default useStyles;
