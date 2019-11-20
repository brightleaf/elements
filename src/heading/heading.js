import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

export const Heading = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('heading', className)} {...props}>
      {children}
    </Base>
  )
}

Heading.defaultProps = {
  as: 'p',
}

export default Heading
