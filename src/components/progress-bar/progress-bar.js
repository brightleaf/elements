import React, { forwardRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { allTheClasses } from '../modifiers'

const ProgressBar = ({ children, className, min, max, value, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <progress
      className={classnames('progress', className, classes)}
      value={value}
      max={max}
      min={min}
    >
      {children}
    </progress>
  )
}

ProgressBar.propTypes = {
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
}

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  value: null,
}

export { ProgressBar }

export default ProgressBar
