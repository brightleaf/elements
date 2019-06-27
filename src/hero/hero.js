import React from 'react'
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
export const Hero = ({
  children,
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
  if (!Array.isArray(children)) {
    return (
      <section
        className={classnames('hero', classes, sizeClasses, screenSizes, {
          'is-bold': isBold,
        })}
      >
        <div className="hero-body">{children}</div>
      </section>
    )
  }
  return (
    <section className={classnames('hero', classes, sizeClasses)}>
      {children}
    </section>
  )
}
