import { Fragment, ReactNode } from "react";

export interface ItemProps {
  children?: ReactNode | ReactNode[];
}

const Item = ({ children }: ItemProps): JSX.Element => {
  return <Fragment>{children}</Fragment>;
};

Item.displayName = "Carousel.Item";
export default Item;
