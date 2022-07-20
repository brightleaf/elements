import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

export const Loader = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('loader', className)} {...props}>
      {children}
    </Base>
  )
}

Loader.defaultProps = {
  as: 'div',
}

export default Loader
