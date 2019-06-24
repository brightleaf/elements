import React from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { Colors } from '../modifiers'

export const Notification = ({
  isShown,
  children,
  onDismiss,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
}) => {
  const classes = Colors({
    isPrimary,
    isSuccess,
    isInfo,
    isWarning,
    isDanger,
    isLink,
  })
  return (
    <CSSTransition
      in={isShown}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onEnter={() => console.log('onEnter')}
      onExited={() => console.log('onExited')}
    >
      <div
        className={classnames('notification', classes)}
        title="notification element"
      >
        <button
          title="dismiss notification"
          className="delete notification-dismiss"
          onClick={e => {
            e.preventDefault()
            onDismiss()
          }}
        ></button>
        {children}
      </div>
    </CSSTransition>
  )
}

export default Notification

Notification.defaultProps = {
  isShown: true,
  isPrimary: false,
  isSuccess: false,
  isInfo: false,
  isWarning: false,
  isDanger: false,
  isLink: false,
  onClose: () => {},
  onExit: () => {},
  onDismiss: () => {},
}
