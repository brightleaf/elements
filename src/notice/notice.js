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
  rootContainer.classList.add('is-bottom')
  return rootContainer
}

const addRootElement = rootElem => {
  document.body.append(rootElem)
}

const usePortal = id => {
  const rootElemRef = useRef(null)

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)

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
      rootElemRef.current = document.createElement('span')
      rootElemRef.current.classList.add('root')
    }

    return rootElemRef.current
  }

  return getRootElem()
}
const Portal = ({ id, children }) => {
  const target = usePortal(id)

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
  ...props
}) => {
  const classes = allTheClasses(props)
  let defaultPosClass =
    isRight === undefined && isBottom === undefined && !isLeft && !isTop
  const [show, setShow] = useToggle(isShown)

  const animIn = isTop ? 'slideInDown' : 'slideInUp'
  classes['is-bottom-right'] = defaultPosClass
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [isShown])

  return (
    <Portal id="notice" className="notices">
      <Collapse
        className={classnames('snackbar', classes)}
        isShown={show}
        animationIn={animIn}
        {...props}
      >
        <div className="text">{children}</div>
        <div className="action">?</div>
      </Collapse>
    </Portal>
  )
}

Notice.defaultProps = {
  isShown: true,
  onClose: () => {},
  duration: 2000,
  isLeft: false,
  isTop: false,
}
export default Notice
