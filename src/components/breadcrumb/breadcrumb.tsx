import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import { Base, BaseProps } from "../base";

export interface BreadcrumbItemProps {
  children?: React.ReactNode;
  className?: string;
  isActive?: boolean;
}
export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  children,
  isActive,
  className,
}) => {
  const classes = {
    "is-active": isActive,
  };

  return (
    <li
      className={classnames(className, classes)}
      aria-current={isActive ? "page" : false}
    >
      {children}
    </li>
  );
};

export interface BreadcrumbProps {
  hasArrowSeparator?: boolean;
  hasBulletSeparator?: boolean;
  hasDotSeparator?: boolean;
  hasSucceedsSeparator?: boolean;
}

export const Breadcrumb: FC<BreadcrumbProps & BaseProps> = ({
  children,
  className,
  hasArrowSeparator,
  hasBulletSeparator,
  hasDotSeparator,
  hasSucceedsSeparator,
  ...props
}) => {
  const classes = {
    "has-arrow-separator": hasArrowSeparator,
    "has-bullet-separator": hasBulletSeparator,
    "has-dot-separator": hasDotSeparator,
    "has-succeeds-separator": hasSucceedsSeparator,
  };
  const chappies = children as ReactNode[];
  const last = chappies.length - 1;
  const kids = React.Children.toArray(children).map((child, i) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          isActive: last === i,
        })
      : child
  );

  return (
    <Base
      as="nav"
      className={classnames("breadcrumb", className, classes)}
      aria-label="breadcrumbs"
      {...props}
    >
      <ul>{kids}</ul>
    </Base>
  );
};
