import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

export const Number = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('number', className)} {...props}>
      {children}
    </Base>
  )
}

Number.defaultProps = {
  as: 'div',
}

export default Number
