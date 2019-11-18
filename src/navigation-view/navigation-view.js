import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useToggle } from '../modal'
import './navigation-view.css'

export const NavigationView = ({ children, className, isStatic }) => {
  const [isActive, setIsActive] = useToggle(false)
  return (
    <div
      className={classnames('navigation-view', className, {
        'is-static': isStatic,
        'is-active': isActive,
      })}
    >
      <a
        className={classnames('navbar-burger', { 'is-active': !isActive })}
        role="button"
        aria-expanded="false"
        aria-label="menu"
        onClick={() => {
          setIsActive(!isActive)
        }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      {children}
    </div>
  )
}

NavigationView.propTypes = {
  className: PropTypes.string,
  isStatic: PropTypes.bool,
}

NavigationView.defaultProps = {
  isStatic: true,
}

export default NavigationView
