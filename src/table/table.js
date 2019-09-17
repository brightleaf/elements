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

export const TableHead = ({ className, children, ...props }) => {
  const classes = classnames(className)

  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  )
}

export const TableFoot = ({ className, children, ...props }) => {
  const classes = classnames(className)
  return (
    <tfoot className={classes} {...props}>
      {children}
    </tfoot>
  )
}

export const TableRow = ({ className, children, ...props }) => {
  const classes = classnames(className)
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  )
}

export const TableHeaderCell = ({ className, children, ...props }) => {
  const classes = classnames(className)

  return (
    <th className={classes} {...props}>
      {children}
    </th>
  )
}

export const TableCell = ({ className, children, ...props }) => {
  const classes = classnames(className)

  return (
    <td className={classes} {...props}>
      {children}
    </td>
  )
}

export const TableBody = ({ className, children, ...props }) => {
  const classes = classnames(className)

  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  )
}
