import React, { useState } from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import {
  Button,
  Column,
  Columns,
  Container,
  Hero,
  HeroHead,
  HeroBody,
  HeroFooter,
  Image,
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  Title,
  SubTitle,
  Tabs,
  TabItem,
  TabList,
} from '../../src/'

export const CoverTemplate = () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyles(`
  html,
  body {
      font-family: 'Open Sans';
  }

  img {
      padding: 5px;
      border: 1px solid #ccc;
  }
  `)
  const [menuIsActive, setMenuIsActive] = useState(false)
  return (
    <Hero isFullHeight isDefault isBold>
      <HeroHead>
        <NavBar>
          <Container>
            <NavBarBrand
              src="https://bulmatemplates.github.io/bulma-templates/images/bulma.png"
              href="#"
              onClick={e => {
                e.preventDefault()
                setMenuIsActive(!menuIsActive)
              }}
            ></NavBarBrand>
            <NavBarMenu id="navbarMenu" isActive={menuIsActive}>
              <NavBarEnd>
                <Tabs isRight>
                  <TabList>
                    <TabItem isActive>
                      <a href="#HERO">Hero</a>
                    </TabItem>
                    <TabItem>
                      <a href="#BLOG">Blog</a>
                    </TabItem>
                    <TabItem>
                      <a href="#LANDING">Landing</a>
                    </TabItem>
                    <TabItem>
                      <a href="#ADMIN">Admin</a>
                    </TabItem>
                    <TabItem>
                      <a href="https://brightleaf.github.io/elements">Help</a>
                    </TabItem>
                  </TabList>
                </Tabs>
              </NavBarEnd>
            </NavBarMenu>
          </Container>
        </NavBar>
      </HeroHead>
      <HeroBody>
        <Container className="has-text-centered">
          <Columns className="is-vcentered">
            <Column size="5">
              <Image
                is4by3
                src="https://picsum.photos/800/600/?random"
                alt="Description"
              />
            </Column>
            <Column size="6" className="is-offset-1">
              <Title is="2">Superhero Scaffolding</Title>
              <SubTitle is="4">
                Let this cover page describe a product or service.
              </SubTitle>
              <br />
              <p className="has-text-centered">
                <Button isAnchor isMedium isOutlined isInfo>
                  Learn more
                </Button>
              </p>
            </Column>
          </Columns>
        </Container>
      </HeroBody>

      <HeroFooter>
        <Container>
          <Tabs isCentered>
            <TabList>
              <TabItem>
                <a>And this is the bottom</a>
              </TabItem>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
  )
}

export default CoverTemplate
