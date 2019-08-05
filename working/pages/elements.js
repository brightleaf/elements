import React from 'react'
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
const Elements = () => {
  return (
    <Section>
      <Hero isLight isBold>
        <HeroBody>
          <Title>Elements</Title>
          <SubTitle as="p" is="4">
            Essential interface elements that only require a single element
          </SubTitle>
        </HeroBody>
      </Hero>
      <Columns isMultiline>
        <Column isOneThird>
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
        </Column>
        <Column isOneThird>
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
        </Column>
        <Column isOneThird>
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
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white media">
            <MediaLeft className="media-left">
              <Icon fab icon="superpowers" className="fa-lg" hasTextGrey />
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
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white">
            <MediaLeft>
              <Icon fas icon="stream" className="fa-lg" hasTextPrimary />
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
        </Column>
        <Column>
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
                  Icon
                </Title>
                <SubTitle as="p" is="5">
                  Compatible with all icon font libraries, including{' '}
                  <strong>Font Awesome 5</strong>
                </SubTitle>
              </Content>
            </MediaContent>
          </MediaObject>
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white media">
            <MediaLeft className="media-left">
              <Icon far icon="clone" className="fa-lg" hasTextGrey />
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
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white media">
            <MediaLeft className="media-left">
              <Icon far icon="clone" className="fa-lg" hasTextGrey />
            </MediaLeft>
            <MediaContent>
              <Content className="content">
                <Title is="4" as="h1">
                  Notification
                </Title>
                <SubTitle as="p" is="5">
                  Bold <strong>notification</strong> blocks, to alert your users
                  of something
                </SubTitle>
              </Content>
            </MediaContent>
          </MediaObject>
        </Column>
        <Column isOneThird>
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
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white media">
            <MediaLeft className="media-left">
              <Icon far icon="table" className="fa-lg" hasTextGrey />
            </MediaLeft>
            <MediaContent>
              <Content className="content">
                <Title is="4" as="h1">
                  Table
                </Title>
                <SubTitle as="p" is="5">
                  The inevitable HTML <strong>table</strong>, with special case
                  cells
                </SubTitle>
              </Content>
            </MediaContent>
          </MediaObject>
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white media">
            <MediaLeft className="media-left">
              <Icon far icon="tag" className="fa-lg" hasTextGrey />
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
        </Column>
        <Column isOneThird>
          <MediaObject className="notification has-background-white media">
            <MediaLeft className="media-left">
              <Icon far icon="tag" className="fa-lg" hasTextGrey />
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
        </Column>
      </Columns>
    </Section>
  )
}

export default Elements
