import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'
import { propTypes } from '../utils/prop-types'

const Box = ({ children, className, ...props }) => {
  return (
    <Base className={classnames('box', className)} {...props}>
      {children}
    </Base>
  )
}

Box.propTypes = propTypes

Box.defaultProps = {
  as: 'div',
}

export { Box }

export default Box
