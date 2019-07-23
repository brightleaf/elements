import React from 'react'
import classnames from 'classnames'
import { allTheClasses } from '../modifiers'
export const Content = ({ children, className, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <div className={classnames('content', className, classes)}>{children}</div>
  )
}
