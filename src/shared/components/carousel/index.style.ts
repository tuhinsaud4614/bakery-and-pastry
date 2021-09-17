import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { height: "300px", position: "relative", overflow: "hidden" },
    container: {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      width: "100%",
      height: "100%",
    },
    slide: {
      position: "relative",
      flexShrink: 0,
      width: "100%",
      height: "inherit",
      "& img": {
        height: "inherit",
        width: "inherit",
        objectFit: "cover",
      },
    },
    btn: {
      color: "#fff",
      fontSize: "4rem",
      position: "absolute",
      zIndex: 1,
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    },
    btnPrev: {
      left: 0,
    },
    btnNext: {
      right: 0,
    },
    pagination: {
      zIndex: 1,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1, 2),
      background: theme.palette.text.secondary,
    },
    page: {
      cursor: "pointer",
      width: theme.spacing(2),
      height: theme.spacing(2),
      "&:not(:last-child)": {
        marginRight: theme.spacing(1),
      },
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        zIndex: 1,
        top: "50%",
        left: "50%",
        transform: "scale(0) translate(-50%, -50%)",
        height: theme.spacing(1.25),
        width: theme.spacing(1.25),
        borderRadius: "50%",
        display: "inline-block",
        background: theme.palette.secondary.light,
      },
      "&:hover::before": {
        transform: "scale(1) translate(-50%, -50%)",
      },
    },
    pageActive: {
      "&::before": {
        transform: "scale(1) translate(-50%, -50%)",
      },
    },
  })
);

export default useStyles;
