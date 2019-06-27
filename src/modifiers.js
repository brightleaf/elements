export const Colors = ({
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
}) => ({
  'is-primary': isPrimary,
  'is-success': isSuccess,
  'is-info': isInfo,
  'is-warning': isWarning,
  'is-danger': isDanger,
  'is-link': isLink,
  'is-light': isLight,
})
export const Sizes = ({ isSmall, isMedium, isLarge }) => ({
  'is-small': isSmall,
  'is-medium': isMedium,
  'is-large': isLarge,
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

export const StyleOrState = ({ isOutlined, isLoading }) => ({
  'is-loading': isLoading,
  'is-outlined': isOutlined,
})
