import React, { forwardRef, ElementType, HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { BulmaProps } from "types";

import { allTheClasses } from "../../utils/modifiers";

import htmlAttributes, { ariaAttributes } from "../../utils/element-attributes";

export const Base: FC<BaseProps> = forwardRef(
  ({ as: Element = "div", className, children, ...otherProps }, ref) => {
    const classes = allTheClasses(otherProps);
    const { onClick } = otherProps;
    const tagName = Element?.toString() || "div";

    const castedProps = otherProps as Record<string, string>;
    const clean = htmlAttributes["*"]
      .concat(htmlAttributes[tagName] || [])
      .concat(ariaAttributes)
      .reduce((objs: Record<string, string>, current: string) => {
        if (castedProps[current]) {
          objs[current] = castedProps[current];
        }
        return objs;
      }, {});

    return (
      <Element
        ref={ref}
        className={classnames(className, classes)}
        onClick={onClick}
        {...clean}
      >
        {children}
      </Element>
    );
  }
);

export interface BaseProps
  extends HTMLAttributes<HTMLOrSVGElement>,
    BulmaProps<HTMLOrSVGElement> {
  as?: ElementType;
  className?: string;
}

Base.defaultProps = {
  as: "div",
};
