import React, { Component, Fragment } from 'react'
import { Router, Link, LocationProvider, Location } from '@reach/router'

import Container from '../pages/container'
import Columns from '../pages/columns'
import Notifications from '../pages/notifications'
import AutoComplete from '../pages/autocomplete'
import Card from '../pages/card'
import Media from '../pages/media'
import Intro from './intro'
import Home from './home'
const TabLink = props => {
  return (
    <Location>
      {({ location }) => {
        const active = props.to === location.pathname
        return (
          <li className={active ? 'is-active' : ''}>
            <Link
              {...props}
              getProps={prop => {
                const { isCurrent } = prop
                return {
                  className: isCurrent ? 'is-active' : '',
                }
              }}
            />
          </li>
        )
      }}
    </Location>
  )
}

export default class App extends Component {
  render() {
    return (
      <LocationProvider>
        <Fragment>
          <React.Suspense fallback={<div>Loading</div>}>
            <div className="tabs">
              <ul>
                <Home to="/">Home</Home>
                <TabLink to="/containers">Container</TabLink>
                <TabLink to="/columns">Columns</TabLink>
                <TabLink to="/notifications">Notifications</TabLink>
                <TabLink to="/autocomplete">AutoComplete</TabLink>
                <TabLink to="/card">Card</TabLink>
                <TabLink to="/media">Media</TabLink>
              </ul>
            </div>
            <Intro />
            <Router>
              <Home path="/" />
              <Container path="/containers" />
              <Columns path="/columns" />
              <Notifications path="/notifications" />
              <AutoComplete path="/autocomplete" />
              <Card path="/card" />
              <Media path="/media" />
            </Router>
          </React.Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
