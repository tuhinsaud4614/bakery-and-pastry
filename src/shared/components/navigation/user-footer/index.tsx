import { Box, Container, Typography } from "@material-ui/core";
import useStyles from "./index.style";

const UserFooter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography component="p" variant="caption" color="secondary">
          &copy; Sarkar Bakery & Pastry Ltd. {new Date().getFullYear()}. All
          Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

UserFooter.displayName = "Footer";
export default UserFooter;
