import React, { useRef, useState, createContext, useContext } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks/lib/use-click-outside'
import classnames from 'classnames'
import '../css/animations.css'

export const DropDown = ({ list, onSelect, label }) => {
  const [dropDownIsShown, setDropDownIsShown] = useState(false)
  const mappedItems = list.map((item, index) => {
    if (!item) {
      return <hr className="dropdown-divider" key={`dd-divider-${index}`} />
    }

    return (
      <a
        key={`dd-${item.id}-${index}`}
        className="dropdown-item"
        onClick={e => {
          e.preventDefault()
          onSelect(item)
          setDropDownIsShown(false)
        }}
      >
        <span>{item.name}</span>
      </a>
    )
  })

  const dropDown = useRef()
  const hideDropDown = () => {
    setDropDownIsShown(false)
  }
  useClickOutside(dropDown, hideDropDown, dropDownIsShown)

  return (
    <div
      ref={dropDown}
      className={classnames('dropdown', {
        'is-active': dropDownIsShown,
      })}
      onFocus={e => {
        setDropDownIsShown(true)
      }}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={e => {
            e.preventDefault()
            setDropDownIsShown(!dropDownIsShown)
          }}
        >
          <span>{label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div
        className={classnames('dropdown-menu', 'animated', {
          'is-hidden': !dropDownIsShown,
          fadeIn: dropDownIsShown,
        })}
      >
        <div className="dropdown-content">{mappedItems}</div>
      </div>
    </div>
  )
}

DropDown.defaultProps = {
  onValueChange: () => {},
  onSelect: () => {},
  list: [],
  label: 'Dropdown button',
}
const DropDownContext = createContext()
export const DropDownItem = ({ className, onClick, children }) => {
  const { setDropDown } = useContext(DropDownContext)
  return (
    <a
      className={classnames('dropdown-item', className)}
      onClick={e => {
        setDropDown(false)
        onClick(e)
      }}
    >
      <span>{children}</span>
    </a>
  )
}

DropDownItem.defaultProps = {
  onClick: () => {},
}

export const DropDownDivider = () => <hr className="dropdown-divider" />
export const DropDownMenu = ({ children, label }) => {
  const [dropDownIsShown, setDropDownIsShown] = useState(false)

  const dropDown = useRef()
  const hideDropDown = () => {
    setDropDownIsShown(false)
  }
  useClickOutside(dropDown, hideDropDown, dropDownIsShown)

  return (
    <DropDownContext.Provider value={{ setDropDown: setDropDownIsShown }}>
      <div
        ref={dropDown}
        className={classnames('dropdown', {
          'is-active': dropDownIsShown,
        })}
        onFocus={e => {
          setDropDownIsShown(true)
        }}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={e => {
              e.preventDefault()
              setDropDownIsShown(!dropDownIsShown)
            }}
          >
            <span>{label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div
          className={classnames('dropdown-menu', 'animated', {
            'is-hidden': !dropDownIsShown,
            fadeIn: dropDownIsShown,
          })}
        >
          <div className="dropdown-content">{children}</div>
        </div>
      </div>
    </DropDownContext.Provider>
  )
}

DropDownMenu.defaultProps = {
  label: 'Dropdown button',
}
