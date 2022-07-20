import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'
import { propTypes } from '../utils/prop-types'
export const Highlight = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('highlight', className)} {...props}>
      {children}
    </Base>
  )
}

Highlight.propTypes = propTypes

Highlight.defaultProps = {
  as: 'div',
}

export default Highlight
