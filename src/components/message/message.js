import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Collapse } from '../collapse'
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
          onClick={e => {
            onDeleteClick(e)
            if (!e.isDefaultPrevented()) {
              value.closeMessage()
            }
          }}
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
  isShown,
  className,
  onClose,
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

  const [show, setShow] = useState(isShown)

  return (
    <MessageContext.Provider
      value={{
        isSmall,
        isMedium,
        isLarge,
        closeMessage: () => {
          onClose()
          setShow(false)
        },
      }}
    >
      <Collapse isShown={show}>
        <article className={classnames('message', className, classes)}>
          {children}
        </article>
      </Collapse>
    </MessageContext.Provider>
  )
}
Message.defaultProps = {
  isShown: true,
  onClose: () => {},
}
