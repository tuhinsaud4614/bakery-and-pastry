import { Box, Button, Typography } from "@material-ui/core";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import img from "../../images/404.svg";
import useStyles from "./index.style";

interface Props {
  path: string;
  styles?: {
    root?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    button?: string;
  };
}

const PageNotFound = ({ path, styles }: Props) => {
  const { replace } = useHistory();
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classNames(classes.root, styles?.root)}
    >
      <img
        src={img}
        alt="Page Not Found"
        className={classNames(classes.img, styles?.img)}
      />
      <Typography
        variant="h4"
        component="h2"
        className={classNames(classes.title, styles?.title)}
      >
        Page not <b>found</b>
      </Typography>
      <Typography
        variant="body1"
        component="p"
        className={classNames(classes.subtitle, styles?.subtitle)}
      >
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={styles?.button}
        onClick={() => replace(path)}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
