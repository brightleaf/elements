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
  Footer,
  Hero,
  HeroHead,
  HeroBody,
  HeroFooter,
  Image,
  MediaObject,
  MediaLeft,
  MediaRight,
  MediaContent,
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarDivider,
  NavBarDropDown,
  NavBarItem,
  Icon,
  Tile,
  Title,
  SubTitle,
  Tag,
  Tags,
  Tabs,
  TabItem,
} from '../../src/'

export const BlogTemplate = () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyleSheet('blog.css')

  return (
    <>
      <NavBar className="navbar">
        <Container className="container">
          <NavBarBrand
            className="navbar-brand"
            src="brightleaf.png"
            href="#"
            width="32"
            height="32"
          ></NavBarBrand>
          <NavBarMenu id="navbarMenu" className="navbar-menu">
            <NavBarEnd className="navbar-end">
              <NavBarItem isActive>
                <a href="#HERO">Hero</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#COVER">Cover</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#ADMIN">Admin</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#LANDING">Landing</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#CHEATSHEET">Cheatsheet</a>
              </NavBarItem>

              <NavBarItem>
                <a>Help</a>
              </NavBarItem>
              <NavBarDropDown title="Account" isHoverable>
                <NavBarItem>
                  <a>Dashboard</a>
                </NavBarItem>
                <NavBarItem>
                  <a>Profile</a>
                </NavBarItem>
                <NavBarItem>
                  <a>Settings</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <div>Logout</div>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarEnd>
          </NavBarMenu>
        </Container>
      </NavBar>

      <Hero isInfo isMedium isBold>
        <Container className="has-text-centered">
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Title>
        </Container>
      </Hero>

      <Container className="container">
        <section className="articles">
          <Column size="8" className="is-offset-2">
            <Card className="article">
              <CardBody className="card-content">
                <MediaObject className="media">
                  <MediaContent className="has-text-centered">
                    <Title as="p" className="title article-title">
                      Introducing a new feature for paid subscribers
                    </Title>
                    <Tags hasAddOns className="level-item">
                      <Tag isRounded isInfo>
                        @skeetskeet
                      </Tag>
                      <Tag isRounded>May 10, 2018</Tag>
                    </Tags>
                  </MediaContent>
                </MediaObject>
                <Content className="article-body">
                  <p>
                    Non arcu risus quis varius quam quisque. Dictum varius duis
                    at consectetur lorem. Posuere sollicitudin aliquam ultrices
                    sagittis orci a scelerisque purus semper.{' '}
                  </p>
                  <p>
                    Metus aliquam eleifend mi in nulla posuere sollicitudin
                    aliquam ultrices. In hac habitasse platea dictumst
                    vestibulum rhoncus est pellentesque elit. Accumsan lacus vel
                    facilisis volutpat. Non sodales neque sodales ut etiam. Est
                    pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis feugiat vivamus.
                  </p>
                  <h3 className="has-text-centered">
                    How to properly center tags in bulma?
                  </h3>
                  <div>
                    {' '}
                    Proper centering of tags in bulma is done with class:{' '}
                    <pre>level-item</pre>
                    Voluptat ut farmacium tellus in metus vulputate. Feugiat in
                    fermentum posuere urna nec. Pharetra convallis posuere morbi
                    leo urna molestie. Accumsan lacus vel facilisis volutpat est
                    velit egestas. Fermentum leo vel orci porta. Faucibus
                    interdum posuere lorem ipsum.
                  </div>
                </Content>
              </CardBody>
            </Card>

            <Card className="card article">
              <CardBody className="card-content">
                <MediaObject className="media">
                  <div className="media-center">
                    <img
                      src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg"
                      className="author-image"
                      alt="Placeholder image"
                    />
                  </div>
                  <MediaContent className="media-content has-text-centered">
                    <Title as="p" className="title article-title">
                      Sapien eget mi proin sed 🔱
                    </Title>
                    <SubTitle as="p" is="6" className="article-subtitle">
                      <a href="#">@daria</a> on February 17, 2018
                    </SubTitle>
                  </MediaContent>
                </MediaObject>
                <Content className="article-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Accumsan lacus vel facilisis volutpat est velit
                    egestas. Sapien eget mi proin sed. Sit amet mattis vulputate
                    enim.
                  </p>
                  <p>
                    Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum
                    leo vel orci porta non. Proin fermentum leo vel orci porta
                    non pulvinar. Imperdiet proin fermentum leo vel. Tortor
                    posuere ac ut consequat semper viverra. Vestibulum lectus
                    mauris ultrices eros.
                  </p>
                  <h3 className="has-text-centered">
                    Lectus vestibulum mattis ullamcorper velit sed ullamcorper
                    morbi. Cras tincidunt lobortis feugiat vivamus.
                  </h3>
                  <p>
                    In eu mi bibendum neque egestas congue quisque egestas diam.
                    Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt
                    augue interdum velit euismod in. At in tellus integer
                    feugiat scelerisque varius morbi enim nunc. Vitae suscipit
                    tellus mauris a diam. Arcu non sodales neque sodales ut
                    etiam sit amet.
                  </p>
                </Content>
              </CardBody>
            </Card>

            <Hero
              isInfo
              isBold
              isSmall
              className="hero is-info is-bold is-small promo-block"
            >
              <></>
              <HeroBody>
                <Container className="container">
                  <Title className="title">
                    <BaseIcon
                      fa
                      icon="ball-o"
                      className="fa fa-bell-o"
                    ></BaseIcon>{' '}
                    Nemo enim ipsam voluptatem quia.
                  </Title>
                  <Tag
                    isBlack
                    isMedium
                    isRounded
                    className="tag is-black is-medium is-rounded"
                  >
                    Natus error sit voluptatem
                  </Tag>
                </Container>
              </HeroBody>
            </Hero>

            <Card className=" article">
              <CardBody>
                <MediaObject className="media">
                  <div className="media-center">
                    <img
                      src="http://www.radfaces.com/images/avatars/angela-chase.jpg"
                      className="author-image"
                      alt="Placeholder image"
                    />
                  </div>
                  <MediaContent hasTextCentered>
                    <Title as="p" className="article-title">
                      Cras tincidunt lobortis feugiat vivamus.
                    </Title>
                    <SubTitle as="p" is="6" className="article-subtitle">
                      <a href="#">@angela</a> on October 7, 2017
                    </SubTitle>
                  </MediaContent>
                </MediaObject>
                <Content className="article-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Accumsan lacus vel facilisis volutpat est velit
                    egestas. Sapien eget mi proin sed. Sit amet mattis vulputate
                    enim.
                  </p>
                  <p>
                    Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum
                    leo vel orci porta non. Proin fermentum leo vel orci porta
                    non pulvinar. Imperdiet proin fermentum leo vel. Tortor
                    posuere ac ut consequat semper viverra. Vestibulum lectus
                    mauris ultrices eros.
                  </p>
                  <h3 className="has-text-centered">
                    “Everyone should be able to do one card trick, tell two
                    jokes, and recite three poems, in case they are ever trapped
                    in an elevator.”
                  </h3>
                  <p>
                    In eu mi bibendum neque egestas congue quisque egestas diam.
                    Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt
                    augue interdum velit euismod in. At in tellus integer
                    feugiat scelerisque varius morbi enim nunc. Vitae suscipit
                    tellus mauris a diam. Arcu non sodales neque sodales ut
                    etiam sit amet.
                  </p>
                </Content>
              </CardBody>
            </Card>
          </Column>
        </section>
      </Container>
    </>
  )
}

export default BlogTemplate
