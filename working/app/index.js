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
  NavigationView,
  Icon,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
} from '../../src'

const Home = lazy(() => import('./home'))
const Columns = lazy(() => import('../pages/columns'))
const Notifications = lazy(() => import('../pages/notifications'))
const AutoComplete = lazy(() => import('../pages/autocomplete'))
const Box = lazy(() => import('../pages/box'))
const Breadcrumbs = lazy(() => import('../pages/breadcrumb'))
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
const Footers = lazy(() => import('../pages/footer'))
const Sections = lazy(() => import('../pages/section'))
const Contents = lazy(() => import('../pages/content'))
const Deletes = lazy(() => import('../pages/delete'))
const Images = lazy(() => import('../pages/image'))
const Menus = lazy(() => import('../pages/menu'))
const Pager = lazy(() => import('../pages/pagination'))
const Tab = lazy(() => import('../pages/tabs'))
const Titles = lazy(() => import('../pages/titles'))
const Work = lazy(() => import('../samples/work'))
const Layouts = lazy(() => import('../pages/layouts'))
const Elements = lazy(() => import('../pages/elements'))
const Components = lazy(() => import('../pages/components'))
const Loader = lazy(() => import('../pages/loading'))
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
        <NavigationView>
          <Menu>
            <MenuLabel>General</MenuLabel>
            <MenuList className="menu-list">
              <MenuListItem>
                <UpLink to="/">
                  <Icon fas icon="home" /> Home
                </UpLink>
              </MenuListItem>
            </MenuList>
            <MenuLabel>Documentation</MenuLabel>
            <MenuList className="menu-list">
              <MenuListItem>
                <UpLink to="/layouts">
                  <Icon fas icon="warehouse" /> Layout
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/forms">
                  <Icon fab icon="wpforms" /> Forms
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/elements">
                  <Icon fas icon="cube" /> Elements
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/components">
                  <Icon fas icon="cubes" /> Components
                </UpLink>
              </MenuListItem>
            </MenuList>
            <MenuLabel>Templates</MenuLabel>

            <MenuList>
              <MenuListItem>
                <a href="templates.html#ADMIN">
                  <Icon fas icon="cogs" />
                  Admin
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#BLOG">
                  <Icon fas icon="blog" />
                  Blog
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#HERO">
                  <Icon fab icon="superpowers" /> Hero
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#COVER">
                  <Icon fas icon="book-open" /> Cover
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#CHEATSHEET">
                  <Icon fas icon="code" /> CheatSheet
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#FORUM">
                  <Icon far icon="comments" /> Forum
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#INBOX">
                  <Icon fas icon="inbox" /> Inbox
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#INBOX">
                  <Icon fas icon="plane-arrival" /> Landing
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="templates.html#IMAGE_TIMELINE">
                  <Icon far icon="images" />
                  Insta
                </a>
              </MenuListItem>
            </MenuList>
            <MenuLabel>Transactions</MenuLabel>
            <MenuList>
              <MenuListItem>
                <a>
                  <Icon fas icon="credit-card" /> Payments
                </a>
              </MenuListItem>
              <MenuListItem>
                <a>
                  <Icon fas icon="align-center" /> Transfers
                </a>
              </MenuListItem>
              <MenuListItem>
                <a>
                  <Icon fas icon="briefcase" /> Balance
                </a>
              </MenuListItem>
            </MenuList>
          </Menu>
        </NavigationView>

        <Fragment>
          <NavBar isFixedTop className="brightleaf-navbar">
            <NavBarBrand
              src="brightleafjs-logo.png"
              href="https://brightleaf.dev"
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
                    <UpLink to="/autocomplete">AutoComplete</UpLink>
                  </NavBarItem>
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
                    <UpLink to="/menu">Menu</UpLink>
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
                    <UpLink to="/pagination">Pagination</UpLink>
                  </NavBarItem>
                  <NavBarItem>
                    <UpLink to="/panels">Panel</UpLink>
                  </NavBarItem>
                  <NavBarItem>
                    <UpLink to="/tabs">Tabs</UpLink>
                  </NavBarItem>
                  <NavBarDivider />
                  <NavBarItem>
                    <UpLink to="/nav-view">Nav View</UpLink>
                  </NavBarItem>
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
                      <Button isWarning isAnchor href="templates.html">
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
          <Suspense fallback={<div className="loader-spinner"> </div>}>
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
              <Footers path="/footer" />
              <Sections path="/section" />
              <Contents path="/content" />
              <Deletes path="/delete" />
              <Images path="/images" />
              <Breadcrumbs path="/breadcrumb" />
              <Menus path="/menu" />
              <Pager path="/pagination" />
              <Tab path="/tabs" />
              <Titles path="/titles" />
              <Work path="/nav-view" />
              <Layouts path="/layouts" />
              <Elements path="/elements" />
              <Components path="/components" />
              <Loader path="/loader" />
            </Router>
          </Suspense>
        </Fragment>
      </LocationProvider>
    )
  }
}
