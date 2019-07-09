import React, { Component, Fragment, lazy, Suspense } from 'react'
import {
  createHistory,
  Router,
  Link,
  LocationProvider,
  Location,
} from '@reach/router'
import createHashSource from 'hash-source'
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

const Home = lazy(() => import('./home'))
const Columns = lazy(() => import('../pages/columns'))
const Notifications = lazy(() => import('../pages/notifications'))
const AutoComplete = lazy(() => import('../pages/autocomplete'))
const Box = lazy(() => import('../pages/box'))
const ButtonsPage = lazy(() => import('../pages/buttons'))
const DropDown = lazy(() => import('../pages/dropdown'))
const Card = lazy(() => import('../pages/card'))
const Hero = lazy(() => import('../pages/hero'))
const Icons = lazy(() => import('../pages/icon'))
const Level = lazy(() => import('../pages/level'))
const Media = lazy(() => import('../pages/media'))
const NavBars = lazy(() => import('../pages/navbars'))
const Messages = lazy(() => import('../pages/messages'))
const Tags = lazy(() => import('../pages/tags'))
const Tiles = lazy(() => import('../pages/tile'))
const Panel = lazy(() => import('../pages/panel'))
const Container = lazy(() => import('../pages/container'))
const Modals = lazy(() => import('../pages/modals'))
let source = createHashSource()
let history = createHistory(source)

const NotFound = () => (
  <Section>
    <p>Documentation is not yet finished</p>
  </Section>
)

const UpLink = props => {
  return (
    <Location>
      {({ location }) => {
        return (
          <Link
            {...props}
            getProps={prop => {
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
      <LocationProvider history={history}>
        <Fragment>
          <Suspense fallback={<div>Loading</div>}>
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
                      <a href="https://github.com/brightleaf/elements/issues/new">
                        Report an issue
                      </a>
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
                    <NavBarItem>
                      <UpLink to="/images">Image</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/notifications">Notifications</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/progress">Progress Bars</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/tables">Tables</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/tags">Tag</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/titles">Title</UpLink>
                    </NavBarItem>
                    <NavBarDivider />
                    <NavBarItem>
                      <a href="https://github.com/brightleaf/elements/issues/new">
                        Report an issue
                      </a>
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
                    <NavBarItem>
                      <UpLink to="/autocomplete">Menu</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/messages">Messages</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/modals">Modal</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/navbars">NavBar</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/#">Pagination</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/panels">Panel</UpLink>
                    </NavBarItem>
                    <NavBarItem>
                      <UpLink to="/tabs">Tabs</UpLink>
                    </NavBarItem>
                    <NavBarDivider />
                    <NavBarItem>
                      <a href="https://github.com/brightleaf/elements/issues/new">
                        Report an issue
                      </a>
                    </NavBarItem>
                  </NavBarDropDown>
                </NavBarStart>

                <NavBarEnd>
                  <NavBarItem>
                    <div>
                      <Buttons>
                        <Button isWarning isAnchor href="/template.html">
                          <strong>
                            <BaseIcon fas icon="eye" /> Examples
                          </strong>
                        </Button>
                        <Button
                          isLight
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

            <Router>
              <NotFound default />
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
              <Panel path="/panels" />
              <Modals path="/modals" />
            </Router>
          </Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
