import React, { FC, ElementType, ReactNode } from "react";
import classnames from "classnames";
import { Base, BaseProps } from "../base";

export interface BlockProps extends BaseProps {}

export const Block: FC<BlockProps> = ({ className, children, ...props }) => {
  return (
    <Base className={classnames("block", className)} {...props}>
      {children}
    </Base>
  );
};

export default Block;
