import React from 'react'
import classnames from 'classnames'

export const Container = ({
  children,
  isMobile,
  className,
  isFluid,
  isWideScreen,
  isFullHD,
}) => {
  const classes = {
    'is-mobile': isMobile,
    'is-fluid': isFluid,
    'is-widescreen': isWideScreen,
    'is-fullhd': isFullHD,
  }
  return (
    <div className={classnames('container', className, classes)}>
      {children}
    </div>
  )
}
Container.defaultProps = {
  className: '',
  isMobile: false,
  isFluid: false,
  isWideScreen: false,
  isFullHD: false,
}
