import React from 'react'
import classnames from 'classnames'
export const MediaLeft = ({ children, className }) => {
  return (
    <figure className={classnames('media-left', className)}>{children}</figure>
  )
}
MediaLeft.sortOrder = 0

export const MediaContent = ({ children, className }) => {
  return (
    <div className={classnames('media-content', className)}>{children}</div>
  )
}

MediaContent.sortOrder = 1

export const MediaRight = ({ children, className }) => {
  return <div className={classnames('media-right', className)}>{children}</div>
}

MediaRight.sortOrder = 2

export const MediaObject = ({ children, className }) => {
  return (
    <article className={classnames('media', className)}>{children}</article>
  )
}
