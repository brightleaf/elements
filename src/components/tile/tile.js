import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Colors } from '../modifiers'

const isColored = (...args) => {
  return args.some(item => item)
}

export const Tile = ({
  children,
  className,
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
  isAncestor,
  isVertical,
  isParent,
  isChild,
  isNotification,
  isBox,
  size,
}) => {
  const classes = {
    'is-ancestor': isAncestor,
    'is-parent': isParent,
    'is-child': isChild,
    'is-vertical': isVertical,
    box: isBox,
    notification: isNotification,
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
  }
  if (size) {
    classes[`is-${size}`] = true
  }
  const hasColor = isColored(
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
    isText
  )

  const El = hasColor || isNotification || isBox ? 'article' : 'div'

  return <El className={classnames('tile', className, classes)}>{children}</El>
}

Tile.propTypes = {
  className: PropTypes.string,
  isSpaced: PropTypes.bool,
  size: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]),
  isPrimary: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isInfo: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool,
  isLink: PropTypes.bool,
  isLight: PropTypes.bool,
  isWhite: PropTypes.bool,
  isDark: PropTypes.bool,
  isBlack: PropTypes.bool,
  isText: PropTypes.bool,
  isVertical: PropTypes.bool,
  isParent: PropTypes.bool,
  isChild: PropTypes.bool,
}
