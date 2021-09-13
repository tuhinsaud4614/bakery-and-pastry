import { Fab, Tooltip } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { useEffect, useState } from "react";
import useStyles from "./index.style";

const ScrollToTop = ({ showBelow }: { showBelow: number }) => {
  const styles = useStyles();
  const [show, setShow] = useState<boolean>(false);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScrolling = () => {
      if (window.pageYOffset > showBelow) {
        if (!show) {
          setShow(true);
        }
      } else {
        if (show) {
          setShow(false);
        }
      }
    };
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [showBelow, show]);

  return show ? (
    <Tooltip title="Scroll to top" aria-label="scroll to top" arrow>
      <Fab
        onClick={onClick}
        size="small"
        className={styles.root}
        color="secondary"
        aria-label="scroll to top"
      >
        <KeyboardArrowUp />
      </Fab>
    </Tooltip>
  ) : null;
};

ScrollToTop.displayName = "ScrollToTop";
export default ScrollToTop;
