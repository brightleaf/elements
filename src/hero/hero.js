import React, { createContext } from 'react'
import classnames from 'classnames'
import { Colors, Sizes, Screens } from '../modifiers'

export const HeroHead = ({ children }) => {
  return <div className="hero-head">{children}</div>
}
export const HeroBody = ({ children }) => {
  return <div className="hero-body">{children}</div>
}
export const HeroFooter = ({ children }) => {
  return <div className="hero-foot">{children}</div>
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
