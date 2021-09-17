import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      color: theme.palette.text.primary,
      borderRadius: theme.spacing(),
      border: `1px solid ${theme.palette.primary.light}`,
      padding: theme.spacing(),
      "&:hover": {
        color: theme.palette.grey[100],
      },
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
  })
);

export default useStyles;
