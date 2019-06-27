import React, { useRef, useState } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks'
import classnames from 'classnames'
import '../css/animations.css'

export const DropDown = ({ list, onSelect, initialValue }) => {
  const [selectedValue, setSelectedValue] = useState('')
  const [menuIsShown, setMenuIsShown] = useState(false)
  const mappedItems = list.map((item, index) => (
    <a
      key={`dd-${item.id}`}
      className="dropdown-item"
      onClick={e => {
        e.preventDefault()
        onSelect(item)
        setMenuIsShown(false)
        setSelectedValue(item.name)
      }}
    >
      <span>{item.name}</span>
    </a>
  ))

  const dropDown = useRef()
  const hideDropDown = () => {
    setMenuIsShown(false)
  }
  useClickOutside(dropDown, hideDropDown, menuIsShown)

  if (initialValue && selectedValue === '') {
    const val = list.filter(item => item.id == initialValue)

    if (val.length > 0) {
      onSelect(val[0])
      setSelectedValue(val[0].name)
    }
  }
  return (
    <div
      ref={dropDown}
      className={classnames('dropdown', {
        'is-active': menuIsShown,
      })}
      onFocus={e => {
        setMenuIsShown(true)
      }}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={e => {
            e.preventDefault()
            setMenuIsShown(!menuIsShown)
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
          'is-hidden': !menuIsShown,
          fadeIn: menuIsShown,
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
