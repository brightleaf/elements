import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'

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
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarItem,
  Icon,
  Tile,
  Title,
  SubTitle,
  Tag,
  Tabs,
  TabItem,
} from '../../src/'

export const LandingTemplate = () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('landing.css')
  return (
    <Hero isInfo isFullHeight>
      <HeroHead>
        <NavBar>
          <Container className="container">
            <NavBarBrand src="brightleafjs-logo.png" href="#HERO"></NavBarBrand>
            <NavBarMenu id="navbarMenu" className="navbar-menu">
              <NavBarEnd className="navbar-end">
                <NavBarItem>
                  <span>
                    <Button isWhite isAnchor isOutlined href="#">
                      <Icon fa icon="book" className="home"></Icon>
                      <span>Home</span>
                    </Button>
                  </span>
                </NavBarItem>
                <NavBarItem>
                  <span>
                    <Button isWhite isAnchor isOutlined href="#HERO">
                      <Icon fa icon="superpowers"></Icon>
                      <span>Hero</span>
                    </Button>
                  </span>
                </NavBarItem>
                <NavBarItem>
                  <span>
                    <Button isWhite isAnchor isOutlined href="#CHEATSHEET">
                      <Icon fa icon="code"></Icon>
                      <span>CheatSheet</span>
                    </Button>
                  </span>
                </NavBarItem>
                <NavBarItem>
                  <span>
                    <Button isWhite isAnchor isOutlined href="#COVER">
                      <Icon fa icon="book" className="icon"></Icon>
                      <span>Cover</span>
                    </Button>
                  </span>
                </NavBarItem>
                <NavBarItem>
                  <span>
                    <Button isWhite isAnchor isOutlined href="#ADMIN">
                      <Icon fa icon="cog" className="icon"></Icon>
                      <span>Admin</span>
                    </Button>
                  </span>
                </NavBarItem>
              </NavBarEnd>
            </NavBarMenu>
          </Container>
        </NavBar>
      </HeroHead>

      <HeroBody>
        <Container className="has-text-centered">
          <Column size="6" className="is-offset-3">
            <Title as="h1">Coming Soon</Title>
            <SubTitle as="h2">
              $this is the best software platform for running an internet
              business. We handle billions of dollars every year for
              forward-thinking businesses around the world.
            </SubTitle>
            <Box>
              <Field isGrouped>
                <Control as="p" isExpanded>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter your email"
                  />
                </Control>
                <Control as="p">
                  <Button isInfo isAnchor>
                    Notify Me
                  </Button>
                </Control>
              </Field>
            </Box>
          </Column>
        </Container>
      </HeroBody>
    </Hero>
  )
}

export default LandingTemplate
