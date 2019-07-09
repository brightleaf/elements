import React, { useRef, useState } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks/lib/use-click-outside'
import classnames from 'classnames'
import './autocomplete.css'
import '../css/animations.css'

export const AutoComplete = ({
  htmlId,
  list,
  onValueChange,
  onSelect,
  initialValue,
}) => {
  const [selectedValue, setSelectedValue] = useState('')
  const [isFocused, setFocus] = useState(false)
  const mappedItems = !isFocused
    ? []
    : list
        .filter(
          item =>
            item.name.toLowerCase().indexOf(selectedValue.toLowerCase()) > -1
        )
        .map((item, index) => (
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
  const idProp = {
    id: htmlId,
  }
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
      className={classnames('autocomplete', 'control', {
        'is-active': isFocused,
      })}
      onFocus={e => {
        setFocus(true)
      }}
    >
      <div className="control is-clearfix has-icons-right">
        <input
          {...idProp}
          type="text"
          autoComplete="off"
          placeholder="Placeholder Text"
          className="input"
          onChange={e => {
            setSelectedValue(e.target.value)
          }}
          value={selectedValue}
          data-lpignore="true"
        />
        <span className="icon is-small is-right">
          <i className="fa fa-chevron-down"></i>
        </span>
      </div>{' '}
      <div
        className={classnames('dropdown-menu', 'animated', {
          'is-hidden': !isFocused,
          fadeIn: isFocused,
        })}
      >
        <div className="dropdown-content">{mappedItems}</div>
      </div>
    </div>
  )
}

AutoComplete.defaultProps = {
  onValueChange: () => {},
  onSelect: () => {},
  list: [],
}
