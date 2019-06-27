import React, { useRef, useState } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks'
import classnames from 'classnames'
import '../css/animations.css'

export const DropDown = ({ list, onSelect }) => {
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
          <span>Dropdown button</span>
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
}
