import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Sizes, HasText } from '../modifiers'

export const Icon = ({
  icon = 'home',
  fas,
  fab,
  fa,
  isSmall,
  isMedium,
  isLarge,
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
    'fa-2x': isMedium,
    'fa-3x': isLarge,
  }
  const parent = {
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
    <span className={classnames('icon', parent)}>
      <i className={classnames(classes, iconName)} aria-hidden="true"></i>
    </span>
  )
}

Icon.propTypes = {
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

export default Icon

export const BaseIcon = ({
  icon = 'home',
  fas,
  fab,
  fa,
  isSmall,
  isMedium,
  isLarge,
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
    'fa-2x': isMedium,
    'fa-3x': isLarge,
  }
  const parent = {
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

  return <i className={classnames(classes, iconName)} aria-hidden="true"></i>
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
