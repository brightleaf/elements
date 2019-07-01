import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Colors, Sizes, StyleOrState } from '../modifiers'

export const Button = ({
  className,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isAnchor,
  isSubmit,
  isReset,
  isWhite,
  isDark,
  isBlack,
  isText,
  isSmall,
  isMedium,
  isNormal,
  isLarge,
  isFullWidth,
  isInverted,
  isOutlined,
  isRounded,
  isActive,
  isHovered,
  isFocused,
  isStatic,
  isSelected,
  children,
  ...props
}) => {
  const classes = {
    ...Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isDark,
      isBlack,
      isText,
      isWhite,
      isInverted,
      isOutlined,
      isSelected,
    }),
    ...Sizes({ isSmall, isMedium, isNormal, isLarge, isFullWidth }),
    ...StyleOrState({
      isInverted,
      isOutlined,
      isRounded,
      isActive,
      isHovered,
      isFocused,
      isSelected,
    }),
  }

  if (isStatic) {
    return (
      <span className={classnames('button', classes)} {...props}>
        {children}
      </span>
    )
  }
  if (isAnchor) {
    return (
      <a className={classnames('button', classes)} {...props}>
        {children}
      </a>
    )
  }

  if (isSubmit) {
    return (
      <input
        className={classnames('button', classes)}
        {...props}
        type="submit"
        value={children}
      />
    )
  }
  if (isReset) {
    return (
      <input
        className={classnames('button', classes)}
        {...props}
        type="reset"
        value={children}
      />
    )
  }
  return (
    <button className={classnames('button', classes)} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {}

export default Button

export const Buttons = ({
  children,
  areSmall,
  areMedium,
  areLarge,
  hasAddons,
  isCentered,
  isRight,
}) => {
  const sized = {
    'are-small': areSmall,
    'are-medium': areMedium,
    'are-large': areLarge,
    'has-addons': hasAddons,
    'is-centered': isCentered,
    'is-right': isRight,
  }
  return <div className={classnames('buttons', sized)}>{children}</div>
}
