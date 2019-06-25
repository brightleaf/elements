import React, { useRef, useState } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks'
import classnames from 'classnames'
import './autocomplete.css'
export const AutoComplete = ({ list, onValueChange, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState('')
  const [isFocused, setFocus] = useState(false)
  const mappedItems = !isFocused
    ? []
    : list.map((item, index) => (
        <a
          key={`dd-${item.id}`}
          className="dropdown-item"
          onClick={e => {
            e.preventDefault()
            onSelect(item)
            setFocus(false)
            setSelectedValue(item.name)
          }}
        >
          <span>{item.name}</span>
        </a>
      ))
  const dropDown = useRef()
  const hideDropDown = () => {
    setFocus(false)
  }
  useClickOutside(dropDown, hideDropDown, isFocused)
  return (
    <div
      ref={dropDown}
      className={classnames('autocomplete', 'control', {
        'is-active': isFocused,
      })}
      onFocus={e => {
        setFocus(true)
      }}
      onBlur={e => {
        // setFocus(false)
      }}
    >
      <div className="control is-clearfix has-icons-right">
        <input
          type="text"
          autoComplete="off"
          placeholder="Business Name"
          className="input"
          onChange={onValueChange}
          value={selectedValue}
        />
        <span className="icon is-small is-right">
          <i className="fa fa-chevron-down"></i>
        </span>
      </div>{' '}
      <div className={classnames('dropdown-menu', { 'is-hidden': !isFocused })}>
        <div className="dropdown-content">{mappedItems}</div>
      </div>
    </div>
  )
}
