import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#D6F7A3",
      marginTop: theme.spacing(3),
      padding: theme.spacing(2),
    },
    link: {
      textDecoration: "none",
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
    infoTitle: {
      fontWeight: 600,
      color: "#7B4B94",
    },
    address: {
      listStyle: "none",
      margin: theme.spacing(1, 0),

      "& > li:not(:first-child)": {
        marginTop: theme.spacing(1),
      },
    },
    addressLead: {
      color: "#505591",
    },
    addressText: {
      color: theme.palette.common.black,
      textDecoration: "none",
    },
    btn: {
      color: "#505591",
      borderRadius: theme.spacing(),
      border: `1px solid #505591`,
      padding: theme.spacing(),
      "& svg": {
        fontSize: "1rem",
      },
      "&:hover": {
        color: theme.palette.common.white,
        borderColor: "transparent",
      },
      "&:not(:last-child)": {
        marginRight: theme.spacing(),
      },
    },
    fbBtn: {
      "&:hover": {
        background: "#3b5a9a",
      },
    },
    twBtn: {
      "&:hover": {
        background: "#1aa9e1",
      },
    },
    inBtn: {
      "&:hover": {
        background: "#7c4a3a",
      },
    },
    divider: {
      // background: theme.palette.primary,
      margin: theme.spacing(2, 0),
    },
  })
);

export default useStyles;
