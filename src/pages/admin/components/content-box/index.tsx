import {
  Box,
  createStyles,
  makeStyles,
  Paper,
  PaperProps,
  Theme,
} from "@material-ui/core";
import { Alert, AlertProps, AlertTitle } from "@material-ui/lab";
import classNames from "classnames";
import { ReactNode } from "react";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    title: {
      ...theme.typography.h6,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(2),
    },
    alertTitle: {
      textTransform: "capitalize",
    },
  })
);

interface Props {
  rootProps?: PaperProps;
  className?: string;
  titleClassName?: string;
  title: string;
  alert?: {
    title?: string;
    message: string;
    messageStrong?: string;
    props?: AlertProps;
  };
  children?: ReactNode;
}

const ContentBox = ({
  className,
  rootProps,
  title,
  titleClassName,
  alert,
  children,
}: Props) => {
  const styles = useStyles();
  return (
    <Paper
      {...rootProps}
      className={classNames(className, rootProps?.className)}
    >
      <h3 className={classNames(titleClassName, styles.title)}>{title}</h3>
      {!!alert && (
        <Box px={2} pb={2}>
          <Alert {...alert.props}>
            {alert.title && (
              <AlertTitle className={styles.alertTitle}>
                {alert.title}
              </AlertTitle>
            )}
            {alert.message}{" "}
            {alert.messageStrong && <strong>{alert.messageStrong}</strong>}
          </Alert>
        </Box>
      )}
      {children}
    </Paper>
  );
};

ContentBox.displayName = "ContentBox";
export default ContentBox;
