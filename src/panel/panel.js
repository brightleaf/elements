import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { allTheClasses } from '../modifiers'
export const PanelBlock = ({
  className,
  children,
  as: El,
  isActive,
  ...props
}) => {
  const classes = classnames('panel-block', className, {
    'is-active': isActive,
  })

  return (
    <El className={classes} {...props}>
      {children}
    </El>
  )
}
PanelBlock.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  isActive: PropTypes.bool,
}

PanelBlock.defaultProps = {
  as: 'div',
}

export const PanelTabs = ({ className, children, as: El, ...props }) => {
  const classes = classnames('panel-tabs', className)
  return (
    <El className={classes} {...props}>
      {children}
    </El>
  )
}
PanelTabs.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
}

PanelTabs.defaultProps = {
  as: 'p',
}

export const Panel = ({ heading, children, className, ...props }) => {
  return (
    <nav className={classnames('panel', className, allTheClasses(props))}>
      <p className="panel-heading">{heading}</p>
      {children}
    </nav>
  )
}
