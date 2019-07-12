import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Sizes, HasText } from '../modifiers'

export const Icon = ({
  className,
  iconClassName,
  icon = 'home',
  fas,
  fab,
  fa,
  isSmall,
  isMedium,
  isLarge,
  isMediumFA,
  isLargeFA,
  isLeft,
  isRight,
  hasTextWhite,
  hasTextBlack,
  hasTextLight,
  hasTextDark,
  hasTextPrimary,
  hasTextInfo,
  hasTextLink,
  hasTextSuccess,
  hasTextWarning,
  hasTextDanger,
  hasTextBlackBis,
  hasTextBlackTer,
  hasTextGreyDarker,
  hasTextGreyDark,
  hasTextGrey,
  hasTextGreyLight,
  hasTextGreyLighter,
  hasTextWhiteTer,
  hasTextWhiteBis,
}) => {
  const classes = {
    fa: fa,
    fas: fas,
    fab: fab,
    'fa-2x': isMediumFA,
    'fa-3x': isLargeFA,
  }
  const parent = {
    'is-left': isLeft,
    'is-right': isRight,
    ...Sizes({ isSmall, isMedium, isLarge }),
    ...HasText({
      hasTextWhite,
      hasTextBlack,
      hasTextLight,
      hasTextDark,
      hasTextPrimary,
      hasTextInfo,
      hasTextLink,
      hasTextSuccess,
      hasTextWarning,
      hasTextDanger,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextGreyDarker,
      hasTextGreyDark,
      hasTextGrey,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextWhiteTer,
      hasTextWhiteBis,
    }),
  }

  const iconName = `fa-${icon}`

  return (
    <span className={classnames(iconClassName, className, parent)}>
      <i className={classnames(classes, iconName)} aria-hidden="true"></i>
    </span>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  icon: PropTypes.string,
  fas: PropTypes.bool,
  fab: PropTypes.bool,
  fa: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  hasTextWhite: PropTypes.bool,
  hasTextBlack: PropTypes.bool,
  hasTextLight: PropTypes.bool,
  hasTextDark: PropTypes.bool,
  hasTextPrimary: PropTypes.bool,
  hasTextInfo: PropTypes.bool,
  hasTextLink: PropTypes.bool,
  hasTextSuccess: PropTypes.bool,
  hasTextWarning: PropTypes.bool,
  hasTextDanger: PropTypes.bool,
  hasTextBlackBis: PropTypes.bool,
  hasTextBlackTer: PropTypes.bool,
  hasTextGreyDarker: PropTypes.bool,
  hasTextGreyDark: PropTypes.bool,
  hasTextGrey: PropTypes.bool,
  hasTextGreyLight: PropTypes.bool,
  hasTextGreyLighter: PropTypes.bool,
  hasTextWhiteTer: PropTypes.bool,
  hasTextWhiteBis: PropTypes.bool,
}
Icon.defaultProps = {
  iconClassName: 'icon',
}
export default Icon

export const BaseIcon = ({
  icon = 'home',
  fas,
  fab,
  fa,
  isMediumFA,
  isLargeFA,
  className,
}) => {
  const classes = {
    fa: fa,
    fas: fas,
    fab: fab,
    'fa-2x': isMediumFA,
    'fa-3x': isLargeFA,
  }

  const iconName = `fa-${icon}`
  return (
    <i
      className={classnames(classes, className, iconName)}
      aria-hidden="true"
    ></i>
  )
}

BaseIcon.propTypes = {
  icon: PropTypes.string,
  fas: PropTypes.bool,
  fab: PropTypes.bool,
  fa: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  hasTextWhite: PropTypes.bool,
  hasTextBlack: PropTypes.bool,
  hasTextLight: PropTypes.bool,
  hasTextDark: PropTypes.bool,
  hasTextPrimary: PropTypes.bool,
  hasTextInfo: PropTypes.bool,
  hasTextLink: PropTypes.bool,
  hasTextSuccess: PropTypes.bool,
  hasTextWarning: PropTypes.bool,
  hasTextDanger: PropTypes.bool,
  hasTextBlackBis: PropTypes.bool,
  hasTextBlackTer: PropTypes.bool,
  hasTextGreyDarker: PropTypes.bool,
  hasTextGreyDark: PropTypes.bool,
  hasTextGrey: PropTypes.bool,
  hasTextGreyLight: PropTypes.bool,
  hasTextGreyLighter: PropTypes.bool,
  hasTextWhiteTer: PropTypes.bool,
  hasTextWhiteBis: PropTypes.bool,
}
