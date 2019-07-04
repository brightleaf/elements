import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
/*
const o = {
  'is-0': is0,
  'is-1': is1,
  'is-2': is2,
  'is-3': is3,
  'is-4': is4,
  'is-5': is5,
  'is-6': is6,
  'is-7': is7,
  'is-8': is8,
}
*/
export const Columns = ({
  children,
  className,
  isMobile,
  isMultiline,
  isCentered,
  isNarrow,
  isGapless,
}) => {
  const classes = {
    'is-mobile': isMobile,
    'is-multiline': isMultiline,
    'is-centered': isCentered,
    'is-narrow': isNarrow,
    'is-gapless': isGapless,
  }

  return (
    <div className={classnames('columns', className, classes)}>{children}</div>
  )
}
Columns.defaultProps = {
  className: '',
  isMobile: false,
  isMultiline: false,
  isCentered: false,
  isNarrow: false,
  isGapless: false,
}
export const Column = ({
  children,
  className,
  isThreeQuarters,
  isTwoThirds,
  isHalf,
  isOneThird,
  isOneQuarter,
  isFull,
  isFourFifths,
  isThreeFifths,
  isTwoFifths,
  isOneFifth,
  isNarrow,
  size,
}) => {
  const classes = {
    'is-four-fifths': isFourFifths,
    'is-three-fifths': isThreeFifths,
    'is-two-fifths': isTwoFifths,
    'is-one-fifth': isOneFifth,
    'is-three-quarters': isThreeQuarters,
    'is-two-thirds': isTwoThirds,
    'is-half': isHalf,
    'is-one-third': isOneThird,
    'is-one-quarter': isOneQuarter,
    'is-full': isFull,
    'is-narrow': isNarrow,
  }
  if (size) {
    classes[`is-${size}`] = true
  }
  return (
    <div className={classnames('column', className, classes)}>{children}</div>
  )
}
Columns.propTypes = {
  size: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]),
}
Column.defaultProps = {
  isFourFifths: false,
  isThreeFifths: false,
  isTwoFifths: false,
  isOneFifth: false,
  isThreeQuarters: false,
  isTwoThirds: false,
  isHalf: false,
  isOneThird: false,
  isOneQuarter: false,
  isFull: false,
  isNarrow: false,
}

export const FullColumn = ({ children, className }) => (
  <Columns>
    <Column isFull className={className}>
      {children}
    </Column>
  </Columns>
)
