import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

const Box = ({ children, className, ...props }) => {
  return (
    <Base className={classnames('box', className)} {...props}>
      {children}
    </Base>
  )
}

Box.propTypes = {}

Box.defaultProps = {
  as: 'div',
}

export { Box }

export default Box
