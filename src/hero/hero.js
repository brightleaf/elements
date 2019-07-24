import React, { createContext } from 'react'
import classnames from 'classnames'
import { Colors, Sizes, Screens } from '../modifiers'

export const HeroHead = ({ children, className }) => {
  return <div className={classnames('hero-head', className)}>{children}</div>
}
export const HeroBody = ({ children, className }) => {
  return <div className={classnames('hero-body', className)}>{children}</div>
}
export const HeroFooter = ({ children, className }) => {
  return <div className={classnames('hero-foot', className)}>{children}</div>
}
export const HeroContext = createContext()
export const Hero = ({
  children,
  className,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isDark,
  isMedium,
  isLarge,
  isBold,
  isFullHeight,
  isFullHeightWithNavBar,
}) => {
  const classes = Colors({
    isPrimary,
    isSuccess,
    isInfo,
    isWarning,
    isDanger,
    isLink,
    isLight,
    isDark,
  })
  const sizeClasses = Sizes({
    isMedium,
    isLarge,
    isFullHeight,
  })
  const screenSizes = Screens({
    isFullHeight,
    isFullHeightWithNavBar,
  })

  if (!Array.isArray(children) && children.type !== HeroBody) {
    return (
      <HeroContext.Provider value={{ isInHero: true }}>
        <section
          className={classnames(
            'hero',
            className,
            classes,
            sizeClasses,
            screenSizes,
            {
              'is-bold': isBold,
            }
          )}
        >
          <div className="hero-body">{children}</div>
        </section>
      </HeroContext.Provider>
    )
  }
  return (
    <HeroContext.Provider value={{ isInHero: true }}>
      <section
        className={classnames(
          'hero',
          className,
          classes,
          sizeClasses,
          screenSizes,
          {
            'is-bold': isBold,
          }
        )}
      >
        {children}
      </section>
    </HeroContext.Provider>
  )
}
