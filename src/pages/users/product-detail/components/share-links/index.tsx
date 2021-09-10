import { Box, IconButton, Tooltip } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import classNames from "classnames";
import useStyles from "./index.style";

const ShareLinks = () => {
  const styles = useStyles();

  return (
    <Box display="flex" alignItems="center" mt={2}>
      <Tooltip title="Share on Facebook" aria-label="facebook" arrow>
        <IconButton
          aria-label="facebook"
          href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
          className={classNames(styles.btn, styles.fbBtn)}
        >
          <Facebook />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Twitter" aria-label="twitter" arrow>
        <IconButton
          aria-label="twitter"
          href="https://m.facebook.com/"
          className={classNames(styles.btn, styles.twBtn)}
        >
          <Twitter />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Instagram" aria-label="twitter" arrow>
        <IconButton
          aria-label="instagram"
          href="https://m.facebook.com/"
          className={classNames(styles.btn, styles.inBtn)}
        >
          <Instagram />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

ShareLinks.displayName = "ShareLinks";
export default ShareLinks;
