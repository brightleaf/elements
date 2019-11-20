import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

export const Highlight = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('highlight', className)} {...props}>
      {children}
    </Base>
  )
}

Highlight.defaultProps = {
  as: 'div',
}

export default Highlight
