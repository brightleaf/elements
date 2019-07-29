import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { allTheClasses } from '../modifiers'
import htmlAttributes from '../element-attributes'

export const Base = ({ as: Element, className, children, ...props }) => {
  const classes = allTheClasses(props)
  const { onClick } = props

  const clean = htmlAttributes.reduce((objs, current) => {
    if (props[current]) {
      objs[current] = props[current]
    }
    return objs
  }, {})
  return (
    <Element
      className={classnames(className, classes)}
      onClick={onClick}
      {...clean}
    >
      {children}
    </Element>
  )
}

Base.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
}

Base.defaultProps = {
  as: 'div',
}
