import React from 'react'
import classnames from 'classnames'
import { allTheClasses } from '../modifiers'
import { propTypes } from '../utils/prop-types'

const Footer = ({ children, className, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <footer className={classnames('footer', className, classes)}>
      {children}
    </footer>
  )
}

Footer.propTypes = propTypes

export { Footer }

export default Footer
