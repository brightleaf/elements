import React from 'react'
import classnames from 'classnames'

const isTabType = type => {
  if (typeof type === 'function' && type.name.indexOf('Tab') === 0) {
    return true
  }
  return false
}
export const TabItem = ({ children, className, isActive }) => {
  return (
    <li className={classnames(className, { 'is-active': isActive })}>
      {children}
    </li>
  )
}
export const TabList = ({ children, className, isActive }) => {
  return <ul className={classnames(className)}>{children}</ul>
}
export const Tabs = ({
  children,
  className,
  isCentered,
  isRight,
  isSmall,
  isMedium,
  isLarge,
  isBoxed,
  isToggle,
  isFullWidth,
}) => {
  const classes = {
    'is-centered': isCentered,
    'is-right': isRight,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
    'is-boxed': isBoxed,
    'is-toggle': isToggle,
    'is-fullwidth': isFullWidth,
  }

  return (
    <div className={classnames('tabs', className, classes)}>{children}</div>
  )
}
