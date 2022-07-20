import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Base } from '../base'

export const Collapse = ({
  className,
  children,
  isShown,
  animationIn,
  animationOut,
  ...props
}) => {
  const container = useRef()

  const animation = {
    animated: true,
    animation: true,
    [animationIn]: isShown,
    [animationOut]: !isShown,
    'is-hidden': !isShown,
  }

  useEffect(() => {
    const onEnd = ({ target, animationName }) => {
      if (animationName.indexOf('Out') > -1) {
        target.classList.add('is-hidden')
      }
    }
    const onStart = ({ target, animationName }) => {
      target.classList.remove('is-hidden')
    }
    if (container.current) {
      container.current.addEventListener('animationend', onEnd)
      container.current.addEventListener('animationstart', onStart)
      return () => {
        container.current.removeEventListener('animationend', onEnd)
        container.current.removeEventListener('animationstart', onStart)
      }
    }
  }, [isShown])

  return (
    <Base
      ref={container}
      className={classnames('collapsed', className, animation)}
      {...props}
    >
      {children}
    </Base>
  )
}

export default Collapse

Collapse.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  isShown: PropTypes.bool,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
}

Collapse.defaultProps = {
  as: 'div',
  isShown: true,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
}
