import classNames from "classnames";
import { Children, ReactNode, useMemo } from "react";
import useStyles from "./index.style";

const Slide = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const classes = useStyles();
  return <li className={classNames(className, classes.slide)}>{children}</li>;
};

function useChildren<T>(
  children?: T,
  className?: string
): ReactNode[] | undefined {
  return useMemo(() => {
    if (!children) {
      return undefined;
    }
    let items: ReactNode[];
    if (Array.isArray(children)) {
      if (children.length > 1) {
        items = Children.map(children, (child, index) => (
          <Slide key={index + 1} className={className}>
            {child}
          </Slide>
        ));
        return [
          <Slide key={0} className={className}>
            {children[children.length - 1]}
          </Slide>,
          ...items,
          <Slide key={children.length + 1} className={className}>
            {children[0]}
          </Slide>,
        ];
      }
      return [
        <Slide key={0} className={className}>
          {children[0]}
        </Slide>,
      ];
    }
    return [
      <Slide key={0} className={className}>
        {children}
      </Slide>,
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
}

export default useChildren;
