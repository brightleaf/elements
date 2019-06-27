import React from 'react'
import classnames from 'classnames'

export const Content = ({ children, className }) => {
  return <div className={classnames('content', className)}>{children}</div>
}
