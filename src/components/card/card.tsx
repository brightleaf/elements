import React, { HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { Screens } from "../../utils/modifiers";
import { allTheClasses } from "../../utils/modifiers";
import { BulmaProps } from "types";

export interface CardBaseProps<T> extends BulmaProps<T> {
  className?: string;
}

export interface CardHeaderIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CardHeaderIcon: FC<CardBaseProps<HTMLAnchorElement>> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <a
      href="#"
      className={classnames(
        "card-header-icon",
        className,
        allTheClasses(props)
      )}
      aria-label="more options"
      onClick={onClick}
    >
      {children}
    </a>
  );
};
export interface CardHeaderProps<T> extends CardBaseProps<T> {
  title: string;
  hasIcon?: boolean;
}

export const CardHeader: FC<CardHeaderProps<HTMLElement>> = ({
  title,
  className,
  children,
  ...props
}) => {
  return (
    <header
      className={classnames("card-header", className, allTheClasses(props))}
    >
      <p className="card-header-title">{title}</p>
      {children}
    </header>
  );
};

export const CardFooterItem: FC<CardBaseProps<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  const kid = React.Children.toArray(children).map((child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          className: classnames(
            "card-footer-item",
            className,
            allTheClasses(props)
          ),
        })
      : child
  );

  return <>{kid}</>;
};
export const CardFooter: FC<CardBaseProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <footer
      className={classnames("card-footer", className, allTheClasses(props))}
    >
      {children}
    </footer>
  );
};

export interface CardImageProps {
  className?: string;
  src: string;
  alt?: string;
}
export const CardImage: FC<CardImageProps> = ({ src, alt, className }) => {
  return (
    <div className={classnames("card-image", className)}>
      <figure className="image is-4by3">
        <img src={src} alt={alt} />
      </figure>
    </div>
  );
};

export interface CardImageContainerProps<T> extends CardBaseProps<T> {}
export const CardImageContainer: FC<CardImageContainerProps<
  HTMLDivElement
>> = ({ children, className, hasTextCentered, ...props }) => {
  const classes = allTheClasses(props);
  return (
    <div className={classnames("card-image", className, classes)}>
      {children}
    </div>
  );
};

export const CardBody: FC<CardBaseProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes = allTheClasses(props);
  return (
    <div className={classnames("card-content", className, classes)}>
      {children}
    </div>
  );
};

export const Card: FC<CardBaseProps<HTMLDivElement>> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const classes = allTheClasses(props);
  return (
    <div className={classnames("card", className, classes)} onClick={onClick}>
      {children}
    </div>
  );
};
