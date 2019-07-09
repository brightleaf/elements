import React from 'react'
import classnames from 'classnames'
export const Section = ({ children, className }) => {
  return (
    <section className={classnames('section', className)}>{children}</section>
  )
}

export default Section
