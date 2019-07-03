import React from 'react'
import classnames from 'classnames'
import { Colors, Sizes, StyleOrState } from '../modifiers'

const noop = () => {}
export const Tag = ({
  children,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isWhite,
  isDark,
  isBlack,
  isText,
  isSmall,
  isNormal,
  isMedium,
  isLarge,
  isRounded,
  isDelete,
  onClick,
}) => {
  const classes = {
    'is-delete': isDelete,
    ...Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isWhite,
      isDark,
      isBlack,
      isText,
    }),
    ...Sizes({
      isSmall,
      isNormal,
      isMedium,
      isLarge,
    }),
    ...StyleOrState({ isRounded }),
  }
  if (isDelete || isLink) {
    return (
      <a
        className={classnames('tag', classes)}
        href="#"
        onClick={onClick || noop}
      >
        {children}
      </a>
    )
  }
  return <span className={classnames('tag', classes)}>{children}</span>
}

export const Tags = ({
  children,
  hasAddons,
  areNormal,
  areMedium,
  areLarge,
}) => {
  const classes = {
    'has-addons': hasAddons,
    'are-normal': areNormal,
    'are-medium': areMedium,
    'are-large': areLarge,
  }
  return <span className={classnames('tags', classes)}>{children}</span>
}
