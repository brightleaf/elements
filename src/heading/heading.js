import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'
import { propTypes } from '../utils/prop-types'


export const Heading = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('heading', className)} {...props}>
      {children}
    </Base>
  )
}

Heading.propTypes = propTypes

Heading.defaultProps = {
  as: 'p',
}

export default Heading
