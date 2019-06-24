import React, { Component, Fragment } from 'react'
import { Router, Link, LocationProvider, Location } from '@reach/router'

import Container from '../pages/container'
import Columns from '../pages/columns'
import Intro from './intro'
import Home from './home'

const TabLink = props => {
  console.log('TabLink', props)
  return (
    <Location>
      {({ location }) => {
        const active = props.to === location.pathname
        return (
          <li className={active ? 'is-active' : ''}>
            <Link
              {...props}
              getProps={prop => {
                console.info('link prop', prop)
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
              </ul>
            </div>
            <Intro />
            <Router>
              <Home path="/" />
              <Container path="/containers" />
              <Columns path="/columns" />
            </Router>
          </React.Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
