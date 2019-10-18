import React from 'react'
import { Location, Link } from '@reach/router'
import { Tabs, TabItem, TabList } from '../../src'

const TabLink = props => {
  return (
    <Location>
      {({ location }) => {
        const active = props.to === location.pathname
        return (
          <TabItem className={active ? 'is-active' : ''}>
            <Link
              {...props}
              getProps={prop => {
                const { isCurrent } = prop
                return {
                  className: isCurrent ? 'is-active' : '',
                }
              }}
            />
          </TabItem>
        )
      }}
    </Location>
  )
}
export const LayoutTabs = () => {
  return (
    <Tabs>
      <TabList>
        <TabLink to="/containers">Container</TabLink>
        <TabLink to="/level">Level</TabLink>
        <TabLink to="/media">Media Object</TabLink>
        <TabLink to="/hero">Hero</TabLink>
        <TabLink to="/section">Section</TabLink>
        <TabLink to="/footer">Footer</TabLink>
        <TabLink to="/tiles">Tiles</TabLink>
      </TabList>
    </Tabs>
  )
}

export const ElementsTabs = () => {
  return (
    <Tabs>
      <TabList>
        <TabLink to="/box">Box</TabLink>
        <TabLink to="/buttons">Button</TabLink>
        <TabLink to="/collapse">Collapse</TabLink>
        <TabLink to="/content">Content</TabLink>
        <TabLink to="/delete">Delete</TabLink>
        <TabLink to="/icons">Icon</TabLink>
        <TabLink to="/images">Image</TabLink>
        <TabLink to="/media">MediaObject</TabLink>
        <TabLink to="/notifications">Notifications</TabLink>
        <TabLink to="/progress">Progress Bars</TabLink>
        <TabLink to="/tables">Tables</TabLink>
        <TabLink to="/tags">Tag</TabLink>
        <TabLink to="/titles">Title</TabLink>
      </TabList>
    </Tabs>
  )
}

export const ComponentsTabs = () => {
  return (
    <Tabs>
      <TabList>
        <TabLink to="/autocomplete">AutoComplete</TabLink>
        <TabLink to="/breadcrumb">Breadcrumb</TabLink>
        <TabLink to="/card">Card</TabLink>
        <TabLink to="/confirm">ConfirmButton</TabLink>
        <TabLink to="/dropdown">DropDown</TabLink>
        <TabLink to="/menu">Menu</TabLink>
        <TabLink to="/messages">Messages</TabLink>
        <TabLink to="/modals">Modal</TabLink>
        <TabLink to="/navbars">NavBar</TabLink>
        <TabLink to="/notice">Notice</TabLink>
        <TabLink to="/pagination">Pagination</TabLink>
        <TabLink to="/panels">Panel</TabLink>
        <TabLink to="/tabs">Tabs</TabLink>
      </TabList>
    </Tabs>
  )
}
