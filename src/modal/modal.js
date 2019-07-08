import React, { useState, createContext, useContext, useCallback } from 'react'
import classnames from 'classnames'

export const useToggle = initialValue => {
  const [toggleValue, setToggleValue] = useState(initialValue)
  const toggler = useCallback(() => setToggleValue(!toggleValue))

  return [toggleValue, toggler]
}

export const ModalContext = createContext()
export const ModalCardHead = ({ title, className }) => {
  const value = useContext(ModalContext)
  return (
    <header className={classnames('modal-card-head', className)}>
      <p className="modal-card-title">{title}</p>
      <button
        className="delete"
        aria-label="close"
        onClick={e => {
          e.preventDefault()
          value.closeModal()
        }}
      ></button>
    </header>
  )
}

export const ModalCardBody = ({ children, className }) => {
  return (
    <section className={classnames('modal-card-body', className)}>
      {children}
    </section>
  )
}

export const ModalCardFoot = ({ children }) => {
  return <footer className="modal-card-foot">{children}</footer>
}

export const CardModal = ({ children, isActive, onCloseClick }) => {
  console.info('card Modal', isActive)
  return (
    <div className={classnames('modal', { 'is-active': isActive })}>
      <div className="modal-background"></div>
      <div className="modal-card">{children}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onCloseClick}
      ></button>
    </div>
  )
}

CardModal.defaultProps = {
  isActive: false,
  onCloseClick: () => {},
}
export const BaseModal = ({ children, isActive, onCloseClick }) => {
  console.log('isActive in  BaseModal', isActive)
  return (
    <div className={classnames('modal', { 'is-active': isActive })}>
      <div className="modal-background"></div>
      <div className="modal-content">{children}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onCloseClick}
      ></button>
    </div>
  )
}

BaseModal.defaultProps = {
  isActive: false,
  onCloseClick: () => {},
}

const SimpleModal = ({
  children,
  triggerClassName,
  triggerText,
  triggerFn,
  isModalShown,
}) => {
  return (
    <div>
      <BaseModal
        isActive={isModalShown}
        onCloseClick={() => {
          triggerFn(false)
        }}
      >
        {children}
      </BaseModal>
      {!isModalShown && (
        <div>
          <button
            className={classnames('button', triggerClassName)}
            onClick={e => {
              e.preventDefault()
              triggerFn(true)
            }}
          >
            {triggerText}
          </button>
        </div>
      )}
    </div>
  )
}

SimpleModal.defaultProps = {
  triggerClassName: 'is-primary',
  triggerText: 'Show',
}

export const CoreModal = ({
  children,
  triggerClassName,
  triggerText,
  ModalType,
  triggerFn,
  isActive,
  includeTrigger,
}) => {
  const [show, setShow] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        closeModal: () =>
          triggerFn !== undefined ? triggerFn(false) : setShow(false),
        isShown: isActive !== undefined ? isActive : show,
      }}
    >
      <div>
        <ModalType
          isActive={isActive !== undefined ? isActive : show}
          onCloseClick={() => {
            const showHide = triggerFn !== undefined ? triggerFn : setShow

            showHide(false)
          }}
        >
          {children}
        </ModalType>
        {includeTrigger && !isActive && (
          <div>
            <button
              className={classnames('button', triggerClassName)}
              onClick={e => {
                e.preventDefault()
                triggerFn ? triggerFn(true) : setShow(true)
              }}
            >
              {triggerText}
            </button>
          </div>
        )}
      </div>
    </ModalContext.Provider>
  )
}

CoreModal.defaultProps = {
  triggerClassName: 'is-primary',
  triggerText: 'Show',
  includeTrigger: true,
  ModalType: BaseModal,
}

export default CoreModal
export { SimpleModal }
