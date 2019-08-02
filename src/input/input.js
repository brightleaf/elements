import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useFormElement from 'react-form-elements/lib/utils/use-form-element'
import htmlAttributes from '../element-attributes'
/**
 * TextBox Component.
 *
 */
const TextInput = forwardRef(
  (
    {
      name,
      initialValue,
      label,
      type,
      className,
      controlClassName,
      labelClassName,
      inputClassName,
      children,
      ...otherProps
    },
    ref
  ) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    const labelStyleProp =
      labelClassName === ''
        ? {}
        : {
            className: labelClassName,
          }
    const inputStyleProp =
      inputClassName === ''
        ? {}
        : {
            className: inputClassName,
          }
    const hasLabel = label.length > 0
    const clean = htmlAttributes['*']
      .concat(htmlAttributes['input'] || [])
      .reduce((objs, current) => {
        if (otherProps[current]) {
          objs[current] = otherProps[current]
        }
        return objs
      }, {})

    return (
      <div className={classNames('field', className)}>
        {hasLabel && (
          <label htmlFor={id} {...labelStyleProp}>
            {label || ''}
          </label>
        )}
        <div className={classNames('control', controlClassName)}>
          <input
            type={type}
            id={id}
            ref={inputRef}
            name={name}
            onChange={handleChange}
            value={value}
            {...inputStyleProp}
            {...clean}
          />
          {children}
        </div>
      </div>
    )
  }
)

TextInput.displayName = 'BrightleafElements(TextInput)'

export default TextInput

TextInput.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  controlClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

TextInput.defaultProps = {
  name: 'TextInput',
  initialValue: '',
  type: 'text',
  label: 'label',
  className: '',
  inputClassName: '',
  labelClassName: '',
}
