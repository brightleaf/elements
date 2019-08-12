import React, { forwardRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { allTheClasses } from '../modifiers'
import htmlAttributes from '../element-attributes'

export const Base = forwardRef(
  ({ as: Element, className, children, ...props }, ref) => {
    const classes = allTheClasses(props)
    const { onClick } = props

    const clean = htmlAttributes['*']
      .concat(htmlAttributes[Element] || [])
      .reduce((objs, current) => {
        if (props[current]) {
          objs[current] = props[current]
        }
        return objs
      }, {})

    return (
      <Element
        ref={ref}
        className={classnames(className, classes)}
        onClick={onClick}
        {...clean}
      >
        {children}
      </Element>
    )
  }
)

Base.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
}

Base.defaultProps = {
  as: 'div',
}
