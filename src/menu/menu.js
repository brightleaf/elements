import React from 'react'
import classnames from 'classnames'
export const MenuLabel = ({ children, className }) => {
  return <p className={classnames('menu-label', className)}>{children}</p>
}
export const MenuList = ({ children, className }) => {
  return <ul className={classnames('menu-list', className)}>{children}</ul>
}
export const MenuListItem = ({ children, className }) => {
  return <li className={classnames(className)}>{children}</li>
}
export const Menu = ({ children, className }) => {
  return <aside className={classnames('menu', className)}>{children}</aside>
}
