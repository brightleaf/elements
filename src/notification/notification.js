import React, { useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { Colors } from '../modifiers'
import './notification.css'

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
  // console.info('isShow?', isShown)
  const [show, setShow] = useState(false)
  const trig = useCallback(() => {
    console.log('trigged', !show)
    return setShow(!show)
  }, [])
  // console.info('show state?', show)
  if (isShown && !show) {
    console.info('that thing', isShown)
    console.log('that show state', show)
    trig()
  }
  return (
    <>
      {' '}
      {show && (
        <CSSTransition
          in={show}
          timeout={300}
          classNames="notification"
          onEnter={element => {
            console.info('onEnter', element)
            element.classList.remove('is-hidden')
            // element.classList.remove('notification-exit-done')
          }}
          onEntered={() => console.info('onEntered')}
          onExit={() => console.info('onExit')}
          onExited={element => {
            console.info('onExited', element)
            element.classList.add('is-hidden')
            // element.classList.remove('notification-exit-done')
          }}
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
                console.info('dismiss click', show)
                setShow(false)
                console.info('dismiss click after', show)
                trig()
              }}
            ></button>
            {children}
          </div>
        </CSSTransition>
      )}
    </>
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
