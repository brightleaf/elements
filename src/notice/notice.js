import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import { Collapse } from '../collapse'
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

    topLevelClassName.split(' ').forEach(cname => {
      if (parentElem.current) {
        parentElem.current.classList.add(cname)
      }
    })
    if (!existingParent) {
      addRootElement(parentElem)
    }

    parentElem.appendChild(rootElemRef.current)

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

      if (className) {
        className.split(' ').forEach(cname => {
          rootElemRef.current.classList.add(cname)
        })
      }
    }

    return rootElemRef.current
  }

  return getRootElem()
}
const Portal = ({ id, children, className, topLevelClassName }) => {
  const target = usePortal(id, className, topLevelClassName)

  return createPortal(children, target)
}
export const Notice = ({
  children,
  isShown,
  className,
  onClose,
  duration,
  isTop,
  isBottom,
  isRight,
  isLeft,
  isBottomLeft,
  isBottomRight,
  isTopLeft,
  isTopRight,
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

  const [show, setShow] = useToggle(isShown)

  const animIn = isTop ? 'slideInDown' : 'slideInUp'
  // classes['is-bottom-right'] = isBottomRight
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
    bottomContainer = true

    topLevelClassName = classnames({
      'is-top': isTop,
      'is-bottom': true,
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [isShown])

  const id = bottomContainer ? 'notice-bottom' : 'notice-top'

  return (
    <Portal
      id={id}
      className={classnames('snackbar', classes)}
      topLevelClassName={topLevelClassName}
    >
      <div className="text">{children}</div>
      <div className="action">?</div>
    </Portal>
  )
}

Notice.defaultProps = {
  isShown: true,
  onClose: () => {},
  duration: 2000,
  isLeft: false,
  isTop: false,
  isBottom: false,
  isRight: false,
}
export default Notice
