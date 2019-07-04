import React from 'react'
import classnames from 'classnames'

export const Image = ({
  src,
  className,
  is,
  isRounded,
  isSquare,
  is5by4,
  is1by1,
  is4by3,
  is3by2,
  is5by3,
  is16by9,
  is2by1,
  is3by1,
  is4by5,
  is3by4,
  is2by3,
  is3by5,
  is9by16,
  is1by2,
  is1by3,
  ...props
}) => {
  const classes = {
    isRounded,
    isSquare,
    is5by4,
    is1by1,
    is4by3,
    is3by2,
    is5by3,
    is16by9,
    is2by1,
    is3by1,
    is4by5,
    is3by4,
    is2by3,
    is3by5,
    is9by16,
    is1by2,
    is1by3,
  }
  if (is) {
    classes[`is-${is}by${is}`] = true
  }
  return (
    <figure className={classnames('image', className, classes)}>
      <img src={src} {...props} />
    </figure>
  )
}
