import React, { FC } from "react";
import classnames from "classnames";
import { Base, BaseProps } from "../base";

export const SubTitle: FC<BaseProps> = ({
  as = "h2",
  className,
  children,
  ...props
}) => {
  return (
    <Base as={as} className={classnames("subtitle", className)} {...props}>
      {children}
    </Base>
  );
};

SubTitle.defaultProps = {
  as: "h2",
};

export default SubTitle;
