import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'
import { propTypes } from '../utils/prop-types'
export const Number = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('number', className)} {...props}>
      {children}
    </Base>
  )
}

Number.propTypes = propTypes

Number.defaultProps = {
  as: 'div',
}

export default Number
