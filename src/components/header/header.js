import React from 'react'
import classnames from 'classnames'

export const Header = ({ children, className }) => {
  return <div className={classnames('header', className)}>{children}</div>
}
