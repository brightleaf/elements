import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { HeroContext } from '../hero'

export const SubTitle = ({
  as: Hn,
  className,
  is,
  isSpaced,
  children,
  ...props
}) => {
  const value = useContext(HeroContext)
  const isInHero = value && value.isInHero
  const classes = {
    [`is-${is}`]: !isInHero && !!is,
    'is-spaced': isSpaced,
  }

  return (
    <Hn className={classnames('subtitle', className, classes)} {...props}>
      {children}
    </Hn>
  )
}

SubTitle.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  isSpaced: PropTypes.bool,
  is: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', false]),
}

SubTitle.defaultProps = {
  as: 'h2',
  is: false,
  isSpaced: false,
}

export default SubTitle
