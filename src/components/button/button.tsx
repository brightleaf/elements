import React, { HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { allTheClasses } from "../../utils/modifiers";
import { BulmaProps } from "types";
import { Base } from "../base";
import htmlAttributes, {
  ariaAttributes,
  allAttributes,
} from "../../utils/element-attributes";

const cleanProps = (tag: string, props: any) => {
  const castedProps = props as Record<string, string>;
  return htmlAttributes["*"]
    .concat(htmlAttributes[tag] || [])
    .concat(ariaAttributes)
    .reduce((objs: Record<string, string>, current: string) => {
      if (castedProps[current]) {
        objs[current] = castedProps[current];
      }
      return objs;
    }, {});
};
export const Button: FC<BaseButtonProps<HTMLButtonElement>> = ({
  className,
  isAnchor,
  isSubmit,
  isReset,
  children,
  ...props
}) => {
  const classes = allTheClasses(props);
  if (props?.isStatic) {
    return (
      <span
        className={classnames("button", className, classes)}
        {...cleanProps("span", props)}
      >
        {children}
      </span>
    );
  }
  if (isAnchor) {
    return (
      <a
        className={classnames("button", className, classes)}
        {...cleanProps("a", props)}
      >
        {children}
      </a>
    );
  }

  if (isSubmit) {
    return (
      <input
        className={classnames("button", className, classes)}
        {...cleanProps("input", props)}
        type="submit"
        value={children?.toString()}
      />
    );
  }
  if (isReset) {
    return (
      <input
        className={classnames("button", className, classes)}
        {...cleanProps("input", props)}
        type="reset"
        value={children?.toString()}
      />
    );
  }
  return (
    <button
      className={classnames("button", className, classes)}
      {...cleanProps("button", props)}
    >
      {children}
    </button>
  );
};

export default Button;

export interface ButtonsProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  areSmall?: boolean;
  areMedium?: boolean;
  areLarge?: boolean;
  hasAddons?: boolean;
  isCentered?: boolean;
  isRight?: boolean;
}
export const Buttons: FC<ButtonsProps> = ({
  className,
  children,
  areSmall,
  areMedium,
  areLarge,
  hasAddons,
  isCentered,
  isRight,
}) => {
  const sized = {
    "are-small": areSmall,
    "are-medium": areMedium,
    "are-large": areLarge,
    "has-addons": hasAddons,
    "is-centered": isCentered,
    "is-right": isRight,
  };
  return (
    <div className={classnames("buttons", className, sized)}>{children}</div>
  );
};

export interface BaseButtonProps<T> extends BulmaProps<T> {
  className?: string;
  isSpaced?: boolean;
  href?: string;
  isAnchor?: boolean;
  isSubmit?: boolean;
  isReset?: boolean;
}
