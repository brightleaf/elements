import React, { useState } from 'react'
import classnames from 'classnames'
import { Colors } from '../modifiers'

export const NavBarItem = ({ children, className, isActive, ...props }) => {
  const kid = React.cloneElement(children, {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    className: classnames('navbar-item', className, { 'is-active': isActive }),
    ...props,
  })
  return <>{kid}</>
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
  isTransparent,
  isFixedTop,
  isFixedBottom,
  isSpaced,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isWhite,
  isDark,
  isBlack,
  isText,
  className,
}) => {
  // is-transparent is-fixed-top  is-fixed-bottom
  const [isActive, setActive] = useState(false)

  const classes = classnames('navbar', className, {
    'is-transparent': isTransparent,
    'is-fixed-top': isFixedTop,
    'is-fixed-bottom': isFixedBottom,
    'is-spaced': isSpaced,
    ...Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isWhite,
      isDark,
      isBlack,
      isText,
    }),
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

  return (
    <nav className={classes} role="navigation" aria-label="main navigation">
      {kids}
    </nav>
  )
}
