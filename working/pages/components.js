import React from 'react'
import { Link } from '@reach/router'
import {
  BaseIcon,
  Box,
  Button,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Footer,
  Hero,
  HeroBody,
  MediaObject,
  MediaContent,
  MediaLeft,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  Icon,
  Title,
  SubTitle,
  Section,
  Tag,
  Tags,
  Message,
  MessageBody,
} from '../../src/'
const Layouts = () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Components</Title>
          <SubTitle as="p" is="4">
            Advanced multi-part components with lots of possibilities
          </SubTitle>
        </HeroBody>
      </Hero>
      <Columns isMultiline>
        <Column isOneThird>
          <Link to="/breadcrumb" className="comp-link">
            <MediaObject className="notification  has-background-white">
              <MediaLeft>
                <Icon fas icon="ellipsis-h" className="fa-lg" hasTextWarning />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Breadcrumb
                  </Title>
                  <SubTitle as="p" is="5">
                    A simple <strong>breadcrumb</strong> component to improve
                    your navigation experience
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/card" className="comp-link">
            <MediaObject className="notification  has-background-white">
              <MediaLeft>
                <Icon fas icon="id-card" className="fa-lg" hasTextInfo />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Card
                  </Title>
                  <SubTitle as="p" is="5">
                    An all-around flexible and composable component
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/dropdown" className="comp-link">
            <MediaObject className="notification has-background-white">
              <MediaLeft className="media-left">
                <Icon fas icon="angle-down" className="fa-lg" hasTextDanger />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    DropDown
                  </Title>
                  <SubTitle as="p" is="5">
                    An interactive <strong>dropdown menu</strong> for
                    discoverable content
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/menu" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="bars" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Menu
                  </Title>
                  <SubTitle as="p" is="5">
                    A simple <strong>menu</strong>, for any type of vertical
                    navigation
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/messages" className="comp-link">
            <MediaObject className="notification has-background-white">
              <MediaLeft>
                <Icon
                  far
                  icon="window-maximize"
                  className="fa-lg"
                  hasTextPrimary
                />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Message
                  </Title>
                  <SubTitle as="p" is="5">
                    Colored <strong>message</strong> blocks, to emphasize part
                    of your page
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column>
          <Link to="/modals" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="clone" className="fa-lg" hasTextDanger />
              </MediaLeft>
              <MediaContent className="media-content">
                <Content className="content">
                  <Title is="4" as="h1">
                    Modal
                  </Title>
                  <SubTitle as="p" is="5">
                    A classic <strong>modal</strong> overlay, in which you can
                    include <em>any</em> content you want
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/navbars" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="minus" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    NavBar
                  </Title>
                  <SubTitle as="p" is="5">
                    A responsive horizontal <strong>navbar</strong> that can
                    support images, links, buttons, and dropdowns
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/pagination" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon
                  far
                  icon="caret-square-right "
                  className="fa-lg"
                  hasTextGrey
                />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Pagination
                  </Title>
                  <SubTitle as="p" is="5">
                    A responsive, usable, and flexible{' '}
                    <strong>pagination</strong>
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/panels" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon far icon="list-alt" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Panel
                  </Title>
                  <SubTitle as="p" is="5">
                    A composable <strong>panel</strong>, for compact controls
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/tabs" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon far icon="folder" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Tabs
                  </Title>
                  <SubTitle as="p" is="5">
                    Simple responsive horizontal navigation{' '}
                    <strong>tabs</strong>, with different styles
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
      </Columns>
    </Section>
  )
}

export default Layouts
