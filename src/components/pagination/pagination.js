import React from 'react'
import classnames from 'classnames'

export const PaginationLink = ({
  label,
  className,
  page,
  onClick,
  isCurrent,
  ...props
}) => {
  return (
    <a
      className={classnames('pagination-link', className, {
        'is-current': isCurrent,
      })}
      aria-label={`Goto page ${page}`}
      onClick={onClick}
      {...props}
    >
      {label || page}
    </a>
  )
}
export const PaginationEllipsis = ({ className }) => {
  return (
    <span className={classnames('pagination-ellipsis', className)}>
      &hellip;
    </span>
  )
}
export const PaginationPrevious = ({
  label,
  className,
  page,
  onClick,
  ...props
}) => {
  return (
    <a
      className={classnames('pagination-previous', className)}
      aria-label={`Goto page ${page}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </a>
  )
}
PaginationPrevious.defaultProps = {
  label: 'Previous',
}
export const PaginationNext = ({
  label,
  className,
  page,
  onClick,
  ...props
}) => {
  return (
    <a
      className={classnames('pagination-next', className)}
      aria-label={`Goto page ${page}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </a>
  )
}
PaginationNext.defaultProps = {
  label: 'Next',
}
export const PaginationList = ({ children, className }) => {
  const kids = React.Children.map(children, (child, i) => {
    return <li>{child}</li>
  })
  return <ul className={classnames('pagination-list', className)}>{kids}</ul>
}

export const Pagination = ({
  className,
  children,
  isRight,
  isCentered,
  isRounded,
  isSmall,
  isMedium,
  isLarge,
}) => {
  const classes = {
    'is-right': isRight,
    'is-centered': isCentered,
    'is-rounded': isRounded,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  }
  return (
    <nav
      className={classnames('pagination', className, classes)}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </nav>
  )
}
