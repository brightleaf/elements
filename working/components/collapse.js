import React, { useState } from 'react'
import classnames from 'classnames'
export const Collapse = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <div
      className={classnames('collapse', { collapsed, expanded: !collapsed })}
      onClick={e => {
        setCollapsed(!collapsed)
      }}
    >
      {children}
    </div>
  )
}
