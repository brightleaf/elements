import React from 'react'
import { Link } from '@reach/router'
import {
  Breadcrumb,
  BreadcrumbItem,
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
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/layouts">Layout</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero>
        <HeroBody>
          <Title>Layout</Title>
          <SubTitle as="p" is="4">
            Design the <strong>structure</strong> of your webpage with these
            elements
          </SubTitle>
        </HeroBody>
      </Hero>
      <hr />
      <Columns isMultiline>
        <Column isOneThird>
          <Link to="/containers" className="comp-link">
            <MediaObject className="notification  has-background-white">
              <MediaLeft>
                <Icon fas icon="box-open" className="fa-lg" hasTextWarning />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Container
                  </Title>
                  <SubTitle as="p" is="5">
                    A simple container to center your content horizontally
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/level" className="comp-link">
            <MediaObject className="notification  has-background-white">
              <MediaLeft>
                <Icon fab icon="wpforms" className="fa-lg" hasTextInfo />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Level
                  </Title>
                  <SubTitle as="p" is="5">
                    A multi-purpose <strong>horizontal level</strong>, which can
                    contain almost any other element
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/media" className="comp-link">
            <MediaObject className="notification has-background-white">
              <MediaLeft className="media-left">
                <Icon fas icon="photo-video" className="fa-lg" hasTextDanger />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Media Object
                  </Title>
                  <SubTitle as="p" is="5">
                    The famous <strong>media object</strong> prevalent in social
                    media interfaces, but useful in any context
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/hero" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fab icon="superpowers" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Hero
                  </Title>
                  <SubTitle as="p" is="5">
                    An imposing <strong>hero banner</strong> to showcase
                    something
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/section" className="comp-link">
            <MediaObject className="notification has-background-white">
              <MediaLeft>
                <Icon fas icon="stream" className="fa-lg" hasTextPrimary />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Section
                  </Title>
                  <SubTitle as="p" is="5">
                    A simple container to divide your page into{' '}
                    <strong>sections</strong>, like the one you{`'`}re currently
                    reading
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column>
          <Link to="/footer" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon
                  fas
                  icon="window-minimize"
                  className="fa-lg"
                  hasTextDanger
                />
              </MediaLeft>
              <MediaContent className="media-content">
                <Content className="content">
                  <Title is="4" as="h1">
                    Footer
                  </Title>
                  <SubTitle as="p" is="5">
                    A simple responsive <strong>footer</strong> which can
                    include anything: lists, headings, columns, icons, buttons,
                    etc.
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/tiles" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon far icon="clone" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Tiles
                  </Title>
                  <SubTitle as="p" is="5">
                    A single tile element to build 2-dimensional Metro-like,
                    Pinterest-like, or whatever-you-like grids
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
