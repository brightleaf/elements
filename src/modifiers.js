export const Colors = ({
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
}) => ({
  'is-primary': isPrimary,
  'is-success': isSuccess,
  'is-info': isInfo,
  'is-warning': isWarning,
  'is-danger': isDanger,
  'is-link': isLink,
  'is-light': isLight,
  'is-white': isWhite,
  'is-dark': isDark,
  'is-black': isBlack,
  'is-text': isText,
})

export const Sizes = ({
  isSmall,
  isNormal,
  isMedium,
  isLarge,
  isFullWidth,
}) => ({
  'is-small': isSmall,
  'is-normal': isNormal,
  'is-medium': isMedium,
  'is-large': isLarge,
  'is-fullwidth': isFullWidth,
})

export const Screens = ({
  isMobile,
  isFluid,
  isWideScreen,
  isFullHD,
  isFullHeight,
  isFullHeightWithNavBar,
}) => ({
  'is-mobile': isMobile,
  'is-fluid': isFluid,
  'is-widescreen': isWideScreen,
  'is-fullhd': isFullHD,
  'is-fullheight': isFullHeight,
  'is-fullheight-with-navbar': isFullHeightWithNavBar,
})

export const StyleOrState = ({
  isOutlined,
  isInverted,
  isLoading,
  isActive,
  isFocused,
  isHovered,
  isRounded,
  isStatic,
  isSelected,
}) => ({
  'is-loading': isLoading,
  'is-outlined': isOutlined,
  'is-active': isActive,
  'is-focused': isFocused,
  'is-inverted': isInverted,
  'is-hovered': isHovered,
  'is-rounded': isRounded,
  'is-static': isStatic,
  'is-selected': isSelected,
})

export const HasText = ({
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
  hasTextCentered,
}) => ({
  'has-text-white': hasTextWhite,
  'has-text-black': hasTextBlack,
  'has-text-light': hasTextLight,
  'has-text-dark': hasTextDark,
  'has-text-primary': hasTextPrimary,
  'has-text-info': hasTextInfo,
  'has-text-link': hasTextLink,
  'has-text-success': hasTextSuccess,
  'has-text-warning	': hasTextWarning,
  'has-text-danger': hasTextDanger,
  'has-text-black-bis': hasTextBlackBis,
  'has-text-black-ter': hasTextBlackTer,
  'has-text-grey-darker': hasTextGreyDarker,
  'has-text-grey-dark': hasTextGreyDark,
  'has-text-grey': hasTextGrey,
  'has-text-grey-light': hasTextGreyLight,
  'has-text-grey-lighter': hasTextGreyLighter,
  'has-text-white-ter': hasTextWhiteTer,
  'has-text-white-bis': hasTextWhiteBis,
  'has-text-centered': hasTextCentered,
})

export const BackgroundColor = ({
  hasBackgroundWhite,
  hasBackgroundBlack,
  hasBackgroundLight,
  hasBackgroundDark,
  hasBackgroundPrimary,
  hasBackgroundInfo,
  hasBackgroundLink,
  hasBackgroundSuccess,
  hasBackgroundWarning,
  hasBackgroundDanger,
  hasBackgroundBlackBis,
  hasBackgroundBlackTer,
  hasBackgroundGreyDarker,
  hasBackgroundGreyDark,
  hasBackgroundGrey,
  hasBackgroundGreyLight,
  hasBackgroundGreyLighter,
  hasBackgroundWhiteTer,
  hasBackgroundWhiteBis,
}) => ({
  'has-background-white': hasBackgroundWhite,
  'has-background-black': hasBackgroundBlack,
  'has-background-light': hasBackgroundLight,
  'has-background-dark': hasBackgroundDark,
  'has-background-primary': hasBackgroundPrimary,
  'has-background-info': hasBackgroundInfo,
  'has-background-link': hasBackgroundLink,
  'has-background-success': hasBackgroundSuccess,
  'has-background-warning	': hasBackgroundWarning,
  'has-background-danger': hasBackgroundDanger,
  'has-background-black-bis': hasBackgroundBlackBis,
  'has-background-black-ter': hasBackgroundBlackTer,
  'has-background-grey-darker': hasBackgroundGreyDarker,
  'has-background-grey-dark': hasBackgroundGreyDark,
  'has-background-grey': hasBackgroundGrey,
  'has-background-grey-light': hasBackgroundGreyLight,
  'has-background-grey-lighter': hasBackgroundGreyLighter,
  'has-background-white-ter': hasBackgroundWhiteTer,
  'has-background-white-bis': hasBackgroundWhiteBis,
})
export const Sized = ({
  isSize1,
  isSize2,
  isSize3,
  isSize4,
  isSize5,
  isSize6,
  isSize7,
}) => {
  return {
    'is-size-1': isSize1,
    'is-size-2': isSize2,
    'is-size-3': isSize3,
    'is-size-4': isSize4,
    'is-size-5': isSize5,
    'is-size-6': isSize6,
    'is-size-7': isSize7,
  }
}

export const Size = ({ size }) => {
  const classes = {}
  classes[`is-size-${size}`] = !!size
  return classes
}

export const FontWeight = ({
  hasTextWeightLight,
  hasTextWeightNormal,
  hasTextWeightMedium,
  hasTextWeightSemiBold,
  hasTextWeightBold,
}) => {
  return {
    'has-text-weight-light': hasTextWeightLight,
    'has-text-weight-normal': hasTextWeightNormal,
    'has-text-weight-medium': hasTextWeightMedium,
    'has-text-weight-semibold': hasTextWeightSemiBold,
    'has-text-weight-bold': hasTextWeightBold,
  }
}
export const allTheClasses = props => {
  return {
    ...Sized(props),
    ...BackgroundColor(props),
    ...Colors(props),
    ...HasText(props),
    ...StyleOrState(props),
    ...Screens(props),
    ...Sizes(props),
    ...Colors(props),
    ...Size(props),
    ...FontWeight(props),
  }
}
