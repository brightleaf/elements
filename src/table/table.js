import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/*
The inevitable HTML table, with special case cells
*/
export const Table = ({
  isBordered,
  isFullWidth,
  isHoverable,
  isNarrow,
  isStriped,
  className,
  children,
  ...props
}) => {
  const classes = classnames(
    'table',
    {
      'is-bordered': isBordered,
      'is-fullwidth': isFullWidth,
      'is-hoverable': isHoverable,
      'is-narrow': isNarrow,
      'is-striped': isStriped,
    },
    className
  )

  return (
    <table className={classes} {...props}>
      {children}
    </table>
  )
}

Table.propTypes = {
  isBordered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  className: PropTypes.string,
  isHoverable: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isStriped: PropTypes.bool,
}

export default Table
