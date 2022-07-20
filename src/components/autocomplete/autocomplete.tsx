import React, { useRef, useState, FC } from 'react'
import { useClickOutside } from '@brightleaf/react-hooks'
import classnames from 'classnames'
import './autocomplete.css'
import '../../styles/animation.css'
import { AnimatedProps, BackgroundColorProps, ColorProps, FontWeightProps, HasTextProps, isSizedProps, PositionProps, ResponsiveProps, ScreenProps, SizeProps, StyleOrStateProps, TextHelpersProps } from 'types'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export interface ItemProp {
  name: string
  id: string
}
export interface AutoCompleteProps extends AnimatedProps,
BackgroundColorProps,
ColorProps,
FontWeightProps,
HasTextProps,
isSizedProps,
PositionProps,
ResponsiveProps,
ScreenProps,
SizeProps,
StyleOrStateProps,
TextHelpersProps {
  htmlId: string
  list: { id: string | number; name: string }[]
  onValueChange?: () => void
  onSelect?: (arg0: { id: string | number; name: string }) => void
  initialValue?: string
  className?: string
}


export const AutoComplete: FC<AutoCompleteProps> = ({
  htmlId,
  list,
  onValueChange = noop,
  onSelect = noop,
  initialValue,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState('')
  const [isFocused, setFocus] = useState(false)
  const mappedItems = !isFocused
    ? []
    : list
        .filter((item) => item.name.toLowerCase().indexOf(selectedValue.toLowerCase()) > -1)
        .map((item) => (
          <a
            key={`dd-${item.id}`}
            className="dropdown-item"
            onClick={(e) => {
              e.preventDefault()
              onSelect(item)
              setFocus(false)
              setSelectedValue(item.name)
              onValueChange()
            }}
          >
            <span>{item.name}</span>
          </a>
        ))

  const dropDown = useRef<HTMLDivElement>(null)
  const hideDropDown = () => {
    setFocus(false)
  }
  useClickOutside(dropDown, hideDropDown)
  const idProp = {
    id: htmlId,
  }
  if (initialValue && selectedValue === '') {
    const val = list.filter((item) => item.id == initialValue)

    if (val.length > 0) {
      onSelect(val[0])
      setSelectedValue(val[0].name)
    }
  }
  return (
    <div
      ref={dropDown}
      className={classnames('autocomplete', className, 'control', {
        'is-active': isFocused,
      })}
      onFocus={(e) => {
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
          onChange={(e) => {
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
  onValueChange: noop,
  onSelect: noop,
  list: [],
}
