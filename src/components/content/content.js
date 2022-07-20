import React from 'react'
import classnames from 'classnames'
import { allTheClasses } from '../modifiers'
import { propTypes } from '../utils/prop-types'
export const Content = ({ children, className, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <div className={classnames('content', className, classes)}>{children}</div>
  )
}

Content.propTypes = propTypes
