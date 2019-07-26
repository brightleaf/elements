import React from 'react'
import classnames from 'classnames'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'
import {
  BaseIcon,
  Box,
  Button,
  Card,
  CardImageContainer,
  CardBody,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Footer,
  Hero,
  HeroHead,
  HeroBody,
  HeroFooter,
  Image,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  NavBar,
  NavBarStart,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarBurger,
  NavBarDropDown,
  NavBarItem,
  NavBarDivider,
  Icon,
  Tile,
  Title,
  SubTitle,
  Tag,
  Tabs,
  TabItem,
  MediaObject,
  MediaContent,
  MediaLeft,
  MediaRight,
} from '../../src/'

export const ForumTemplate = () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('forum.css')
  useScript('font-awesome.js')
  return (
    <>
      <NavBar className="navbar is-white topNav">
        <Container className="container">
          <NavBarBrand src="brightleafjs-logo.png" width="112" height="28" />
          <NavBarMenu id="topNav" className="navbar-menu">
            <NavBarStart>
              <NavBarItem>
                <a href="#COVER">Home</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#LANDING">Landing</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#BLOG">Blog</a>
              </NavBarItem>
              <NavBarItem>
                <a href="IMAGE_TIMELINE">Album</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#CHEATSHEET">Cheatsheet</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#ADMIN">Admin</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#KANBAN">Kanban</a>
              </NavBarItem>
            </NavBarStart>
            <NavBarEnd>
              <NavBarItem>
                <div>
                  <Field isGrouped>
                    <Control>
                      <Button isSmall isAnchor>
                        <Icon icon="user-plus" fas />
                        <span>Register</span>
                      </Button>
                    </Control>
                    <Control>
                      <Button className="button is-small is-info is-outlined">
                        <Icon icon="user" fas />
                        <span>Login</span>
                      </Button>
                    </Control>
                  </Field>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </Container>
      </NavBar>
      <NavBar isWhite>
        <Container className="container">
          <NavBarMenu className="navbar-menu">
            <NavBarStart className="navbar-start">
              <NavBarItem isActive>
                <a href="#">Popular</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#">Recent</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#">Rising</a>
              </NavBarItem>
            </NavBarStart>
            <NavBarEnd className="navbar-end">
              <NavBarItem>
                <div>
                  <input
                    className="input"
                    type="search"
                    placeholder="Search forum..."
                  />
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </Container>
      </NavBar>
      <Container>
        <Columns>
          <Column is="3">
            <Button
              isAnchor
              isPrimary
              isLarge
              className="is-block is-alt"
              href="#"
            >
              New Post
            </Button>
            <Menu className="menu">
              <MenuLabel>Tags</MenuLabel>
              <MenuList>
                <MenuListItem>
                  <Tag isPrimary isMedium>
                    Dashboard
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag className="is-link" isMedium>
                    Customers
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isLight isDanger isMedium>
                    Authentication
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isDark isMedium>
                    Payments
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isSuccess isMedium>
                    Transfers
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isWarning isMedium>
                    Balance
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isMedium>Question</Tag>
                </MenuListItem>
              </MenuList>
            </Menu>
          </Column>
          <Column is="9">
            <Box className="content">
              <article className="post">
                <h4>Bulma: How do you center a button in a box?</h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image
                      as="p"
                      is32
                      src="http://bulma.io/images/placeholders/128x128.png"
                    />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                        <span className="tag">Question</span>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <i className="fa fa-comments"></i> 1
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
              <article className="post">
                <h4>How can I make a bulma button go full width?</h4>
                <div className="media">
                  <div className="media-left">
                    <p className="image is-32x32">
                      <img src="http://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <a href="#">@red</a> replied 40 minutes ago &nbsp;
                        <span className="tag">Question</span>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <span className="has-text-grey-light">
                      <i className="fa fa-comments"></i> 0
                    </span>
                  </div>
                </div>
              </article>
              <article className="post">
                <h4>
                  TypeError: Data must be a string or a buffer when trying touse
                  vue-bulma-tabs
                </h4>
                <div className="media">
                  <div className="media-left">
                    <p className="image is-32x32">
                      <img src="http://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
                        <span className="tag">Question</span>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <span className="has-text-grey-light">
                      <i className="fa fa-comments"></i> 13
                    </span>
                  </div>
                </div>
              </article>
              <article className="post">
                <h4>How to vertically center elements in Bulma?</h4>
                <div className="media">
                  <div className="media-left">
                    <p className="image is-32x32">
                      <img src="http://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <a href="#">@brown</a> replied 3 hours ago &nbsp;
                        <span className="tag">Question</span>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <span className="has-text-grey-light">
                      <i className="fa fa-comments"></i> 2
                    </span>
                  </div>
                </div>
              </article>
              <article className="post">
                <h4>
                  I'm trying to use hamburger menu on bulma css, but it doesn't
                  work. What is wrong?
                </h4>
                <div className="media">
                  <div className="media-left">
                    <p className="image is-32x32">
                      <img src="http://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
                        <span className="tag">Question</span>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <span className="has-text-grey-light">
                      <i className="fa fa-comments"></i> 2
                    </span>
                  </div>
                </div>
              </article>
              <article className="post">
                <h4>How to make tiles wrap with Bulma CSS?</h4>
                <div className="media">
                  <div className="media-left">
                    <p className="image is-32x32">
                      <img src="http://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <a href="#">@rapper</a> replied 3 hours ago &nbsp;
                        <span className="tag">Question</span>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <span className="has-text-grey-light">
                      <i className="fa fa-comments"></i> 2
                    </span>
                  </div>
                </div>
              </article>
            </Box>
          </Column>
        </Columns>
      </Container>
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns is-mobile is-centered">
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags has-addons">
                    <a
                      className="tag is-link"
                      href="https://github.com/dansup/bulma-templates"
                    >
                      Bulma Templates
                    </a>
                    <span className="tag is-light">Daniel Supernault</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags has-addons">
                    <a className="tag is-link">The source code is licensed</a>
                    <span className="tag is-light">
                      MIT &nbsp;<i className="fa fa-github"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ForumTemplate
