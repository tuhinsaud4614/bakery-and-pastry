import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.grey[900],
      marginTop: theme.spacing(2),
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
      color: "#fff",
    },
    address: {
      listStyle: "none",
      margin: theme.spacing(1, 0),

      "& > li:not(:first-child)": {
        marginTop: theme.spacing(1),
      },
    },
    addressLead: {
      color: theme.palette.grey[100],
    },
    addressText: {
      color: theme.palette.grey[600],
      textDecoration: "none",
    },
    btn: {
      color: theme.palette.grey[100],
      borderRadius: "50%",
      border: `1px solid ${theme.palette.grey[800]}`,
      padding: theme.spacing(),
      "& svg": {
        fontSize: "1rem",
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
      background: theme.palette.grey[800],
      margin: theme.spacing(1, 0),
    },
  })
);

export default useStyles;
