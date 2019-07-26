import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
export const MediaLeft = ({ children, className, as: Element }) => {
  return (
    <Element className={classnames('media-left', className)}>
      {children}
    </Element>
  )
}
MediaLeft.propTypes = {
  as: PropTypes.node,
}
MediaLeft.defaultProps = {
  as: 'figure',
}
MediaLeft.sortOrder = 0

export const MediaContent = ({ children, className }) => {
  return (
    <div className={classnames('media-content', className)}>{children}</div>
  )
}

MediaContent.sortOrder = 1

export const MediaRight = ({ children, className, as: Element }) => {
  return (
    <Element className={classnames('media-right', className)}>
      {children}
    </Element>
  )
}
MediaRight.propTypes = {
  as: PropTypes.node,
}
MediaRight.defaultProps = {
  as: 'div',
}

MediaRight.sortOrder = 2

export const MediaObject = ({ children, className, as: Element }) => {
  return (
    <Element className={classnames('media', className)}>{children}</Element>
  )
}
MediaObject.propTypes = {
  as: PropTypes.node,
}
MediaObject.defaultProps = {
  as: 'article',
}
