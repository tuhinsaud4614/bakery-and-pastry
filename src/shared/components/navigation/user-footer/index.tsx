import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import classNames from "classnames";
import useStyles from "./index.style";

const UserFooter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" component="h3" color="secondary" gutterBottom>
          Stay with{" "}
          <a href="https://m.facebook.com/" className={classes.link}>
            <b>Sarkar Bakery & Pastry</b>
          </a>
        </Typography>
        <Box component="address">
          <Typography
            component="h3"
            variant="body1"
            color="primary"
            className={classes.infoTitle}
          >
            CONTACT INFO
          </Typography>
          <ul className={classes.address}>
            <Box component="li" display="flex" flexDirection="column">
              <Typography
                variant="body2"
                component="strong"
                className={classes.addressLead}
              >
                ADDRESS:
              </Typography>
              <Typography
                variant="caption"
                component="span"
                className={classes.addressText}
              >
                160/485, Turag, Dhour, Dhaka-1230
              </Typography>
            </Box>
            <Box component="li" display="flex" flexDirection="column">
              <Typography
                variant="body2"
                component="strong"
                className={classes.addressLead}
              >
                Phone:
              </Typography>
              <Typography
                variant="caption"
                component="span"
                className={classes.addressText}
              >
                01712969807
              </Typography>
            </Box>
            <Box component="li" display="flex" flexDirection="column">
              <Typography
                variant="body2"
                component="strong"
                className={classes.addressLead}
              >
                EMAIL:
              </Typography>
              <a href="mailto:acd@gamil.com" className={classes.addressText}>
                <Typography variant="caption" component="span">
                  acd@gamil.com
                </Typography>
              </a>
            </Box>
          </ul>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="facebook"
            href="https://m.facebook.com/"
            className={classNames(classes.btn, classes.fbBtn)}
          >
            <Facebook />
          </IconButton>
          <IconButton
            aria-label="twitter"
            href="https://m.facebook.com/"
            className={classNames(classes.btn, classes.twBtn)}
          >
            <Twitter />
          </IconButton>
          <IconButton
            aria-label="instagram"
            href="https://m.facebook.com/"
            className={classNames(classes.btn, classes.inBtn)}
          >
            <Instagram />
          </IconButton>
        </Box>
        <Divider className={classes.divider} />
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
