import React from 'react'
import classnames from 'classnames'
import { Sizes } from '../modifiers'

export const BreadcrumbItem = ({ children, isActive }) => {
  const classes = {
    'is-active': isActive,
  }
  const aria = {}
  if (isActive) {
    aria['aria-current'] = 'page'
  }
  return (
    <li className={classnames(classes)} {...aria}>
      {children}
    </li>
  )
}
export const Breadcrumb = ({
  children,
  isCentered,
  isRight,
  hasArrowSeparator,
  hasBulletSeparator,
  hasDotSeparator,
  hasSucceedsSeparator,
  isSmall,
  isMedium,
  isLarge,
}) => {
  const classes = {
    'is-centered': isCentered,
    'is-right': isRight,
    'has-arrow-separator': hasArrowSeparator,
    'has-bullet-separator': hasBulletSeparator,
    'has-dot-separator': hasDotSeparator,
    'has-succeeds-separator': hasSucceedsSeparator,
    ...Sizes({ isSmall, isMedium, isLarge }),
  }
  const last = children.length - 1
  const kids = React.Children.map(children, (child, i) => {
    if (last === i) {
      return React.cloneElement(child, {
        isActive: true,
      })
    }
    return child
  })

  return (
    <nav className={classnames('breadcrumb', classes)} aria-label="breadcrumbs">
      <ul>{kids}</ul>
    </nav>
  )
}
