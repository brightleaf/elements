import React from 'react'
import classnames from 'classnames'
export const Control = ({
  className,
  children,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
}) => {
  const classes = {
    'has-icons-left': hasIconsLeft,
    'has-icons-right': hasIconsRight,
    'is-expanded': isExpanded,
  }
  return (
    <div className={classnames('control', className, classes)}>{children}</div>
  )
}
