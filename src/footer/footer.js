import React from 'react'
import classnames from 'classnames'
const Footer = ({ children, className }) => {
  return <footer className={classnames('footer', className)}>{children}</footer>
}

export { Footer }

export default Footer
