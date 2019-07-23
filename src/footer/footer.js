import React from 'react'
import classnames from 'classnames'
import { allTheClasses } from '../modifiers'

const Footer = ({ children, className, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <footer className={classnames('footer', className, classes)}>
      {children}
    </footer>
  )
}

export { Footer }

export default Footer
