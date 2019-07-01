import React, { Component, Fragment } from 'react'
import { Router, Link, LocationProvider, Location } from '@reach/router'
import {
  Button,
  Buttons,
  NavBar,
  NavBarBrand,
  NavBarDivider,
  NavBarDropDown,
  NavBarEnd,
  NavBarItem,
  NavBarStart,
  NavBarMenu,
  Section,
} from '../../src'
import Container from '../pages/container'
import Columns from '../pages/columns'
import Notifications from '../pages/notifications'
import AutoComplete from '../pages/autocomplete'
import Box from '../pages/box'
import ButtonsPage from '../pages/buttons'
import DropDown from '../pages/dropdown'
import Card from '../pages/card'
import Hero from '../pages/hero'
import Icons from '../pages/icon'
import Level from '../pages/level'
import Media from '../pages/media'
import NavBars from '../pages/navbars'
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

const UpLink = props => {
  return (
    <Location>
      {({ location }) => {
        const active = props.to === location.pathname
        return (
          <Link
            {...props}
            getProps={prop => {
              console.info('link props', prop)
              const { isCurrent } = prop
              return {
                className: isCurrent
                  ? props.className + ' is-active'
                  : props.className,
              }
            }}
          />
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
            <NavBar isFixedTop>
              <NavBarBrand
                src="brightleafjs-logo.png"
                href="ttps://brightleaf.dev"
                target="navbarBasicExample"
                width="112"
                height="28"
              />

              <NavBarMenu id="navbarBasicExample">
                <NavBarStart>
                  <NavBarItem>
                    <a>Home</a>
                  </NavBarItem>
                  <NavBarItem>
                    <a>Documentation</a>
                  </NavBarItem>
                  <NavBarDropDown title="Examples">
                    <NavBarItem>
                      <UpLink to="/containers">Container</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/columns">Columns</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/notifications">Notifications</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/autocomplete">AutoComplete</UpLink>
                    </NavBarItem>
                    <NavBarDivider />
                    <NavBarItem>
                      <a>Report an issue</a>
                    </NavBarItem>
                  </NavBarDropDown>
                </NavBarStart>

                <NavBarEnd>
                  <NavBarItem>
                    <div>
                      <Buttons>
                        <Button isPrimary isAnchor>
                          <strong>Sign up</strong>
                        </Button>
                        <Button isLight isAnchor>
                          Log in
                        </Button>
                      </Buttons>
                    </div>
                  </NavBarItem>
                </NavBarEnd>
              </NavBarMenu>
            </NavBar>
            <Section>
              <div className="tabs">
                <ul>
                  <Home to="/">Home</Home>
                  <TabLink to="/containers">Container</TabLink>
                  <TabLink to="/columns">Columns</TabLink>
                  <TabLink to="/notifications">Notifications</TabLink>
                  <TabLink to="/autocomplete">AutoComplete</TabLink>
                  <TabLink to="/card">Card</TabLink>
                  <TabLink to="/media">Media</TabLink>
                  <TabLink to="/dropdown">DropDown</TabLink>
                  <TabLink to="/hero">Hero</TabLink>
                  <TabLink to="/box">Box</TabLink>
                  <TabLink to="/level">Level</TabLink>
                  <TabLink to="/buttons">Buttons</TabLink>
                  <TabLink to="/icons">Icons</TabLink>
                  <TabLink to="/navbars">NavBar</TabLink>
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
                <DropDown path="/dropdown" />
                <Hero path="/hero" />
                <Box path="/box" />
                <Level path="/level" />
                <ButtonsPage path="/buttons" />
                <Icons path="/icons" />
                <NavBars path="/navbars" />
              </Router>
            </Section>
          </React.Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
