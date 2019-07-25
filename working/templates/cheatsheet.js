import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'
import { useMediaQuery } from '@brightleaf/react-hooks/lib/use-media-query'
import classnames from 'classnames'
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

export const CheatSheetTemplate = () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('cheatsheet.css')
  useScript('font-awesome.js')
  const { matches } = useMediaQuery('(max-width: 768px)')

  const tagMenu = classnames({ tags: matches })

  return (
    <>
      <Hero isPrimary className="hero is-primary">
        <HeroBody>
          <Columns>
            <Column is="12" className="column is-12">
              <Container className="content">
                <BaseIcon fab isLargeFA icon="discord" />{' '}
                <BaseIcon fas isLargeFA icon="code" />
                <Title>
                  Code <em>All</em> The Things
                </Title>
                <SubTitle>
                  Collection of code goodies for next-level dev
                </SubTitle>
                <Button
                  isAnchor
                  isPrimary
                  isLarge
                  href="https://github.com/dansup/bulma-templates"
                  target="_blank"
                >
                  <Icon icon="github" fab></Icon>
                  <span>Github</span>
                </Button>
              </Container>
            </Column>
          </Columns>
        </HeroBody>
      </Hero>
      <Section className="section">
        <Container className="container">
          <Columns className="columns">
            <Column is="3" className="column is-3">
              <Menu isMedium>
                <MenuLabel>categories</MenuLabel>
                <MenuList className={tagMenu}>
                  <MenuListItem className="is-right">
                    <a href="#const" className="is-active">
                      <BaseIcon fab icon="css3-alt" /> CSS
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a href="#let" className="is-active">
                      <BaseIcon fab icon="js" /> JS
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a href="#let" className="is-active">
                      <BaseIcon fab icon="html5" /> HTML
                    </a>
                  </MenuListItem>
                </MenuList>
                <MenuLabel>More to read...</MenuLabel>
                <MenuList className={tagMenu}>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Lorem
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Ipsum
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Dolor
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Animi
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Eximi
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Nullius
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Oxipi
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Vultus
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Voluptatis
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Exomarphis
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Finimi
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Aenigma
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Arkham
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Blue
                    </Tag>
                  </MenuListItem>
                  <MenuListItem>
                    <Tag isWhite isMedium>
                      Medium
                    </Tag>
                  </MenuListItem>
                </MenuList>
              </Menu>
            </Column>
            <Column is="9">
              <Content isMedium>
                <Title as="h3" is="3">
                  Snippets ¯\_(ツ)_/¯
                </Title>
                <Box className="box">
                  <Title is="3" as="h4" id="const">
                    const
                  </Title>
                  <Message isPrimary>
                    <Icon icon="js" fab hasTextPrimary />
                    <MessageBody>
                      Block-scoped. Cannot be re-assigned. Not immutable.
                    </MessageBody>
                  </Message>
                  <pre>
                    <code className="language-javascript">
                      const test = 'test';
                    </code>
                  </pre>
                </Box>
                <Box className="box">
                  <Title is="3" as="h4" id="let">
                    let
                  </Title>
                  <Message isPrimary>
                    <Icon icon="info-circle" fas hasTextPrimary />
                    <MessageBody>Block-scoped. Can be re-assigned.</MessageBody>
                  </Message>
                  <pre>
                    <code className="language-javascript">let i = 0;</code>
                  </pre>
                </Box>
                <Title is="3" as="h4">
                  More to Come...
                </Title>
                <Box className="box">
                  <Title is="4" as="h4" id="lorem" className="title is-4">
                    More to come...
                  </Title>
                  <Message isPrimary className="message is-primary">
                    <Icon icon="info-circle" fas hasTextPrimary />
                    <MessageBody>
                      Lorem ipsum dolor sit amet, mea ne viderer veritus
                      menandri, id scaevola gloriatur instructior sit.
                    </MessageBody>
                  </Message>
                  <pre>
                    <code className="language-javascript">let i = 0;</code>
                  </pre>
                </Box>
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
      <Footer>
        <Section className="section">
          <Container className="container">
            <Columns isMultiline>
              <Column isOneThird>
                <MediaObject className="notification  has-background-white">
                  <MediaLeft>
                    <Icon fas icon="columns" className="fa-lg" hasTextWarning />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <Title is="4" as="h1">
                        Columns
                      </Title>
                      <SubTitle as="p" is="5">
                        The power of <strong>Flexbox</strong> in a simple
                        interface
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
                        Form
                      </Title>
                      <SubTitle as="p" is="5">
                        The indispensable <strong>form controls</strong>,
                        designed for maximum clarity
                      </SubTitle>
                    </Content>
                  </MediaContent>
                </MediaObject>
              </Column>
              <Column isOneThird>
                <MediaObject className="notification has-background-white">
                  <MediaLeft className="media-left">
                    <Icon fas icon="cubes" className="fa-lg" hasTextDanger />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <Title is="4" as="h1">
                        Components
                      </Title>
                      <SubTitle as="p" is="5">
                        Advanced multi-part components with lots of
                        possibilities
                      </SubTitle>
                    </Content>
                  </MediaContent>
                </MediaObject>
              </Column>
              <Column isOneThird>
                <MediaObject className="notification has-background-white media">
                  <MediaLeft className="media-left">
                    <Icon fas icon="cogs" className="fa-lg" hasTextGrey />
                  </MediaLeft>
                  <MediaContent>
                    <Content className="content">
                      <Title is="4" as="h1">
                        Modifiers
                      </Title>
                      <SubTitle as="p" is="5">
                        An <strong>easy-to-read</strong> naming system designed
                        for humans
                      </SubTitle>
                    </Content>
                  </MediaContent>
                </MediaObject>
              </Column>
              <Column isOneThird>
                <MediaObject className="notification has-background-white">
                  <MediaLeft>
                    <Icon
                      fas
                      icon="warehouse"
                      className="fa-lg"
                      hasTextPrimary
                    />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <Title is="4" as="h1">
                        Layout
                      </Title>
                      <SubTitle as="p" is="5">
                        Design the <strong>structure</strong> of your webpage
                        with these CSS classes
                      </SubTitle>
                    </Content>
                  </MediaContent>
                </MediaObject>
              </Column>
              <Column>
                <MediaObject className="notification has-background-white media">
                  <MediaLeft className="media-left">
                    <Icon fas icon="cube" className="fa-lg" hasTextDanger />
                  </MediaLeft>
                  <MediaContent className="media-content">
                    <Content className="content">
                      <Title is="4" as="h1">
                        Elements
                      </Title>
                      <SubTitle as="p" is="5">
                        Essential interface elements that only require a{' '}
                        <strong>single CSS class</strong>
                      </SubTitle>
                    </Content>
                  </MediaContent>
                </MediaObject>
              </Column>
            </Columns>
          </Container>
        </Section>
        <hr />
        <Columns className="columns is-mobile is-centered">
          <Field isGrouped isGroupedMultiline>
            <Control>
              <Tags hasAddons className="tags has-addons">
                <Tag
                  isLink
                  className="tag is-link"
                  href="https://github.com/dansup/bulma-templates"
                >
                  Bulma Templates
                </Tag>
                <Tag isInfo>MIT license</Tag>
              </Tags>
            </Control>
            <Control>
              <Tags hasAddons>
                <Tag isDark className="tag is-dark">
                  based on a pen
                </Tag>
                <Tag hasAddons isWarning>
                  <a href="https://codepen.io/melanieseltzer/pen/odOXWM">
                    <BaseIcon icon="codepen" fab className="fa-lg" />
                  </a>
                </Tag>
              </Tags>
            </Control>
          </Field>
        </Columns>
      </Footer>
    </>
  )
}

export default CheatSheetTemplate
/*
(min-width: 768)
<script src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js'></script>
<script>
  window.addEventListener('resize', () => {
  const divs = document.querySelectorAll(".menu-list");
  if (window.innerWidth < 768){
    divs.forEach(div => div.classList.add("tags"));
  }
  else {
    divs.forEach(div => div.classList.remove("tags"));
  }
});
</script>
*/
