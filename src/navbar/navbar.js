import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { Colors } from '../modifiers'
import { Base } from '../base'
export const NavBarItem = ({ children, className, isActive, ...props }) => {
  const kid = React.cloneElement(children, {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    className: classnames('navbar-item', className, { 'is-active': isActive }),
    ...props,
  })
  return <>{kid}</>
}
const noop = () => {}
export const NavBarBurger = ({ onClick }) => {
  return (
    <div
      className="navbar-burger burger"
      data-target="navMenu"
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
NavBarBurger.defaultProps = {
  onClick: noop,
}
export const NavBarBrand = ({
  href,
  src,
  className,
  target,
  onClick,
  width = 112,
  height = 28,
  title,
}) => {
  return (
    <div className="navbar-brand">
      <a className={classnames('navbar-item', className)} href={href}>
        {src && <img src={src} width={width} height={height} alt={title} />}
        {title}
      </a>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target={target}
        onClick={onClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  )
}

export const NavBarDivider = ({ className }) => (
  <hr className={classnames('navbar-divider', className)} />
)

export const NavBarDropDown = ({
  title,
  isRight,
  children,
  isBoxed,
  className,
}) => {
  const classes = classnames(
    'navbar-item',
    'has-dropdown',
    'is-hoverable',
    className,
    {
      'is-right': isRight,
      'is-boxed': isBoxed,
    }
  )

  const ddClasses = classnames('navbar-dropdown', {
    'is-boxed': isBoxed,
  })

  return (
    <div className={classes}>
      <a className="navbar-link">{title}</a>
      <div className={ddClasses}>{children}</div>
    </div>
  )
}
export const NavBarStart = ({ children, className }) => {
  return <div className={classnames('navbar-start', className)}>{children}</div>
}
export const NavBarEnd = ({ children, className }) => {
  return <div className={classnames('navbar-end', className)}>{children}</div>
}
export const NavBarMenu = ({ children, id, isActive, className }) => {
  return (
    <div
      id={id}
      className={classnames('navbar-menu', className, {
        'is-active': isActive,
      })}
    >
      {children}
    </div>
  )
}
export const NavBar = ({
  children,
  isFixedTop,
  isFixedBottom,
  className,
  ...props
}) => {
  // is-transparent is-fixed-top  is-fixed-bottom
  const [isActive, setActive] = useState(false)
  useEffect(() => {
    if (isFixedTop) {
      const body = document.body
      if (!body) {
        return
      }
      body.classList.add('has-navbar-fixed-top')
      return () => {
        body.classList.remove('has-navbar-fixed-top')
      }
    }
    if (isFixedBottom) {
      const body = document.body
      if (!body) {
        return
      }
      body.classList.add('has-navbar-fixed-bottom')
      return () => {
        body.classList.remove('has-navbar-fixed-bottom')
      }
    }
  }, [isFixedTop, isFixedBottom])

  const classes = classnames('navbar', className, {
    'is-fixed-top': isFixedTop,
    'is-fixed-bottom': isFixedBottom,
  })

  const kids = React.Children.map(children, (child, i) => {
    if (child.type === NavBarBrand) {
      return React.cloneElement(child, {
        onClick: e => {
          e.preventDefault()
          setActive(!isActive)
        },
      })
    }
    if (child.type === NavBarMenu) {
      return React.cloneElement(child, {
        isActive: isActive,
      })
    }
    return child
  })
  const propsToPass = { isActive, isFixedBottom, isFixedTop }

  return (
    <Base
      as="nav"
      className={classes}
      role="navigation"
      aria-label="main navigation"
      {...props}
      {...propsToPass}
    >
      {kids}
    </Base>
  )
}
