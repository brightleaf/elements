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

  const classNameObj = {}
  if (classes.length > 0) {
    classNameObj.className = classes
  }
  return (
    <thead {...classNameObj} {...props}>
      {children}
    </thead>
  )
}

export const TableFoot = ({ className, children, ...props }) => {
  const classes = classnames(className)

  const classNameObj = {}
  if (classes.length > 0) {
    classNameObj.className = classes
  }
  return (
    <tfoot {...classNameObj} {...props}>
      {children}
    </tfoot>
  )
}

export const TableRow = ({ className, children, ...props }) => {
  const classes = classnames(className)
  const classNameObj = {}
  if (classes.length > 0) {
    classNameObj.className = classes
  }
  return (
    <tr {...classNameObj} {...props}>
      {children}
    </tr>
  )
}

export const TableHeaderCell = ({ className, children, ...props }) => {
  const classes = classnames(className)
  const classNameObj = {}
  if (classes.length > 0) {
    classNameObj.className = classes
  }
  return (
    <th {...classNameObj} {...props}>
      {children}
    </th>
  )
}

export const TableCell = ({ className, children, ...props }) => {
  const classes = classnames(className)
  const classNameObj = {}
  if (classes.length > 0) {
    classNameObj.className = classes
  }
  return (
    <td {...classNameObj} {...props}>
      {children}
    </td>
  )
}

export const TableBody = ({ className, children, ...props }) => {
  const classes = classnames(className)
  const classNameObj = {}
  if (classes.length > 0) {
    classNameObj.className = classes
  }

  return (
    <tbody {...classNameObj} {...props}>
      {children}
    </tbody>
  )
}

export const TableContainer = ({ className, children, ...props }) => {
  const classes = classnames('table-container', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
