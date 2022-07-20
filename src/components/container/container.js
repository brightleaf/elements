import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

export const Container = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('container', className)} {...props}>
      {children}
    </Base>
  )
}

export default Container

Container.defaultProps = {
  className: '',
  isMobile: false,
  isFluid: false,
  isWideScreen: false,
  isFullHD: false,
  as: 'div',
}
