import React, { FC } from "react";
import classnames from "classnames";
import { Base, BaseProps } from "../base";

export const Box: FC<BaseProps> = ({
  as = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Base as={as} className={classnames("box", className)} {...props}>
      {children}
    </Base>
  );
};

Box.defaultProps = {
  as: "div",
};

export default Box;
