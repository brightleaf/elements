import React from 'react'
import classnames from 'classnames'
import { Screens } from '../modifiers'

export const CardHeaderIcon = ({ children, onClick, ...props }) => {
  return (
    <a
      href="#"
      className="card-header-icon"
      aria-label="more options"
      onClick={onClick}
    >
      {children}
    </a>
  )
}
export const CardHeader = ({ title, className, children }) => {
  return (
    <header className={classnames('card-header', className)}>
      <p className="card-header-title">{title}</p>

      {children}
    </header>
  )
}
CardHeader.sortOrder = 0

export const CardFooterItem = ({ className, children }) => {
  const kid = React.cloneElement(children, {
    className: classnames('card-footer-item', className),
  })
  return <>{kid}</>
}
export const CardFooter = ({ children, className }) => {
  return (
    <footer className={classnames('card-footer', className)}>{children}</footer>
  )
}

CardFooter.sortOrder = 5

export const CardImage = ({ src, alt, className }) => {
  return (
    <div className={classnames('card-image', className)}>
      <figure className="image is-4by3">
        <img src={src} alt={alt} />
      </figure>
    </div>
  )
}

CardImage.sortOrder = 1
export const CardImageContainer = ({
  children,
  className,
  hasTextCentered,
}) => {
  const classes = {
    'has-text-centered': hasTextCentered,
  }
  return (
    <div className={classnames('card-image', className, classes)}>
      {children}
    </div>
  )
}
CardImageContainer.sortOrder = 1
export const CardBody = ({ children, className }) => {
  return <div className={classnames('card-content', className)}>{children}</div>
}
CardBody.sortOrder = 2

export const Card = ({
  children,
  isMobile,
  isFluid,
  isWideScreen,
  isFullHD,
  className,
  onClick,
}) => {
  const classes = Screens({ isMobile, isFluid, isWideScreen, isFullHD })
  const childrenAsArray = React.Children.toArray(children).sort(
    (childA, childB) => {
      if (childA.type.sortOrder < childB.type.sortOrder) {
        return -1
      }
      if (childA.type.sortOrder > childB.type.sortOrder) {
        return 1
      }
      return 0
    }
  )
  var types = [CardHeader, CardBody, CardFooter, CardImage, CardImageContainer]
  childrenAsArray.forEach(child => {
    if (
      types.indexOf(child.type) > -1 ||
      (child.props.className && child.props.className.indexOf('card') > -1)
    ) {
      return
    }

    if (child.type.name === 'Collapse') {
      return
    }
    console.warn(`'${child.type}' not allowed`)
  })
  return (
    <div className={classnames('card', className, classes)} onClick={onClick}>
      {childrenAsArray}
    </div>
  )
}

Card.propTypes = {}
Card.defaultProps = {
  className: '',
  isMobile: false,
  isFluid: false,
  isWideScreen: false,
  isFullHD: false,
  onClick: () => {},
}
