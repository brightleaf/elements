import React from 'react'

export const MediaLeft = ({ children }) => {
  return (
    <figure className="media-left">
      <p className="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </p>
    </figure>
  )
}
MediaLeft.sortOrder = 0

export const MediaContent = ({ children }) => {
  return <div className="media-content">{children}</div>
}

MediaContent.sortOrder = 1

export const MediaRight = ({ children }) => {
  return <div className="media-right">{children}</div>
}

MediaRight.sortOrder = 2

export const MediaObject = ({ children }) => {
  return <article className="media">{children}</article>
}
