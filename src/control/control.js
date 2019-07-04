import React from 'react'
import classnames from 'classnames'
export const Control = ({
  as: El,
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
    <El className={classnames('control', className, classes)}>{children}</El>
  )
}

Control.defaultProps = {
  as: 'div',
}
