import React from 'react'
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
  Tabs,
  TabItem,
} from '../../src/'
import { useStyleSheet, useStyles } from './hook'

export const BlogTemplate = () => {
  useStyleSheet(
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  )
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyleSheet('blog.css')
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
  return (
    <>
      <NavBar className="navbar">
        <Container className="container">
          <NavBarBrand
            className="navbar-brand"
            src="https://bulmatemplates.github.io/bulma-templates/images/bulma.png"
            href="#"
            width=""
            height=""
          ></NavBarBrand>
          <NavBarMenu id="navbarMenu" className="navbar-menu">
            <NavBarEnd className="navbar-end">
              <NavBarItem>
                <a className="navbar-item is-active" href="#HERO">
                  Home
                </a>
              </NavBarItem>
              <NavBarItem>
                <a className="navbar-item" href="#COVER">
                  Examples
                </a>
              </NavBarItem>
              <NavBarItem>
                <a className="navbar-item">Features</a>
              </NavBarItem>
              <NavBarItem>
                <a className="navbar-item">Team</a>
              </NavBarItem>
              <NavBarItem>
                <a className="navbar-item">Archives</a>
              </NavBarItem>
              <NavBarItem>
                <a className="navbar-item">Help</a>
              </NavBarItem>
              <NavBarDropDown title="Account" isHoverable>
                <NavBarItem>
                  <a className="navbar-item">Dashboard</a>
                </NavBarItem>
                <NavBarItem>
                  <a className="navbar-item">Profile</a>
                </NavBarItem>
                <NavBarItem>
                  <a className="navbar-item">Settings</a>
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
          <div className="column is-8 is-offset-2">
            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <p className="title article-title">
                      Introducing a new feature for paid subscribers
                    </p>
                    <div className="tags has-addons level-item">
                      <span className="tag is-rounded is-info">
                        @skeetskeet
                      </span>
                      <span className="tag is-rounded">May 10, 2018</span>
                    </div>
                  </div>
                </div>
                <div className="content article-body">
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
                </div>
              </div>
            </div>

            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-center">
                    <img
                      src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg"
                      className="author-image"
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="media-content has-text-centered">
                    <p className="title article-title">
                      Sapien eget mi proin sed 🔱
                    </p>
                    <p className="subtitle is-6 article-subtitle">
                      <a href="#">@daria</a> on February 17, 2018
                    </p>
                  </div>
                </div>
                <div className="content article-body">
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
                </div>
              </div>
            </div>

            <section className="hero is-info is-bold is-small promo-block">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    <i className="fa fa-bell-o"></i> Nemo enim ipsam voluptatem
                    quia.
                  </h1>
                  <span className="tag is-black is-medium is-rounded">
                    Natus error sit voluptatem
                  </span>
                </div>
              </div>
            </section>

            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-center">
                    <img
                      src="http://www.radfaces.com/images/avatars/angela-chase.jpg"
                      className="author-image"
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="media-content has-text-centered">
                    <p className="title article-title">
                      Cras tincidunt lobortis feugiat vivamus.
                    </p>
                    <p className="subtitle is-6 article-subtitle">
                      <a href="#">@angela</a> on October 7, 2017
                    </p>
                  </div>
                </div>
                <div className="content article-body">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default BlogTemplate
