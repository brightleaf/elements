import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { HeroContext } from '../hero'
export const Title = ({
  as: Hn,
  className,
  is,
  isSpaced,
  children,
  force,
  ...props
}) => {
  const value = useContext(HeroContext)
  const isInHero = value && value.isInHero

  const classes = {
    [`is-${is}`]: is,
    'is-spaced': isSpaced,
  }

  return (
    <Hn className={classnames('title', className, classes)} {...props}>
      {children}
    </Hn>
  )
}

Title.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  isSpaced: PropTypes.bool,
  is: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', false]),
}

Title.defaultProps = {
  as: 'h1',
  is: false,
  isSpaced: false,
}
