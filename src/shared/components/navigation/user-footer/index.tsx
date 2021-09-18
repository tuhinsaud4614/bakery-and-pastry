import {
  Box,
  Container,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import classNames from "classnames";
import useStyles from "./index.style";

const UserFooter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="footer">
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          component="h3"
          style={{ color: "#505591" }}
          gutterBottom
        >
          Stay with{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://m.facebook.com/"
            className={classes.link}
            aria-label="facebook-page"
          >
            <b>Sarkar Bakery & Pastry</b>
          </a>
        </Typography>
        <Box component="address">
          <Typography
            component="h3"
            variant="h6"
            color="primary"
            className={classes.infoTitle}
          >
            CONTACT INFO
          </Typography>
          <ul className={classes.address}>
            <Box component="li" display="flex" flexDirection="column">
              <Typography
                variant="body1"
                component="strong"
                className={classes.addressLead}
              >
                ADDRESS:
              </Typography>
              <Typography
                variant="body2"
                component="span"
                className={classes.addressText}
              >
                160/485, Turag, Dhour, Dhaka-1230
              </Typography>
            </Box>
            <Box component="li" display="flex" flexDirection="column">
              <Typography
                variant="body1"
                component="strong"
                className={classes.addressLead}
              >
                Phone:
              </Typography>
              <Typography
                variant="body2"
                component="span"
                className={classes.addressText}
              >
                01712969807
              </Typography>
            </Box>
            <Box component="li" display="flex" flexDirection="column">
              <Typography
                variant="body1"
                component="strong"
                className={classes.addressLead}
              >
                EMAIL:
              </Typography>
              <a
                href="mailto:acd@gamil.com"
                className={classes.addressText}
                aria-label="mail"
              >
                <Typography variant="body2" component="span">
                  acd@gamil.com
                </Typography>
              </a>
            </Box>
          </ul>
        </Box>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <Tooltip title="Visit on Facebook" aria-label="facebook" arrow>
            <IconButton
              aria-label="facebook"
              href="https://m.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={classNames(classes.btn, classes.fbBtn)}
            >
              <Facebook />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visit on Twitter" aria-label="twitter" arrow>
            <IconButton
              aria-label="twitter"
              href="https://m.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={classNames(classes.btn, classes.twBtn)}
            >
              <Twitter />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visit on Instagram" aria-label="instagram" arrow>
            <IconButton
              aria-label="instagram"
              href="https://m.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={classNames(classes.btn, classes.inBtn)}
            >
              <Instagram />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider className={classes.divider} />
        <Typography component="p" variant="button" style={{ color: "#7B4B94" }}>
          &copy; Sarkar Bakery & Pastry Ltd. {new Date().getFullYear()}. All
          Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

UserFooter.displayName = "Footer";
export default UserFooter;
