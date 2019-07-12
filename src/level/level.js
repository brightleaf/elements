import React from 'react'
import classnames from 'classnames'

export const LevelLeft = ({ children, className }) => {
  return <div className={classnames('level-left', className)}>{children}</div>
}
export const LevelRight = ({ children, className }) => {
  return <div className={classnames('level-right', className)}>{children}</div>
}
export const LevelItem = ({ className, children, hasTextCentered }) => {
  const kid = React.cloneElement(children, {
    className: classnames('level-item', className, {
      'has-text-centered': hasTextCentered,
    }),
  })
  return <>{kid}</>
}

export const Level = ({ children, isMobile, className }) => {
  const classNames = classnames('level', className, { 'is-mobile': isMobile })

  return <nav className={classNames}>{children}</nav>
}
