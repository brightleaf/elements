import React from 'react'
import classnames from 'classnames'
export const Control = ({
  as: El,
  className,
  children,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isGrouped,
}) => {
  const classes = {
    'has-icons-left': hasIconsLeft,
    'has-icons-right': hasIconsRight,
    'is-expanded': isExpanded,
    'is-grouped': isGrouped,
  }
  return (
    <El className={classnames('control', className, classes)}>{children}</El>
  )
}

Control.defaultProps = {
  as: 'div',
}
