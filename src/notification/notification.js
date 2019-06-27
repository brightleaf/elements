import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'
import classnames from 'classnames'
import { Colors } from '../modifiers'
import './notification.css'
import '../css/animations.css'

export const Notification = forwardRef(
  (
    {
      isShown,
      children,
      onDismiss,
      onDismissed,
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isDismissible,
    },
    ref
  ) => {
    const classes = Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
    })

    const [show, setShow] = useState(!!isShown)
    console.log('isDismissible', isDismissible)
    const animation = {
      animated: isDismissible,
      animation: true,
      fadeIn: show,
      fadeOutLeft: !show,
      'is-hidden': !isShown,
    }

    const container = useRef()

    useEffect(() => {
      const onEnd = ({ target, animationName }) => {
        if (animationName.indexOf('fadeOut') > -1) {
          target.classList.add('is-hidden')
          onDismissed()
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
    }, [show])

    useImperativeHandle(ref, () => ({
      show: function() {
        setShow(true)
      },
      hide: function() {
        setShow(false)
      },
    }))

    return (
      <div
        ref={container}
        onAnimationEnd={({ target, animationName }) => {
          console.info('End Animation', { target, animationName })
        }}
        onAnimationStart={({ target, animationName }) => {
          console.info('Start Animation', { target, animationName })
        }}
        className={classnames('notification', animation, classes)}
        title="notification element"
      >
        {isDismissible && (
          <button
            title="dismiss notification"
            className="delete notification-dismiss"
            onClick={e => {
              e.preventDefault()
              console.info('dismiss click', show)
              setShow(false)
              console.info('dismiss click after', show)
              onDismiss()
            }}
          ></button>
        )}
        {children}
      </div>
    )
  }
)

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
  onDismissed: () => {},
  isDismissible: true,
}
