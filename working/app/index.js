import React, { Component, Fragment } from 'react'
import { Router, Link, LocationProvider, Location } from '@reach/router'
import {
  BaseIcon,
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
import Messages from '../pages/messages'
import Tags from '../pages/tags'
import Tiles from '../pages/tile'
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
        return (
          <Link
            {...props}
            getProps={prop => {
              const { isCurrent } = prop
              console.log('uplkink', props.className)
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
                    <UpLink to="/">Home</UpLink>
                  </NavBarItem>
                  <NavBarDropDown title="Layout">
                    <NavBarItem>
                      <UpLink to="/containers">Container</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/level">Level</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/media">Media Object</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/hero">Hero</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/section">Section</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/footer">Footer</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/tiles">Tiles</UpLink>
                    </NavBarItem>
                    <NavBarDivider />
                    <NavBarItem>
                      <a>Report an issue</a>
                    </NavBarItem>
                  </NavBarDropDown>

                  <NavBarDropDown title="Elements">
                    <NavBarItem>
                      <UpLink to="/box">Box</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/buttons">Button</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/content">Content</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/delete">Delete</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/icons">Icon</UpLink>
                    </NavBarItem>
                    <NavBarItem
                      className="tooltip is-tooltip-right"
                      data-tooltip="The Image is not yet implemented"
                    >
                      <UpLink to="/images">Image (NI)</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/notifications">Notifications</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/progress">Progress Bars</UpLink>
                    </NavBarItem>
                    <NavBarItem
                      className="tooltip is-tooltip-right"
                      data-tooltip="The Table is not yet implemented"
                    >
                      <UpLink to="/tables">Tables (NI)</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/tags">Tag</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/titles">title</UpLink>
                    </NavBarItem>
                  </NavBarDropDown>

                  <NavBarDropDown title="Components">
                    <NavBarItem>
                      <UpLink to="/breadcrumb">Breadcrumb</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/card">Card</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/dropdown">DropDown</UpLink>
                    </NavBarItem>
                    <NavBarItem
                      className="tooltip is-tooltip-right"
                      data-tooltip="The Menu is not yet implemented"
                    >
                      <UpLink to="/autocomplete">
                        Menu <i>(NI)</i>
                      </UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/messages">Messages</UpLink>
                    </NavBarItem>
                    <NavBarItem
                      className="tooltip is-tooltip-right"
                      data-tooltip="The Modal is not yet implemented"
                    >
                      <UpLink to="/modals">
                        Modal <i>(NI)</i>
                      </UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/navbars">NavBar</UpLink>
                    </NavBarItem>
                    <NavBarItem
                      className="tooltip is-tooltip-right"
                      data-tooltip="The Pagination is not yet implemented"
                    >
                      <UpLink to="/#">
                        Pagination <i>(NI)</i>
                      </UpLink>
                    </NavBarItem>
                    <NavBarItem
                      className="tooltip is-tooltip-right"
                      data-tooltip="The Panel is not yet implemented"
                    >
                      <UpLink to="/panels">
                        Panel <i>(NI)</i>
                      </UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/tabs">Tabs</UpLink>
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
                        <Button
                          isWarning
                          isAnchor
                          href="https://github.com/brightleaf/elements"
                        >
                          <strong>
                            <BaseIcon fab icon="github" /> GitHub
                          </strong>
                        </Button>
                        <Button
                          isLight
                          isAnchor
                          href="https://github.com/brightleaf/elements/releases"
                        >
                          Download
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
                  <TabLink to="/">Home</TabLink>
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
                  <TabLink to="/tags">Tags</TabLink>
                </ul>
              </div>

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
                <Tags path="/tags" />
                <Messages path="/messages" />
                <Tiles path="/tiles" />
              </Router>
            </Section>
          </React.Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
