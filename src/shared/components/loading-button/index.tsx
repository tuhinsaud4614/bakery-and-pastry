import { Button, ButtonProps, CircularProgress } from "@material-ui/core";
import classNames from "classnames";
import useStyles from "./index.style";

interface Props extends ButtonProps {
  loading?: boolean;
  className?: string;
}

const LoadingButton = ({
  loading = false,
  disabled = false,
  className,
  ...buttonProps
}: Props) => {
  const styles = useStyles();
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Button {...buttonProps} disabled={disabled || loading} />
      {loading && (
        <CircularProgress size={24} className={styles.buttonProgress} />
      )}
    </div>
  );
};

LoadingButton.displayName = "Button.Loading";
export default LoadingButton;
