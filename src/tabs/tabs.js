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
  const kids = React.Children.toArray(children)

  const list = kids.filter(
    child => child.type === TabItem || isTabType(child.type)
  )
  const others = kids.filter(child => !isTabType(child.type))
  return (
    <div className={classnames('tabs', className, classes)}>
      <ul>{list}</ul>
      {others}
    </div>
  )
}
