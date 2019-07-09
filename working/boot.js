/* eslint-disable spellcheck/spell-checker */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'

import { AutoComplete } from '../src/autocomplete'
import { Box } from '../src/box'
import { Breadcrumb, BreadcrumbItem } from '../src/breadcrumb'
import { Button, Buttons } from '../src/button'
import {
  Card,
  CardBody,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardImage,
  CardImageContainer,
} from '../src/card'
import { Column, Columns, FullColumn } from '../src/columns'
import { Container } from '../src/container'
import { Content } from '../src/content'
import { Control } from '../src/control'
import { Delete } from '../src/delete'
import {
  DropDown,
  DropDownItem,
  DropDownMenu,
  DropDownDivider,
} from '../src/dropdown'
import { Field } from '../src/field'
import { Footer } from '../src/footer'
import { Heading } from '../src/heading'
import { Hero, HeroBody, HeroFooter, HeroHead } from '../src/hero'
import { Icon, BaseIcon } from '../src/icon'
import { Image } from '../src/image'
import { Level, LevelItem, LevelLeft, LevelRight } from '../src/level'
import {
  MediaContent,
  MediaLeft,
  MediaObject,
  MediaRight,
} from '../src/media-object'
import { Menu, MenuLabel, MenuList, MenuListItem } from '../src/menu'
import { MessageHeader, MessageBody, Message } from '../src/message'
import {
  useToggle,
  Modal,
  ModalCardHead,
  ModalCardBody,
  ModalCard,
  ModalCardFoot,
  ModalContext,
} from '../src/modal'
import {
  NavBar,
  NavBarBrand,
  NavBarDivider,
  NavBarDropDown,
  NavBarEnd,
  NavBarItem,
  NavBarStart,
  NavBarMenu,
} from '../src/navbar'
import { Notification } from '../src/notification'
import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '../src/pagination'
import { Panel, PanelBlock, PanelTabs } from '../src/panel'
import { Section } from '../src/section'
import { SubTitle } from '../src/subtitle'
import { Table } from '../src/table'
import { Tabs, TabItem, TabList } from '../src/tabs'
import { Tag, Tags } from '../src/tag'
import { Tile } from '../src/tile'
import { Title } from '../src/title'
export const BootSwatchApp = () => {
  const [sheet, setSheet] = useState('slate')
  const [ val, setVal] = useState('')
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
                          <i className="fas fa-reply"> </i>{' '}
                        </span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small">
                          {' '}
                          <i className="fas fa-retweet"> </i>{' '}
                        </span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small">
                          {' '}
                          <i className="fas fa-heart"> </i>{' '}
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

          <section className="section" id="delete">
            <h1 className="title"> Delete </h1>
            <hr />
            <div className="block">
              <span className="tag is-success">
                {' '}
                Hello World
                <button className="delete is-small"> </button>
              </span>
              <a className="delete is-small"> </a>
              <a className="delete"> </a>
              <a className="delete is-medium"> </a>
              <a className="delete is-large"> </a>
            </div>
            <div className="notification is-danger">
              <button className="delete"> </button> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit lorem ipsum dolor sit amet,
              consectetur adipiscing elit{' '}
            </div>
            <article className="message is-info">
              <div className="message-header">
                {' '}
                Info
                <button className="delete"> </button>
              </div>
              <div className="message-body">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
                Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
                purus diam, et dictum felis venenatis efficitur. Aenean ac
                eleifend lacus, in mollis lectus. Donec sodales, arcu et
                sollicitudin porttitor, tortor urna tempor ligula, id porttitor
                mi magna a neque. Donec dui urna, vehicula et sem eget,
                facilisis sodales sem.{' '}
              </div>
            </article>
          </section>


          <section className="section" id="form">
            <h1 className="title"> Form </h1>
            <hr />
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Name</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Text input" onChange={setVal}  value={val} />
                  </p>
                </div>
                <div className="field">
                  <label className="label">Username</label>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="text" placeholder="Text input" value="bulma" onChange={setVal} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                  <p className="help is-success">This username is available</p>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="text" placeholder="Email input" value="hello@ " onChange={setVal} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-warning"></i>
                    </span>
                  </p>
                  <p className="help is-danger">This email is invalid</p>
                </div>
                <div className="field">
                  <label className="label">Subject</label>
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <p className="control">
                    <textarea className="textarea" placeholder="Textarea" defaultValue="" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label className="checkbox">
                      <input type="checkbox" /> I agree to the
                      <a href="#">terms and conditions</a>
                    </label>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label className="radio">
                      <input type="radio" name="question" /> Yes
                    </label>
                    <label className="radio">
                      <input type="radio" name="question" /> No
                    </label>
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <button className="button is-primary">Submit</button>
                  </p>
                  <p className="control">
                    <button className="button is-link">Cancel</button>
                  </p>
                </div>
                <br />
                <h4 className="subtitle"> Disabled </h4>
                <hr />
                <div className="field">
                  <p className="control">
                    <input className="input" disabled="" placeholder="Disabled input" type="text" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" disabled="" placeholder="Disabled textarea" defaultValue="" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label className="checkbox is-disabled">
                      <input disabled="" type="checkbox" /> Remember me
                    </label>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label className="radio is-disabled">
                      <input disabled="" name="question" type="radio" /> Yes
                    </label>
                    <label className="radio is-disabled">
                      <input disabled="" name="question" type="radio" /> No
                    </label>
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <button className="button is-primary" disabled=""> Submit </button>
                  </p>
                  <p className="control">
                    <button className="button" disabled=""> Cancel </button>
                  </p>
                </div>
                <br />
                <h3 className="title"> Horizontal Form </h3>
                <hr />
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">From</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-grouped">
                      <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" placeholder="Name" />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fas fa-check"></i>
                        </span>
                      </p>
                      <p className="help is-success">This email is correct</p>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Department</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select>
                            <option>Business development</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Already a member?</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <label className="radio">
                          <input type="radio" name="member" /> Yes
                        </label>
                        <label className="radio">
                          <input type="radio" name="member" /> No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Subject</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"
                          style={{
                            backgroundImage: 'url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'scroll',
                            backgroundSize: '16px 18px',
                            backgroundPosition: '98% 50%'
                            }} autoComplete="off" />
                      </div>
                      <p className="help is-danger">
                        This field is required
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Question</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <textarea className="textarea" placeholder="Explain how we can help you" defaultValue="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label">
                    {' '}
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <button className="button is-primary">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <h3 className="title">File</h3>
                <hr />
                <div className="field">
                  <div className="file">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                          Choose a file…
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="file has-name">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                          Choose a file…
                        </span>
                      </span>
                      <span className="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                      </span>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="file is-primary">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                          Primary file…
                        </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="file is-info has-name">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                          Info file…
                        </span>
                      </span>
                      <span className="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                      </span>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="file is-warning is-boxed">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span className="file-label">
                          Warning file…
                        </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="file is-danger has-name is-boxed">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span className="file-label">
                          Danger file…
                        </span>
                      </span>
                      <span className="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="column">
                <br />
                <h3 className="subtitle"> Styles </h3>
                <hr />
                <div className="field">
                  <p className="control">
                    <input className="input is-rounded" type="text" placeholder="Rounded input" />
                  </p>
                </div>
                <br />
                <h3 className="subtitle"> Colors </h3>
                <hr />
                <div className="field">
                  <p className="control">
                    <input className="input is-primary" type="text" placeholder="Primary input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-info" type="text" placeholder="Info input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-success" type="text" placeholder="Success input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-warning" type="text" placeholder="Warning input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-danger" type="text" placeholder="Danger input" />
                  </p>
                </div>
                <br />
                <h3 className="subtitle"> Sizes </h3>
                <hr />
                <div className="field">
                  <p className="control">
                    <input className="input is-small" type="text" placeholder="Small input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" placeholder="Normal input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-medium" type="text" placeholder="Medium input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-large" type="text" placeholder="Large input" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <span className="select is-small">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <span className="select is-medium">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <span className="select is-large">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="label is-small">Small input</label>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-small" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="label">Normal input</label>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="label is-medium">Medium input</label>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-medium" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-medium" type="email" placeholder="Email" />
                    <span className="icon is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-medium" type="email" placeholder="Email" />
                    <span className="icon is-medium is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-medium is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="label is-large">Large input</label>
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="email" placeholder="Email" />
                    <span className="icon is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="email" placeholder="Email" />
                    <span className="icon is-medium is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-medium is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="email" placeholder="Email" />
                    <span className="icon is-large is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-large is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <br />
                <h4 className="subtitle"> With Font Awesome icons </h4>
                <hr />
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"
                      style={{
                        backgroundImage: 'url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll',
                        backgroundSize: '16px 18px',
                        backgroundPosition: '98% 50%'}}
                        autoComplete="off" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-success">
                      Login
                    </button>
                  </p>
                </div>
                <br />
                <h3 className="title"> Form addons </h3>
                <hr />
                <div className="field has-addons">
                  <p className="control">
                    <input className="input" type="text" placeholder="Find a repository" />
                  </p>
                  <p className="control">
                    <a className="button is-info">
                      Search
                    </a>
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control">
                    <input className="input is-large" type="text" placeholder="Find a repository" />
                  </p>
                  <p className="control">
                    <a className="button is-info is-large">
                      Search
                    </a>
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input className="input" type="text" placeholder="Amount of money" />
                  </p>
                  <p className="control">
                    <a className="button">
                      Transfer
                    </a>
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>$</option>
                        <option>£</option>
                        <option>€</option>
                      </select>
                    </span>
                  </p>
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Amount of money" />
                  </p>
                  <p className="control">
                    <a className="button">
                      Transfer
                    </a>
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control is-expanded">
                    <span className="select is-fullwidth">
                      <select name="country">
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <button type="submit" className="button is-primary">Choose</button>
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Find a repository" />
                  </p>
                  <p className="control">
                    <a className="button is-info">
                      Search
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="icon">
            <h1 className="title"> Icons </h1>
            <hr />
            <span className="icon is-small"> <i className="fas fa-home"> </i> </span>
            <span className="icon"> <i className="fas fa-home"> </i> </span>
            <span className="icon is-medium"> <i className="fas fa-home"> </i> </span>
            <span className="icon is-large"> <i className="fas fa-home"> </i> </span>
          </section>



          <section className="section" id="images">
            <h1 className="title"> Images </h1>
            <hr />
            <figure className="image is-128x128"> <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
            </figure>
          </section>


          <section className="section" id="notifications">
            <h1 className="title"> Notifications </h1>
            <hr />
            <div className="columns is-multiline">

              <div className="column is-half">
                <div className="notification ">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

              <div className="column is-half">
                <div className="notification is-primary">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

              <div className="column is-half">
                <div className="notification is-link">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

              <div className="column is-half">
                <div className="notification is-info">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

              <div className="column is-half">
                <div className="notification is-success">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

              <div className="column is-half">
                <div className="notification is-warning">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

              <div className="column is-half">
                <div className="notification is-danger">
                  <button className="delete"> </button> Lorem ipsum dolor sit amet,
                  <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>

            </div>
          </section>

          <section className="section" id="progress">
            <h1 className="title"> Progress bars </h1>
            <hr />

            <progress className="progress " max="100" value="15"> 15% </progress>

            <progress className="progress is-primary" max="100" value="15"> 15% </progress>

            <progress className="progress is-link" max="100" value="15"> 15% </progress>

            <progress className="progress is-info" max="100" value="15"> 15% </progress>

            <progress className="progress is-success" max="100" value="15"> 15% </progress>

            <progress className="progress is-warning" max="100" value="15"> 15% </progress>

            <progress className="progress is-danger" max="100" value="15"> 15% </progress>

            <progress className="progress is-small" max="100" value="15"> 15% </progress>
            <progress className="progress" max="100" value="30"> 30% </progress>
            <progress className="progress is-medium" max="100" value="45"> 45% </progress>
            <progress className="progress is-large" max="100" value="60"> 60% </progress>
          </section>

          <section className="section" id="table">
            <h1 className="title"> Table </h1>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <abbr title="Position"> Pos </abbr>
                  </th>
                  <th> Team </th>
                  <th>
                    <abbr title="Played"> Pld </abbr>
                  </th>
                  <th>
                    <abbr title="Won"> W </abbr>
                  </th>
                  <th>
                    <abbr title="Drawn"> D </abbr>
                  </th>
                  <th>
                    <abbr title="Lost"> L </abbr>
                  </th>
                  <th>
                    <abbr title="Goals for"> GF </abbr>
                  </th>
                  <th>
                    <abbr title="Goals against"> GA </abbr>
                  </th>
                  <th>
                    <abbr title="Goal difference"> GD </abbr>
                  </th>
                  <th>
                    <abbr title="Points"> Pts </abbr>
                  </th>
                  <th> Qualification or relegation </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>
                    <abbr title="Position"> Pos </abbr>
                  </th>
                  <th> Team </th>
                  <th>
                    <abbr title="Played"> Pld </abbr>
                  </th>
                  <th>
                    <abbr title="Won"> W </abbr>
                  </th>
                  <th>
                    <abbr title="Drawn"> D </abbr>
                  </th>
                  <th>
                    <abbr title="Lost"> L </abbr>
                  </th>
                  <th>
                    <abbr title="Goals for"> GF </abbr>
                  </th>
                  <th>
                    <abbr title="Goals against"> GA </abbr>
                  </th>
                  <th>
                    <abbr title="Goal difference"> GD </abbr>
                  </th>
                  <th>
                    <abbr title="Points"> Pts </abbr>
                  </th>
                  <th> Qualification or relegation </th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <th> 1 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C."> Leicester City </a> <strong> (C) </strong> </td>
                  <td> 38 </td>
                  <td> 23 </td>
                  <td> 12 </td>
                  <td> 3 </td>
                  <td> 68 </td>
                  <td> 36 </td>
                  <td> +32 </td>
                  <td> 81 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League"> Champions League group stage </a>
                  </td>
                </tr>
                <tr>
                  <th> 2 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C."> Arsenal </a>
                  </td>
                  <td> 38 </td>
                  <td> 20 </td>
                  <td> 11 </td>
                  <td> 7 </td>
                  <td> 65 </td>
                  <td> 36 </td>
                  <td> +29 </td>
                  <td> 71 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League"> Champions League group stage </a>
                  </td>
                </tr>
                <tr>
                  <th> 3 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C."> Tottenham Hotspur </a>
                  </td>
                  <td> 38 </td>
                  <td> 19 </td>
                  <td> 13 </td>
                  <td> 6 </td>
                  <td> 69 </td>
                  <td> 35 </td>
                  <td> +34 </td>
                  <td> 70 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League"> Champions League group stage </a>
                  </td>
                </tr>
                <tr>
                  <th> 4 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C."> Manchester City </a>
                  </td>
                  <td> 38 </td>
                  <td> 19 </td>
                  <td> 9 </td>
                  <td> 10 </td>
                  <td> 71 </td>
                  <td> 41 </td>
                  <td> +30 </td>
                  <td> 66 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League"> Champions League play-off round </a>
                  </td>
                </tr>
                <tr className="is-selected">
                  <th> 5 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C."> Manchester United </a>
                  </td>
                  <td> 38 </td>
                  <td> 19 </td>
                  <td> 9 </td>
                  <td> 10 </td>
                  <td> 49 </td>
                  <td> 35 </td>
                  <td> +14 </td>
                  <td> 66 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League"> Europa League group stage </a>
                  </td>
                </tr>
                <tr>
                  <th> 6 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C."> Southampton </a>
                  </td>
                  <td> 38 </td>
                  <td> 18 </td>
                  <td> 9 </td>
                  <td> 11 </td>
                  <td> 59 </td>
                  <td> 41 </td>
                  <td> +18 </td>
                  <td> 63 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League"> Europa League group stage </a>
                  </td>
                </tr>
                <tr>
                  <th> 7 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C."> West Ham United </a>
                  </td>
                  <td> 38 </td>
                  <td> 16 </td>
                  <td> 14 </td>
                  <td> 8 </td>
                  <td> 65 </td>
                  <td> 51 </td>
                  <td> +14 </td>
                  <td> 62 </td>
                  <td> Qualification for the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League"> Europa League third qualifying round </a>
                  </td>
                </tr>
                <tr>
                  <th> 8 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C."> Liverpool </a>
                  </td>
                  <td> 38 </td>
                  <td> 16 </td>
                  <td> 12 </td>
                  <td> 10 </td>
                  <td> 63 </td>
                  <td> 50 </td>
                  <td> +13 </td>
                  <td> 60 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 9 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C."> Stoke City </a>
                  </td>
                  <td> 38 </td>
                  <td> 14 </td>
                  <td> 9 </td>
                  <td> 15 </td>
                  <td> 41 </td>
                  <td> 55 </td>
                  <td> −14 </td>
                  <td> 51 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 10 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C."> Chelsea </a>
                  </td>
                  <td> 38 </td>
                  <td> 12 </td>
                  <td> 14 </td>
                  <td> 12 </td>
                  <td> 59 </td>
                  <td> 53 </td>
                  <td> +6 </td>
                  <td> 50 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 11 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C."> Everton </a>
                  </td>
                  <td> 38 </td>
                  <td> 11 </td>
                  <td> 14 </td>
                  <td> 13 </td>
                  <td> 59 </td>
                  <td> 55 </td>
                  <td> +4 </td>
                  <td> 47 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 12 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C."> Swansea City </a>
                  </td>
                  <td> 38 </td>
                  <td> 12 </td>
                  <td> 11 </td>
                  <td> 15 </td>
                  <td> 42 </td>
                  <td> 52 </td>
                  <td> −10 </td>
                  <td> 47 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 13 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C."> Watford </a>
                  </td>
                  <td> 38 </td>
                  <td> 12 </td>
                  <td> 9 </td>
                  <td> 17 </td>
                  <td> 40 </td>
                  <td> 50 </td>
                  <td> −10 </td>
                  <td> 45 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 14 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C."> West Bromwich Albion </a>
                  </td>
                  <td> 38 </td>
                  <td> 10 </td>
                  <td> 13 </td>
                  <td> 15 </td>
                  <td> 34 </td>
                  <td> 48 </td>
                  <td> −14 </td>
                  <td> 43 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 15 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C."> Crystal Palace </a>
                  </td>
                  <td> 38 </td>
                  <td> 11 </td>
                  <td> 9 </td>
                  <td> 18 </td>
                  <td> 39 </td>
                  <td> 51 </td>
                  <td> −12 </td>
                  <td> 42 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 16 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth"> AFC Bournemouth </a>
                  </td>
                  <td> 38 </td>
                  <td> 11 </td>
                  <td> 9 </td>
                  <td> 18 </td>
                  <td> 45 </td>
                  <td> 67 </td>
                  <td> −22 </td>
                  <td> 42 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 17 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C."> Sunderland </a>
                  </td>
                  <td> 38 </td>
                  <td> 9 </td>
                  <td> 12 </td>
                  <td> 17 </td>
                  <td> 48 </td>
                  <td> 62 </td>
                  <td> −14 </td>
                  <td> 39 </td>
                  <td> </td>
                </tr>
                <tr>
                  <th> 18 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C."> Newcastle United </a> <strong> (R) </strong> </td>
                  <td> 38 </td>
                  <td> 9 </td>
                  <td> 10 </td>
                  <td> 19 </td>
                  <td> 44 </td>
                  <td> 65 </td>
                  <td> −21 </td>
                  <td> 37 </td>
                  <td> Relegation to the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship"> Football League Championship </a>
                  </td>
                </tr>
                <tr>
                  <th> 19 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C."> Norwich City </a> <strong> (R) </strong> </td>
                  <td> 38 </td>
                  <td> 9 </td>
                  <td> 7 </td>
                  <td> 22 </td>
                  <td> 39 </td>
                  <td> 67 </td>
                  <td> −28 </td>
                  <td> 34 </td>
                  <td> Relegation to the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship"> Football League Championship </a>
                  </td>
                </tr>
                <tr>
                  <th> 20 </th>
                  <td>
                    <a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C."> Aston Villa </a> <strong> (R) </strong> </td>
                  <td> 38 </td>
                  <td> 3 </td>
                  <td> 8 </td>
                  <td> 27 </td>
                  <td> 27 </td>
                  <td> 76 </td>
                  <td> −49 </td>
                  <td> 17 </td>
                  <td> Relegation to the
                    <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship"> Football League Championship </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <table className="table is-striped">
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
            <br />
            <table className="table is-bordered">
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
              </tbody>
            </table>
            <br />
            <table className="table is-narrow">
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
            <br />
            <table className="table is-bordered is-striped is-narrow">
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
          </section>

          <section className="section" id="tag">
            <h1 className="title"> Tag </h1>
            <hr />
            <div className="tags">

              <span className="tag is-primary"> Primary </span>

              <span className="tag is-link"> Link </span>

              <span className="tag is-info"> Info </span>

              <span className="tag is-success"> Success </span>

              <span className="tag is-warning"> Warning </span>

              <span className="tag is-danger"> Danger </span>

              <span className="tag is-white"> White </span>

              <span className="tag is-black"> Black </span>

              <span className="tag is-light"> Light </span>

              <span className="tag is-dark"> Dark </span>

              <span className="tag is-primary is-medium"> Medium </span>
              <span className="tag is-info is-large"> Large </span>
              <span className="tag is-success"> Bar
                <button className="delete is-small"> </button>
              </span>
              <span className="tag is-warning is-medium"> Hello
                <button className="delete is-small"> </button>
              </span>
              <span className="tag is-danger is-large"> World
                <button className="delete"> </button>
              </span>
            </div>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">npm</span>
                  <span className="tag is-info">0.5.0</span>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">build</span>
                  <span className="tag is-success">passing</span>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">chat</span>
                  <span className="tag is-primary">on gitter</span>
                </div>
              </div>
            </div>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">Technology</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">CSS</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">Flexbox</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">Web Design</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">Open Source</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">Community</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">Documentation</a>
                  <a className="tag is-delete"></a>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="breadcrumb">
            <h1 className="title">Breadcrumb</h1>
            <hr />
            <nav className="breadcrumb">
              <ul>
                <li>
                  <a>Bulma</a>
                </li>
                <li>
                  <a>Documentation</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li className="is-active">
                  <a>Breadcrumb</a>
                </li>
              </ul>
            </nav>
          </section>

          <section className="section" id="hero">
            <h1 className="title">Hero</h1>
            <hr />

            <section className="hero ">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero1">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero1" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>
              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-primary">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero2">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero2" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>
              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-link">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero3">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero3" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>
              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-info">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero4">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero4" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>
              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-success">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero5">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero5" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>
              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-warning">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero6">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero6" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-danger">

              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero7">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero7" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-white">

              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero8">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero8" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-black">

              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero9">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero9" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-light">

              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero10">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero10" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

            <section className="hero is-dark">

              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </a>
                      <span className="navbar-burger burger" data-target="navbarMenuHero11">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHero11" className="navbar-menu">
                      <div className="navbar-end">
                        <a className="navbar-item is-active">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                              More
                            </div>
                            <div id="moreDropdown" className="navbar-dropdown ">
                              <a className="navbar-item " href="#">
                                <div className="level is-mobile">
                                  <div className="level-left">
                                    <div className="level-item">
                                      <p>
                                        <strong>Extensions</strong>
                                        <br />
                                        <small>Side projects to enhance Bulma</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        <span className="navbar-item">
                          <a className="button is-primary is-inverted">
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                  Title
                </h1>
                  <h2 className="subtitle">
                  Subtitle
                </h2>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs">
                  <div className="container">
                    <ul>
                      <li className="is-active">
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <br />

          </section>



          <section className="section" id="card">
            <h1 className="title">Cards</h1>
            <hr />
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3"> <img src="https://source.unsplash.com/random/800x600" alt="Image" /> </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image" style={{height: '40px', width: '40px'}}> <img src="https://source.unsplash.com/random/96x96" alt="Image" /> </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
                    <div className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                      <a>@bulmaio</a>.
                      <a>#css</a>
                      <a>#responsive</a>
                      <br /> <small>11:09 PM - 1 Jan 2016</small> </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title"> Component </p>
                    <a className="card-header-icon">
                      <span className="icon"> <i className="fa fa-angle-down"></i> </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                      <a>@bulmaio</a>.
                      <a>#css</a>
                      <a>#responsive</a>
                      <br /> <small>11:09 PM - 1 Jan 2016</small> </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
              </div>
            </div>
          </section>




          <section className="section" id="dropdown">
            <h1 className="title">Dropdown</h1>
            <hr />
            <div className="columns">
              <div className="column">
                <div className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span>Dropdown button</span>
                      <span className="icon is-small">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        Dropdown item
                      </a>
                      <a className="dropdown-item">
                        Other dropdown item
                      </a>
                      <a href="#" className="dropdown-item is-active">
                        Active dropdown item
                      </a>
                      <a href="#" className="dropdown-item">
                        Other dropdown item
                      </a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        With a divider
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <button className="button is-info" aria-haspopup="true" aria-controls="dropdown-menu2">
                      <span>Content</span>
                      <span className="icon is-small">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                      </div>
                      <hr className="dropdown-divider" />
                      <div className="dropdown-item">
                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                      </div>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">
                        This is a link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="level">
            <h1 className="title">Level</h1>
            <hr />
            {/* Main container */ }
            <nav className="level">
              {/* Left side */ }
              <div className="level-left">
                <div className="level-item">
                  <p className="subtitle is-5"> <strong>123</strong> posts </p>
                </div>
                <div className="level-item">
                  <div className="field has-addons">
                    <p className="control">
                      <input className="input" type="text" placeholder="Find a post" />
                    </p>
                    <p className="control">
                      <button className="button">
                        Search
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              {/* Right side */ }
              <div className="level-right">
                <p className="level-item"><strong>All</strong></p>
                <p className="level-item">
                  <a>Published</a>
                </p>
                <p className="level-item">
                  <a>Drafts</a>
                </p>
                <p className="level-item">
                  <a>Deleted</a>
                </p>
                <p className="level-item">
                  <a className="button is-success">New</a>
                </p>
              </div>
            </nav>
            <hr />
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Tweets</p>
                  <p className="title">3,456</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Following</p>
                  <p className="title">123</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Followers</p>
                  <p className="title">456K</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Likes</p>
                  <p className="title">789</p>
                </div>
              </div>
            </nav>
            <hr />
            <nav className="level">
              <p className="level-item has-text-centered">
                <a className="link is-info">Home</a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info">Menu</a>
              </p>
              <p className="level-item has-text-centered"> <img src="http://bulma.io/images/bulma-type.png" alt="" style={{height: '30px'}} /> </p>
              <p className="level-item has-text-centered">
                <a className="link is-info">Reservations</a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info">Contact</a>
              </p>
            </nav>
            <hr />
            <nav className="level is-mobile">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Tweets</p>
                  <p className="title">3,456</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Following</p>
                  <p className="title">123</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Followers</p>
                  <p className="title">456K</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Likes</p>
                  <p className="title">789</p>
                </div>
              </div>
            </nav>
            <hr />
          </section>

          <section className="section" id="media">
            <h1 className="title">Media Object</h1>
            <hr />
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <a className="level-item">
                      <span className="icon is-small"><i className="fas fa-reply"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fas fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className="media-right">
                <button className="delete"></button>
              </div>
            </article>
            <hr />
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
                </p>
              </figure>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Add a comment..." defaultValue=""></textarea>
                  </p>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <a className="button is-info">Post comment</a>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <label className="checkbox">
                        <input type="checkbox" /> Press enter to submit
                      </label>
                    </div>
                  </div>
                </nav>
              </div>
            </article>
            <hr />
            <h4 className="subtitle">Nesting</h4>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Barbara Middleton</strong>
                    <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                  </p>
                </div>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src="http://bulma.io/images/placeholders/96x96.png" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Sean Brown</strong>
                        <br /> Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                        <br />
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                      </p>
                    </div>
                    <article className="media">
                      Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                    </article>
                    <article className="media">
                      Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                    </article>
                  </div>
                </article>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src="http://bulma.io/images/placeholders/96x96.png" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Kayli Eunice </strong>
                        <br /> Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                        <br />
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
                </p>
              </figure>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Add a comment..." defaultValue=""></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button">Post comment</button>
                  </p>
                </div>
              </div>
            </article>
          </section>


          <section className="section" id="menu">
            <h1 className="title">Menu</h1>
            <hr />
            <div className="column is-3">
              <aside className="menu">
                <p className="menu-label">
                  General
                </p>
                <ul className="menu-list">
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a>Customers</a>
                  </li>
                </ul>
                <p className="menu-label">
                  Administration
                </p>
                <ul className="menu-list">
                  <li>
                    <a>Team Settings</a>
                  </li>
                  <li>
                    <a className="is-active">Manage Your Team</a>
                    <ul>
                      <li>
                        <a>Members</a>
                      </li>
                      <li>
                        <a>Plugins</a>
                      </li>
                      <li>
                        <a>Add a member</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Invitations</a>
                  </li>
                  <li>
                    <a>Cloud Storage Environment Settings</a>
                  </li>
                  <li>
                    <a>Authentication</a>
                  </li>
                </ul>
                <p className="menu-label">
                  Transactions
                </p>
                <ul className="menu-list">
                  <li>
                    <a>Payments</a>
                  </li>
                  <li>
                    <a>Transfers</a>
                  </li>
                  <li>
                    <a>Balance</a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>


          <section className="section" id="message">
            <h1 className="title">Message</h1>
            <hr />
            <div className="columns is-multiline">

              <div className="column is-half">
                <article className="message ">
                  <div className="message-header">
                    <p>

                      Message

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-primary">
                  <div className="message-header">
                    <p>

                      Primary

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-link">
                  <div className="message-header">
                    <p>

                      Link

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-info">
                  <div className="message-header">
                    <p>

                      Info

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-success">
                  <div className="message-header">
                    <p>

                      Success

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-warning">
                  <div className="message-header">
                    <p>

                      Warning

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-danger">
                  <div className="message-header">
                    <p>

                      Danger

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-white">
                  <div className="message-header">
                    <p>

                      White

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-black">
                  <div className="message-header">
                    <p>

                      Black

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-light">
                  <div className="message-header">
                    <p>

                      Light

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

              <div className="column is-half">
                <article className="message is-dark">
                  <div className="message-header">
                    <p>

                      Dark

                    </p>
                    <button className="delete"></button>
                  </div>
                  <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
                  </div>
                </article>
              </div>

            </div>
          </section>

          <section className="section" id="modal">
            <h1 className="title">Modal</h1>
            <hr />
            <a className="button is-primary is-large" data-target="#myModal">Launch example modal</a>
            <div className="modal" id="myModal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Modal title</p>
                  <button className="delete"></button>
                </header>
                <section className="modal-card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </section>
                <footer className="modal-card-foot">
                  <a className="button is-primary">Save changes</a>
                  <a className="button">Cancel</a>
                </footer>
              </div>
            </div>
          </section>



          <section className="section" id="navbar">
            <h1 className="title">Navbar</h1>
            <hr />

            <nav className="navbar ">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample1" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-primary">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon" style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon" style={{color: '#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample2">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample2" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-link">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon" style={{color: '#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon" style={{color: '#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample3">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample3" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-info">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon" style={{color: '#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon" style={{color: '#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample4">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample4" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-success">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample5">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample5" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-warning">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample6">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample6" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-danger">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample7">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample7" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-white">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample8">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample8" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-black">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample9">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample9" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-light">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample10">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample10" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <nav className="navbar is-dark">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExample11">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExample11" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Modifiers
                      </a>
                      <a className="navbar-item " href="#">
                        Grid
                      </a>
                      <a className="navbar-item " href="#">
                        Form
                      </a>
                      <a className="navbar-item " href="#">
                        Elements
                      </a>
                      <a className="navbar-item is-active" href="#">
                        Components
                      </a>
                      <a className="navbar-item " href="#">
                        Layout
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="#blog/">
                      Blog
                    </a>
                    <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
                      <a className="navbar-item" href="/2017/03/10/new-field-element/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">10 Mar 2017</small>
                          </p>
                          <p>New field element (for better controls)</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">11 Apr 2016</small>
                          </p>
                          <p>Metro UI CSS grid with Bulma tiles</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">09 Feb 2016</small>
                          </p>
                          <p>Blog launched, new responsive columns, new helpers</p>
                        </div>
                      </a>
                      <a className="navbar-item" href="#blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a className="button is-rss is-small" href="#atom.xml">
                                  <span className="icon is-small">
                                    <i className="fa fa-rss"></i>
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      More
                    </div>
                    <div id="moreDropdown" className="navbar-dropdown ">
                      <a className="navbar-item " href="#extensions/">
                        <div className="level is-mobile">
                          <div className="level-left">
                            <div className="level-item">
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <a className="navbar-item" href="https://twitter.com/jgthms" target="_blank">
                    Twitter
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br />

            <h2 className="subtitle">Transparent</h2>
            <nav className="navbar is-transparent">
              <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                  <span className="icon"style={{color:'#333'}}>
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
                  <span className="icon"style={{color:'#55acee'}}>
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <div className="navbar-burger burger" data-target="navMenuExamplet">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenuExamplet" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item " href="#">
                    Home
                  </a>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                      Docs
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <a className="navbar-item " href="#">
                        Overview
                      </a>
                      <a className="navbar-item " href="#">
                        Discover
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>version
                          <p className="has-text-info is-size-6-desktop">0.4.3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                    Github
                  </a>
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a id="twitter" className="button">
                          <span>Tweet</span>
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                          <span className="icon">
                            <i className="fa fa-download"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </section>






          <section className="section" id="pagination">
            <h1 className="title">Pagination</h1>
            <hr />
            <nav className="pagination">
              <a className="pagination-previous is-disabled">Previous</a>
              <a className="pagination-next">Next page</a>
              <ul className="pagination-list">
                <li>
                  <a className="pagination-link">1</a>
                </li>
                <li>
                  <span className="pagination-ellipsis">…</span>
                </li>
                <li>
                  <a className="pagination-link">45</a>
                </li>
                <li>
                  <a className="pagination-link is-current">46</a>
                </li>
                <li>
                  <a className="pagination-link">47</a>
                </li>
                <li>
                  <span className="pagination-ellipsis">…</span>
                </li>
                <li>
                  <a className="pagination-link">86</a>
                </li>
              </ul>
            </nav>
            <br />
            <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
              <a className="pagination-previous">Previous</a>
              <a className="pagination-next">Next page</a>
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                <li><span className="pagination-ellipsis">…</span></li>
                <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                <li><span className="pagination-ellipsis">…</span></li>
                <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
              </ul>
            </nav>
          </section>




          <section className="section" id="panel">
            <h1 className="title">Panel</h1>
            <hr />
            <div className="column is-4">
              <nav className="panel">
                <p className="panel-heading"> Repositories </p>
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input className="input is-small" type="text" placeholder="Search" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-search"></i>
                    </span>
                  </p>
                </div>
                <p className="panel-tabs">
                  <a className="is-active">All</a>
                  <a>Public</a>
                  <a>Private</a>
                  <a>Sources</a>
                  <a>Forks</a>
                </p>
                <a className="panel-block is-active">
                  <span className="panel-icon"> <i className="fa fa-book"></i> </span> bulma </a>
                <a className="panel-block">
                  <span className="panel-icon"> <i className="fa fa-book"></i> </span> marksheet </a>
                <a className="panel-block">
                  <span className="panel-icon"> <i className="fa fa-book"></i> </span> minireset.css </a>
                <a className="panel-block">
                  <span className="panel-icon"> <i className="fa fa-book"></i> </span> jgthms.github.io </a>
                <a className="panel-block">
                  <span className="panel-icon"> <i className="fa fa-code-fork"></i> </span> daniellowtw/infBoard </a>
                <a className="panel-block">
                  <span className="panel-icon"> <i className="fa fa-code-fork"></i> </span> mojs </a>
                <label className="panel-block">
                  <input type="checkbox" /> Remember me </label>
                <div className="panel-block">
                  <button className="button is-primary is-outlined is-fullwidth"> Reset all filters </button>
                </div>
              </nav>
            </div>
          </section>


          <section className="section" id="tabs">
            <h1 className="title">Tabs</h1>
            <hr />
            <div className="tabs">
              <ul>
                <li className="is-active">
                  <a>Pictures</a>
                </li>
                <li>
                  <a>Music</a>
                </li>
                <li>
                  <a>Videos</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-centered">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                    <span>Pictures</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-music"></i></span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                    <span>Videos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-small">
              <ul>
                <li className="is-active">
                  <a>Pictures</a>
                </li>
                <li>
                  <a>Music</a>
                </li>
                <li>
                  <a>Videos</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-medium">
              <ul>
                <li className="is-active">
                  <a>Pictures</a>
                </li>
                <li>
                  <a>Music</a>
                </li>
                <li>
                  <a>Videos</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-large">
              <ul>
                <li className="is-active">
                  <a>Pictures</a>
                </li>
                <li>
                  <a>Music</a>
                </li>
                <li>
                  <a>Videos</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-boxed">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                    <span>Pictures</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-music"></i></span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                    <span>Videos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-toggle">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                    <span>Pictures</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-music"></i></span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                    <span>Videos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-toggle is-toggle-rounded">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                    <span>Pictures</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-music"></i></span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                    <span>Videos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-fullwidth">
              <ul>
                <li>
                  <a>
                    <span className="icon"><i className="fa fa-angle-left"></i></span>
                    <span>Left</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon"><i className="fa fa-angle-up"></i></span>
                    <span>Up</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Right</span>
                    <span className="icon"><i className="fa fa-angle-right"></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-centered is-boxed">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                    <span>Pictures</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-music"></i></span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                    <span>Videos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="tabs is-toggle is-fullwidth is-large">
              <ul>
                <li className="is-active">
                  <a>
                    <span className="icon"><i className="fa fa-image"></i></span>
                    <span>Pictures</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon"><i className="fa fa-music"></i></span>
                    <span>Music</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon"><i className="fa fa-film"></i></span>
                    <span>Videos</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon"><i className="fa fa-file-text-o"></i></span>
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>




        </div>
      </div>
    </>
  )
}

ReactDOM.render(<BootSwatchApp />, document.getElementById('root'))
