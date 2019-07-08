import React from 'react'
import classnames from 'classnames'
const Box = ({ children, className }) => {
  return <div className={classnames('box', className)}>{children}</div>
}

Box.propTypes = {}

export { Box }

export default Box
