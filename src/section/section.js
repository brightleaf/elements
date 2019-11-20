import React from 'react'
import classnames from 'classnames'
import { Base } from '../base'

export const Section = ({ className, children, ...props }) => {
  return (
    <Base className={classnames('section', className)} {...props}>
      {children}
    </Base>
  )
}

Section.defaultProps = {
  className: '',
  as: 'div',
}

export default Section
