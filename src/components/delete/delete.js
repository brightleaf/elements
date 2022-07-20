import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Sizes } from '../modifiers'
export const Delete = ({ className, onClick, isSmall, isMedium, isLarge }) => {
  const classes = Sizes({ isSmall, isMedium, isLarge })
  return (
    <button
      className={classnames('delete', className, classes)}
      onClick={onClick}
    ></button>
  )
}

Delete.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
}

Delete.defaultProps = {
  onClick: () => {},
}

export default Delete
