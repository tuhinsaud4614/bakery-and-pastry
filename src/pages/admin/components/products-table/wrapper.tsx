import { Paper, PaperProps } from "@material-ui/core";
import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  rootProps?: PaperProps;
  className?: string;
  titleClassName?: string;
  title: string;
  children?: ReactNode;
}

const Wrapper = ({
  className,
  rootProps,
  title,
  titleClassName,
  children,
}: Props) => {
  return (
    <Paper
      {...rootProps}
      className={classNames(className, rootProps?.className)}
    >
      <h3 className={titleClassName}>{title}</h3>
      {children}
    </Paper>
  );
};

Wrapper.displayName = "ProductsTable.Wrapper";
export default Wrapper;
