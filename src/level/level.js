import React from 'react'
import classnames from 'classnames'

export const LevelLeft = ({ children }) => {
  return <div className="level-left">{children}</div>
}
export const LevelRight = ({ children }) => {
  return <div className="level-right">{children}</div>
}
export const LevelItem = ({ className, children, hasTextCentered }) => {
  const kid = React.cloneElement(children, {
    className: classnames('level-item', className, {
      'has-text-centered': hasTextCentered,
    }),
  })
  return <>{kid}</>
}

export const Level = ({ children, isMobile }) => {
  const classNames = classnames('level', { 'is-mobile': isMobile })

  return <nav className={classNames}>{children}</nav>
}
