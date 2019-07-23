import React from 'react'
import classnames from 'classnames'
import { allTheClasses } from '../modifiers'

export const Section = ({ children, className, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <section className={classnames('section', className, classes)}>
      {children}
    </section>
  )
}

export default Section
