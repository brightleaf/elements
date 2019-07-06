/* eslint-disable spellcheck/spell-checker */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useScript, useStyleSheet } from '@brightleaf/react-hooks'
import {
  Button,
  Column,
  Columns,
  Container,
  Hero,
  HeroBody,
  HeroHead,
  Icon,
  NavBar,
  NavBarDropDown,
  NavBarItem,
  NavBarStart,
  SubTitle,
  Title,
} from '../src'
export const BootSwatchApp = () => {
  const [sheet, setSheet] = useState('slate')
  useStyleSheet(
    `https://jenil.github.io/bulmaswatch/${sheet}/bulmaswatch.min.css`
  )
  useScript('https://kit.fontawesome.com/d8b67ee174.js')
  return (
    <>
      <Hero isPrimary>
        <HeroHead>
          <NavBar className="main-nav">
            <Container>
              <NavBarStart className="navbar-start">
                <NavBarItem>
                  <a href="https://jenil.github.io/bulmaswatch/">
                    <img
                      src="https://jenil.github.io/bulmaswatch/assets/icons/apple-touch-icon-144x144.png"
                      alt=""
                      className="logo"
                    />
                    <Title is="5">Bulmaswatch</Title>
                  </a>
                </NavBarItem>
                <NavBarItem>
                  <a href="https://jenil.github.io/bulmaswatch/">Home</a>
                </NavBarItem>
                <NavBarDropDown title="Themes" isHoverable isBoxed>
                  <Columns>
                    <Column>
                      <NavBarItem>
                        <a href="https://jenil.github.io/bulmaswatch/default">
                          {' '}
                          Default{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/cerulean"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('cerulean')
                          }}
                        >
                          {' '}
                          Cerulean{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/cosmo"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('cosmo')
                          }}
                        >
                          {' '}
                          Cosmo{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/cyborg"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('cyborg')
                          }}
                        >
                          {' '}
                          Cyborg{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/darkly"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('darkly')
                          }}
                        >
                          {' '}
                          Darkly{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/flatly"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('flatly')
                          }}
                        >
                          {' '}
                          Flatly{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/journal"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('journal')
                          }}
                        >
                          {' '}
                          Journal{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/litera"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('litera')
                          }}
                        >
                          {' '}
                          Litera{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/lumen"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('lumen')
                          }}
                        >
                          {' '}
                          Lumen{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/lux"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('lux')
                          }}
                        >
                          {' '}
                          Lux{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/materia"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('materia')
                          }}
                        >
                          {' '}
                          Materia{' '}
                        </a>
                      </NavBarItem>
                    </Column>
                    <Column className="column">
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/minty"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('minty')
                          }}
                        >
                          {' '}
                          Minty{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/nuclear"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('nuclear')
                          }}
                        >
                          {' '}
                          Nuclear{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/pulse"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('pulse')
                          }}
                        >
                          {' '}
                          Pulse{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/sandstone"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('sandstone')
                          }}
                        >
                          {' '}
                          Sandstone{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          onClick={e => {
                            e.preventDefault()
                            setSheet('simplex')
                          }}
                          href="https://jenil.github.io/bulmaswatch/simplex"
                        >
                          {' '}
                          Simplex{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem isActive>
                        <a
                          href="https://jenil.github.io/bulmaswatch/slate"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('slate')
                          }}
                        >
                          {' '}
                          Slate{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/solar"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('solar')
                          }}
                        >
                          {' '}
                          Solar{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/spacelab"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('spacelab')
                          }}
                        >
                          {' '}
                          Spacelab{' '}
                        </a>
                      </NavBarItem>
                      <a
                        className="navbar-item "
                        href="https://jenil.github.io/bulmaswatch/superhero"
                        onClick={e => {
                          e.preventDefault()
                          setSheet('superhero')
                        }}
                      >
                        {' '}
                        Superhero{' '}
                      </a>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/united"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('united')
                          }}
                        >
                          {' '}
                          United{' '}
                        </a>
                      </NavBarItem>
                      <NavBarItem>
                        <a
                          href="https://jenil.github.io/bulmaswatch/yeti"
                          onClick={e => {
                            e.preventDefault()
                            setSheet('yeti')
                          }}
                        >
                          {' '}
                          Yeti{' '}
                        </a>
                      </NavBarItem>
                    </Column>
                  </Columns>
                </NavBarDropDown>
                <NavBarItem>
                  <a href="https://jenil.github.io/bulmaswatch/help/">Help</a>
                </NavBarItem>
              </NavBarStart>
              <span className="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="navbar-end navbar-menu">
                <a
                  href="https://github.com/jenil/bulmaswatch/stargazers"
                  className="navbar-item"
                >
                  <img
                    src="https://img.shields.io/github/stars/jenil/bulmaswatch.svg"
                    alt="GitHub stars"
                  />
                </a>
                <a
                  className="navbar-item"
                  href="//github.com/jenil/bulmaswatch/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-bug"></i>&nbsp;Report an issue
                </a>
                <a
                  className="navbar-item"
                  href="//github.com/jenil/bulmaswatch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    {' '}
                    <i className="fab fa-github"></i>{' '}
                  </span>
                </a>
                <a
                  className="navbar-item"
                  href="//twitter.com/geekGogari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    {' '}
                    <i className="fab fa-twitter"></i>{' '}
                  </span>
                </a>
              </div>
            </Container>
          </NavBar>
        </HeroHead>

        <HeroBody>
          <Container className="container">
            <Title className="title">Slate</Title>
            <SubTitle className="subtitle">Shades of gunmetal gray</SubTitle>
            <p>
              <Button
                isInverted
                isPrimary
                isAnchor
                href="/bulmaswatch/slate/bulmaswatch.min.css"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </Button>
              <Button
                isDark
                isAnchor
                className="button is-dark"
                href="//github.com/jenil/bulmaswatch/tree/gh-pages/slate"
                target="_blank"
                rel="noopener noreferrer"
                title="Download from Github"
              >
                <Icon fab icon="github" className="icon"></Icon>
              </Button>
            </p>
          </Container>
        </HeroBody>
      </Hero>
      <div className="columns">
        <div className="column is-2">
          <aside className="menu section">
            <p className="menu-label"> Elements </p>
            <ul className="menu-list">
              <li>
                <a href="#typography"> Typography </a>
              </li>
              <li>
                <a href="#box"> Box </a>
              </li>
              <li>
                <a href="#button"> Button </a>
              </li>
              <li>
                <a href="#content"> Content </a>
              </li>
              <li>
                <a href="#delete"> Delete </a>
              </li>
              <li>
                <a href="#form"> Form </a>
              </li>
              <li>
                <a href="#icon"> Icon </a>
              </li>
              <li>
                <a href="#images"> Images </a>
              </li>
              <li>
                <a href="#notifications"> Notifications </a>
              </li>
              <li>
                <a href="#progress"> Progress bars </a>
              </li>
              <li>
                <a href="#table"> Table </a>
              </li>
              <li>
                <a href="#tag"> Tag </a>
              </li>
            </ul>
            <p className="menu-label"> Components </p>
            <ul className="menu-list">
              <li>
                <a href="#breadcrumb"> Breadcrumb </a>
              </li>
              <li>
                <a href="#dropdown"> Dropdown </a>
              </li>
              <li>
                <a href="#card"> Card </a>
              </li>
              <li>
                <a href="#hero"> Hero </a>
              </li>
              <li>
                <a href="#level"> Level </a>
              </li>
              <li>
                <a href="#media"> Media object </a>
              </li>
              <li>
                <a href="#menu"> Menu </a>
              </li>
              <li>
                <a href="#message"> Message </a>
              </li>
              <li>
                <a href="#modal"> Modal </a>
              </li>
              <li>
                <a href="#navbar"> Navbar </a>
              </li>
              <li>
                <a href="#pagination"> Pagination </a>
              </li>
              <li>
                <a href="#panel"> Panel </a>
              </li>
              <li>
                <a href="#tabs"> Tabs </a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column">
          <section className="section" id="typography">
            <h1 className="title"> Typography </h1>
            <hr />
            <div className="columns">
              <div className="column">
                <h1 className="title is-1"> Title 1 </h1>
                <h2 className="title is-2"> Title 2 </h2>
                <h3 className="title is-3"> Title 3 </h3>
                <h4 className="title is-4"> Title 4 </h4>
                <h5 className="title is-5"> Title 5 </h5>
                <h6 className="title is-6"> Title 6 </h6>{' '}
              </div>
              <div className="column">
                <h1 className="subtitle is-1"> Subtitle 1 </h1>
                <h2 className="subtitle is-2"> Subtitle 2 </h2>
                <h3 className="subtitle is-3"> Subtitle 3 </h3>
                <h4 className="subtitle is-4"> Subtitle 4 </h4>
                <h5 className="subtitle is-5"> Subtitle 5 </h5>
                <h6 className="subtitle is-6"> Subtitle 6 </h6>{' '}
              </div>
              <div className="column">
                <h1 className="title"> Title </h1>
                <h2 className="subtitle"> Subtitle </h2>
                <p className="title is-1"> Title 1 </p>
                <p className="subtitle is-3"> Subtitle 3 </p>
                <p className="title is-2"> Title 2 </p>
                <p className="subtitle is-4"> Subtitle 4 </p>
                <p className="title is-3"> Title 3 </p>
                <p className="subtitle is-5"> Subtitle 5 </p>
              </div>
            </div>
          </section>

          <section className="section" id="box">
            <h1 className="title"> Box </h1>
            <hr />
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    {' '}
                    <img
                      alt="Image"
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      {' '}
                      <strong> John Smith </strong> <small> @johnsmith </small>{' '}
                      <small> 31m </small>
                      <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Aenean efficitur sit amet massa fringilla egestas.
                      Nullam condimentum luctus turpis.
                    </p>
                  </div>
                  <nav className="level">
                    <div className="level-left">
                      <a className="level-item">
                        <span className="icon is-small">
                          {' '}
                          <i className="fa fa-reply"> </i>{' '}
                        </span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small">
                          {' '}
                          <i className="fa fa-retweet"> </i>{' '}
                        </span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small">
                          {' '}
                          <i className="fa fa-heart"> </i>{' '}
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </section>

          <section className="section" id="button">
            <h1 className="title"> Button </h1>
            <hr />
            <div className="columns">
              <div className="column">
                <div className="buttons">
                  <a className="button"> Button </a>
                  <a className="button is-white"> White </a>
                  <a className="button is-light"> Light </a>
                  <a className="button is-dark"> Dark </a>
                  <a className="button is-black"> Black </a>
                  <a className="button is-link"> Link </a>
                  <a className="button is-text"> Link </a>
                </div>
                <div className="buttons">
                  <a className="button is-primary"> Primary </a>
                  <a className="button is-info"> Info </a>
                  <a className="button is-success"> Success </a>
                  <a className="button is-warning"> Warning </a>
                  <a className="button is-danger"> Danger </a>
                </div>
                <div className="buttons">
                  <a className="button is-focused"> Focus </a>
                  <a className="button is-primary is-focused"> Focus </a>
                  <a className="button is-info is-focused"> Focus </a>
                  <a className="button is-success is-focused"> Focus </a>
                  <a className="button is-warning is-focused"> Focus </a>
                  <a className="button is-danger is-focused"> Focus </a>
                </div>
                <div className="buttons">
                  <a className="button is-hovered"> Hover </a>
                  <a className="button is-primary is-hovered"> Hover </a>
                  <a className="button is-info is-hovered"> Hover </a>
                  <a className="button is-success is-hovered"> Hover </a>
                  <a className="button is-warning is-hovered"> Hover </a>
                  <a className="button is-danger is-hovered"> Hover </a>
                </div>
                <div className="buttons">
                  <a className="button is-active"> Active </a>
                  <a className="button is-primary is-active"> Active </a>
                  <a className="button is-info is-active"> Active </a>
                  <a className="button is-success is-active"> Active </a>
                  <a className="button is-warning is-active"> Active </a>
                  <a className="button is-danger is-active"> Active </a>
                </div>
                <div className="buttons">
                  <a className="button is-loading"> Loading </a>
                  <a className="button is-primary is-loading"> Loading </a>
                  <a className="button is-info is-loading"> Loading </a>
                  <a className="button is-success is-loading"> Loading </a>
                  <a className="button is-warning is-loading"> Loading </a>
                  <a className="button is-danger is-loading"> Loading </a>
                </div>
                <p className="field">
                  <a className="button">
                    <span className="icon is-small">
                      <i className="fas fa-bold"> </i>
                    </span>
                  </a>
                  <a className="button">
                    <span className="icon is-small">
                      <i className="fas fa-italic"> </i>
                    </span>
                  </a>
                  <a className="button">
                    <span className="icon is-small">
                      <i className="fas fa-underline"> </i>
                    </span>
                  </a>
                  <a className="button">
                    <span className="icon">
                      <i className="fab fa-github"> </i>
                    </span>
                    <span> GitHub </span>
                  </a>
                  <a className="button is-primary">
                    <span className="icon">
                      <i className="fab fa-twitter"> </i>
                    </span>
                    <span> Twitter </span>
                  </a>
                  <a className="button is-success">
                    <span className="icon is-small">
                      <i className="fas fa-check"> </i>
                    </span>
                    <span> Save </span>
                  </a>
                  <a className="button is-danger is-outlined">
                    <span> Delete </span>
                    <span className="icon is-small">
                      <i className="fas fa-times"> </i>
                    </span>
                  </a>
                </p>
                <div className="field has-addons">
                  <p className="control">
                    <a className="button">
                      <span className="icon is-small">
                        <i className="fas fa-bold"></i>
                      </span>
                      <span>Bold</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button">
                      <span className="icon is-small">
                        <i className="fas fa-italic"></i>
                      </span>
                      <span>Italic</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button">
                      <span className="icon is-small">
                        <i className="fas fa-underline"></i>
                      </span>
                      <span>Underline</span>
                    </a>
                  </p>
                </div>

                <div className="field has-addons">
                  <p className="control">
                    <a className="button">
                      <span className="icon is-small">
                        <i className="fas fa-align-left"></i>
                      </span>
                      <span>Left</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button">
                      <span className="icon is-small">
                        <i className="fas fa-align-center"></i>
                      </span>
                      <span>Center</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button">
                      <span className="icon is-small">
                        <i className="fas fa-align-right"></i>
                      </span>
                      <span>Right</span>
                    </a>
                  </p>
                </div>
                <div className="buttons">
                  <a className="button is-rounded">Rounded</a>
                  <a className="button is-primary is-rounded">Rounded</a>
                  <a className="button is-link is-rounded">Rounded</a>
                  <a className="button is-info is-rounded">Rounded</a>
                  <a className="button is-success is-rounded">Rounded</a>
                  <a className="button is-danger is-rounded">Rounded</a>
                </div>
              </div>
              <div className="column">
                <div className="buttons">
                  <a className="button is-small"> Small </a>
                  <a className="button"> Normal </a>
                  <a className="button is-medium"> Medium </a>
                  <a className="button is-large"> Large </a>
                </div>
                <div className="buttons">
                  <a className="button is-outlined"> Outlined </a>
                  <a className="button is-primary is-outlined"> Outlined </a>
                  <a className="button is-info is-outlined"> Outlined </a>
                  <a className="button is-success is-outlined"> Outlined </a>
                  <a className="button is-danger is-outlined"> Outlined </a>
                </div>
                <div className="buttons notification is-primary">
                  <a className="button is-primary is-inverted is-outlined">
                    {' '}
                    Invert Outlined{' '}
                  </a>
                  <a className="button is-info is-inverted is-outlined">
                    {' '}
                    Invert Outlined{' '}
                  </a>
                  <a className="button is-success is-inverted is-outlined">
                    {' '}
                    Invert Outlined{' '}
                  </a>
                  <a className="button is-danger is-inverted is-outlined">
                    {' '}
                    Invert Outlined{' '}
                  </a>
                </div>
                <div className="buttons notification is-primary">
                  <a className="button is-primary is-inverted"> Inverted </a>
                  <a className="button is-info is-inverted"> Inverted </a>
                  <a className="button is-success is-inverted"> Inverted </a>
                  <a className="button is-danger is-inverted"> Inverted </a>
                </div>
                <p className="buttons">
                  <a className="button is-small">
                    <span className="icon is-small">
                      <i className="fab fa-github"> </i>
                    </span>
                    <span> GitHub </span>
                  </a>
                  <a className="button">
                    <span className="icon">
                      <i className="fab fa-github"> </i>
                    </span>
                    <span> GitHub </span>
                  </a>
                  <a className="button is-medium">
                    <span className="icon">
                      <i className="fab fa-github"> </i>
                    </span>
                    <span> GitHub </span>
                  </a>
                  <a className="button is-large">
                    <span className="icon is-medium">
                      <i className="fab fa-github"> </i>
                    </span>
                    <span> GitHub </span>
                  </a>
                </p>
                <p className="field">
                  <a className="button is-small">
                    <span className="icon is-small">
                      <i className="fas fa-heading"> </i>
                    </span>
                  </a>
                </p>
                <p className="field">
                  <a className="button">
                    <span className="icon is-small">
                      <i className="fas fa-heading"> </i>
                    </span>
                  </a>
                  <a className="button">
                    <span className="icon">
                      <i className="fas fa-heading fa-lg"> </i>
                    </span>
                  </a>
                </p>
                <p className="field">
                  <a className="button is-medium">
                    <span className="icon is-small">
                      <i className="fas fa-heading"> </i>
                    </span>
                  </a>
                  <a className="button is-medium">
                    <span className="icon">
                      <i className="fas fa-heading fa-lg"> </i>
                    </span>
                  </a>
                  <a className="button is-medium">
                    <span className="icon is-medium">
                      <i className="fas fa-heading fa-2x"> </i>
                    </span>
                  </a>
                </p>
                <p className="field">
                  <a className="button is-large">
                    <span className="icon is-small">
                      <i className="fas fa-heading"> </i>
                    </span>
                  </a>
                  <a className="button is-large">
                    <span className="icon is-medium">
                      <i className="fas fa-heading fa-lg"> </i>
                    </span>
                  </a>
                  <a className="button is-large">
                    <span className="icon is-large">
                      <i className="fas fa-heading fa-2x"> </i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="content">
            <h1 className="title"> Content </h1>
            <hr />
            <div className="content">
              <h1> Hello World </h1>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida, nulla nunc varius
                lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
                dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis
                neque.{' '}
              </p>
              <h2> Second level </h2>
              <p>
                {' '}
                Curabitur accumsan turpis pharetra{' '}
                <strong> augue tincidunt </strong> blandit. Quisque condimentum
                maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
                vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
                rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
                neque nisl.{' '}
              </p>
              <ul>
                <li>
                  {' '}
                  In fermentum leo eu lectus mollis, quis dictum mi aliquet.{' '}
                </li>
                <li>
                  {' '}
                  Morbi eu nulla lobortis, lobortis est in, fringilla felis.{' '}
                </li>
                <li>
                  {' '}
                  Aliquam nec felis in sapien venenatis viverra fermentum nec
                  lectus.{' '}
                </li>
                <li> Ut non enim metus. </li>
              </ul>
              <h3> Third level </h3>
              <p>
                {' '}
                Quisque ante lacus, malesuada ac auctor vitae, congue
                <a href="#"> non ante </a>. Phasellus lacus ex, semper ac tortor
                nec, fringilla condimentum orci. Fusce eu rutrum tellus.{' '}
              </p>
              <ol>
                <li> Donec blandit a lorem id convallis. </li>
                <li> Cras gravida arcu at diam gravida gravida. </li>
                <li> Integer in volutpat libero. </li>
                <li> Donec a diam tellus. </li>
                <li> Aenean nec tortor orci. </li>
                <li>
                  {' '}
                  Quisque aliquam cursus urna, non bibendum massa viverra eget.{' '}
                </li>
                <li> Vivamus maximus ultricies pulvinar. </li>
              </ol>
              <blockquote>
                {' '}
                Ut venenatis, nisl scelerisque sollicitudin fermentum, quam
                libero hendrerit ipsum, ut blandit est tellus sit amet turpis.{' '}
              </blockquote>
              <p>
                {' '}
                Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et{' '}
                <em> justo sodales </em> elementum. Maecenas ultrices lacus quis
                neque consectetur, et lobortis nisi molestie.{' '}
              </p>
              <p>
                {' '}
                Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi.
                Donec mattis vulputate risus in luctus. Maecenas vestibulum
                interdum commodo.{' '}
              </p>
              <p>
                {' '}
                Suspendisse egestas sapien non felis placerat elementum. Morbi
                tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
                Nulla facilisi. Nullam ac erat ante.{' '}
              </p>
              <h4> Fourth level </h4>
              <p>
                {' '}
                Nulla efficitur eleifend nisi, sit amet bibendum sapien
                fringilla ac. Mauris euismod metus a tellus laoreet, at
                elementum ex efficitur.{' '}
              </p>
              <p>
                {' '}
                Maecenas eleifend sollicitudin dui faucibus sollicitudin augue
                cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est
                maximus est porta condimentum in eu justo. Nulla id iaculis
                sapien.{' '}
              </p>
              <table>
                <thead>
                  <tr>
                    <th> One </th>
                    <th> Two </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Three </td>
                    <td> Four </td>
                  </tr>
                  <tr>
                    <td> Five </td>
                    <td> Six </td>
                  </tr>
                  <tr>
                    <td> Seven </td>
                    <td> Eight </td>
                  </tr>
                  <tr>
                    <td> Nine </td>
                    <td> Ten </td>
                  </tr>
                  <tr>
                    <td> Eleven </td>
                    <td> Twelve </td>
                  </tr>
                </tbody>
              </table>
              <p>
                {' '}
                Phasellus porttitor enim id metus volutpat ultricies. Ut nisi
                nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
                lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula
                sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
                mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac
                posuere est. Nunc ultricies nunc neque, vitae ultricies ex
                sodales quis. Aliquam eu nibh in libero accumsan pulvinar.
                Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
                Proin tempor cursus nisl vel condimentum. Nam pharetra varius
                metus non pellentesque.{' '}
              </p>
              <h5> Fifth level </h5>
              <p>
                {' '}
                Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed
                tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
                ligula mi, in luctus elit volutpat porta. Phasellus molestie
                diam vel nisi sodales, a eleifend augue laoreet. Sed nec
                eleifend justo. Nam et sollicitudin odio.{' '}
              </p>
              <h6> Sixth level </h6>
              <p>
                {' '}
                Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec
                pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
                Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus
                nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
                Nunc vitae maximus purus, nec consectetur dui. Suspendisse
                euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed
                varius sapien odio vitae est. Etiam at cursus metus.{' '}
              </p>
            </div>
          </section>

          <hr />
        </div>
      </div>
    </>
  )
}

ReactDOM.render(<BootSwatchApp />, document.getElementById('root'))
