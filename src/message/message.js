import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Colors, Sizes } from '../modifiers'
const MessageContext = createContext()

export const MessageHeader = ({
  hasDelete,
  children,
  onDeleteClick,
  className,
}) => {
  const value = useContext(MessageContext)

  const classes = Sizes(value)

  return (
    <div className={classnames('message-header', className)}>
      <p>{children}</p>
      {hasDelete && (
        <button
          className={classnames('delete', classes)}
          aria-label="delete"
          onClick={onDeleteClick}
        ></button>
      )}
    </div>
  )
}

MessageHeader.propTypes = {
  hasDelete: PropTypes.bool,
  children: PropTypes.node,
  onDeleteClick: PropTypes.func,
}

MessageHeader.defaultProps = {
  hasDelete: true,
  onDeleteClick: () => {},
}

export const MessageBody = ({ children, className }) => {
  return <div className={classnames('message-body', className)}>{children}</div>
}

MessageBody.propTypes = {
  children: PropTypes.node,
}

export const Message = ({
  children,
  isSmall,
  isMedium,
  isLarge,
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
  const classes = {
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
    ...Sizes({
      isSmall,
      isMedium,
      isLarge,
    }),
  }
  return (
    <MessageContext.Provider value={{ isSmall, isMedium, isLarge }}>
      <article className={classnames('message', className, classes)}>
        {children}
      </article>
    </MessageContext.Provider>
  )
}