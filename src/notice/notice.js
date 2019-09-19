import React, { useEffect, useRef, useState } from 'react'
import { createPortal, unmountComponentAtNode } from 'react-dom'
import classnames from 'classnames'
import { allTheClasses } from '../modifiers'
import { useToggle } from '../modal'
import './notice.css'

const createRootElement = id => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  rootContainer.classList.add('notices')
  return rootContainer
}

const addRootElement = rootElem => {
  document.body.append(rootElem)
}

const usePortal = (id, className, topLevelClassName) => {
  const rootElemRef = useRef(null)

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)

    if (!existingParent) {
      addRootElement(parentElem)
    }
    parentElem.appendChild(rootElemRef.current)
    topLevelClassName.split(' ').forEach(cname => {
      if (parentElem) {
        parentElem.classList.add(cname)
      }
    })

    return function removeElement() {
      rootElemRef.current.remove()
      if (parentElem.childNodes.length === -1) {
        parentElem.remove()
      }
    }
  }, [])

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }

    if (className) {
      rootElemRef.current.className = ''
      className.split(' ').forEach(cname => {
        rootElemRef.current.classList.add(cname)
      })
    }
    return rootElemRef.current
  }

  return getRootElem()
}
const Portal = ({ id, children, className, topLevelClassName }) => {
  const target = usePortal(id, className, topLevelClassName)

  const p = createPortal(children, target)

  const onEnd = ({ target, animationName }) => {
    if (animationName.indexOf('Out') > -1) {
      // target.classList.add('is-hidden')
      target.remove()
      // unmountComponentAtNode(target)
    }
  }
  const onStart = ({ target, animationName }) => {
    console.log('on start')
    target.classList.remove('is-hidden')
  }

  useEffect(() => {
    if (p.containerInfo) {
      p.containerInfo.addEventListener('animationend', onEnd)
      p.containerInfo.addEventListener('animationstart', onStart)
      return () => {
        p.containerInfo.removeEventListener('animationend', onEnd)
        p.containerInfo.removeEventListener('animationstart', onStart)
      }
    }
  })
  return p
}
export const Notice = ({
  children,
  isShown,
  className,
  onAction,
  duration,
  isTop,
  isBottom,
  isRight,
  isLeft,
  isBottomLeft,
  isBottomRight,
  isTopLeft,
  isTopRight,
  onHide,
  actionText,
  ...props
}) => {
  let topLevelClassName = classnames({
    'is-top': isTop,
    'is-bottom': isBottom,
  })

  const classes = allTheClasses({
    isTop,
    isBottom,
    isRight,
    isLeft,
    isBottomLeft,
    isBottomRight,
    isTopLeft,
    isTopRight,
    ...props,
  })

  const buttonClasses = allTheClasses(props)
  const [show, setShow] = useState(isShown)

  classes['is-top-right'] = isTopRight
  classes['is-bottom-left'] = isBottomLeft
  classes['is-top-left'] = isTopLeft
  classes['is-top'] = isTop
  classes['is-bottom'] = isBottom

  classes['is-bottom-right'] = isBottomRight
  const valueSet =
    isBottom ||
    isTop ||
    isTopLeft ||
    isBottomLeft ||
    isBottomRight ||
    isTopRight

  let bottomContainer = isBottom || isBottomLeft || isBottomRight
  if (!valueSet) {
    classes['is-bottom-right'] = true
    classes['is-bottom'] = true
    bottomContainer = true

    topLevelClassName = classnames({
      'is-top': isTop,
      'is-bottom': true,
    })
  }
  classes['animated'] = true
  classes['fadeOut'] = !show
  classes['fadeIn'] = show
  useEffect(() => {
    setShow(isShown)
    if (!isShown) return
    const timer = setTimeout(() => {
      setShow(false)
      onHide()
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [isShown])

  const id = bottomContainer ? 'notice-bottom' : 'notice-top'
  if (!isShown) {
    return <></>
  }
  return (
    <Portal
      id={id}
      className={classnames('snackbar', classes)}
      topLevelClassName={topLevelClassName}
    >
      <div className="text">{children}</div>
      <div className={classnames('action', buttonClasses)}>
        {onAction && (
          <a
            href="#"
            className={classnames('button')}
            onClick={e => {
              e.preventDefault()
              onAction({
                close: () => {
                  setShow(false)
                  onHide()
                },
              })
            }}
          >
            {actionText}
          </a>
        )}
      </div>
    </Portal>
  )
}

Notice.defaultProps = {
  actionText: 'OK',
  isShown: true,

  duration: 2000,
  isLeft: false,
  isTop: false,
  isBottom: false,
  isRight: false,
  onHide: () => {},
}
export default Notice
