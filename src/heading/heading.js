import React from 'react'
import classnames from 'classnames'

export const Heading = ({ children, className }) => {
  return <p className={classnames('heading', className)}>{children}</p>
}
