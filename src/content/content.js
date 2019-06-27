import React from 'react'
import classnames from 'classnames'

export const content = ({ children, className }) => {
  return <div className={classnames('content', className)}>{children}</div>
}
