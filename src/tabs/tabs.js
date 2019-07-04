import React from 'react'
import classnames from 'classnames'

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
  const list = kids.filter(child => child.type === TabItem)
  const others = kids.filter(child => child.type !== TabItem)
  console.log('list', list)
  return (
    <div className={classnames('tabs', className, classes)}>
      <ul>{list}</ul>
      {others}
    </div>
  )
}
