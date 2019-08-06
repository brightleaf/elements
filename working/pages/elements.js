import React from 'react'
import { Link } from '@reach/router'
import {
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Columns,
  Content,
  Hero,
  HeroBody,
  MediaObject,
  MediaContent,
  MediaLeft,
  Icon,
  Title,
  SubTitle,
  Section,
} from '../../src/'
const Elements = () => {
  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/elements">Elements</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero>
        <HeroBody>
          <Title>Elements</Title>
          <SubTitle as="p" is="4">
            Essential interface elements that only require a single element
          </SubTitle>
        </HeroBody>
      </Hero>
      <hr />
      <Columns isMultiline>
        <Column isOneThird>
          <Link to="/box" className="comp-link">
            <MediaObject className="notification  has-background-white">
              <MediaLeft>
                <Icon fas icon="box-open" className="fa-lg" hasTextWarning />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Box
                  </Title>
                  <SubTitle as="p" is="5">
                    A white <strong>box</strong> to contain other elements
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/buttons" className="comp-link">
            <MediaObject className="notification  has-background-white">
              <MediaLeft>
                <Icon fab icon="wpforms" className="fa-lg" hasTextInfo />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Button
                  </Title>
                  <SubTitle as="p" is="5">
                    The classic <strong>button</strong>, in different colors,
                    sizes, and states
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/icons" className="comp-link">
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
          <Link to="/content" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="sticky-note" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Content
                  </Title>
                  <SubTitle as="p" is="5">
                    A single class to handle <strong>WYSIWYG</strong> generated
                    content, where only <strong>HTML tags</strong> are available
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/delete" className="comp-link">
            <MediaObject className="notification has-background-white">
              <MediaLeft>
                <Icon fas icon="backspace" className="fa-lg" hasTextDanger />
              </MediaLeft>
              <MediaContent>
                <Content>
                  <Title is="4" as="h1">
                    Delete
                  </Title>
                  <SubTitle as="p" is="5">
                    A versatile <strong>delete</strong> cross
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column>
          <Link to="/icons" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="icons" className="fa-lg" hasTextInfo />
              </MediaLeft>
              <MediaContent className="media-content">
                <Content className="content">
                  <Title is="4" as="h1">
                    Icon
                  </Title>
                  <SubTitle as="p" is="5">
                    Compatible with all icon font libraries, including{' '}
                    <strong>Font Awesome 5</strong>
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/images" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon far icon="image" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Image
                  </Title>
                  <SubTitle as="p" is="5">
                    A container for <strong>responsive images</strong>
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/notifications" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon
                  fas
                  icon="exclamation-circle"
                  className="fa-lg"
                  hasTextWarning
                />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Notification
                  </Title>
                  <SubTitle as="p" is="5">
                    Bold <strong>notification</strong> blocks, to alert your
                    users of something
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/progress-bars" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon far icon="clone" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Progress Bars
                  </Title>
                  <SubTitle as="p" is="5">
                    Native HTML <strong>progress</strong> bars
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/tables" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="table" className="fa-lg" hasTextGrey />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Table
                  </Title>
                  <SubTitle as="p" is="5">
                    The inevitable HTML <strong>table</strong>, with special
                    case cells
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/tags" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="tags" className="fa-lg" hasTextDanger />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Tag
                  </Title>
                  <SubTitle as="p" is="5">
                    Small <strong>tag labels</strong> to insert anywhere
                  </SubTitle>
                </Content>
              </MediaContent>
            </MediaObject>
          </Link>
        </Column>
        <Column isOneThird>
          <Link to="/titles" className="comp-link">
            <MediaObject className="notification has-background-white media">
              <MediaLeft className="media-left">
                <Icon fas icon="tachometer-alt" className="fa-lg" hasTextInfo />
              </MediaLeft>
              <MediaContent>
                <Content className="content">
                  <Title is="4" as="h1">
                    Title
                  </Title>
                  <SubTitle as="p" is="5">
                    Simple <strong>headings</strong> to add depth to your page
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

export default Elements
