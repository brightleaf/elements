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

export const KanbanTemplate = () => {
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
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
              />
            </a>
            <div className="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Account</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Dashboard</a>
                  <a className="navbar-item">Profile</a>
                  <a className="navbar-item">Settings</a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <div className="control has-icons-left has-icons-right">
                    <input className="input is-large" type="search" />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-search"></i>
                    </span>
                    <span className="icon is-medium is-right">
                      <i className="fa fa-empire"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="box cta">
        <div className="columns is-mobile is-centered">
          <div className="field is-grouped is-grouped-multiline">
            <div className="control">
              <span className="tag is-link is-large">Link</span>
            </div>
            <div className="control">
              <span className="tag is-success is-large">Success</span>
            </div>
            <div className="control">
              <span className="tag is-black is-large">Black</span>
            </div>
            <div className="control">
              <span className="tag is-warning is-large">Warning</span>
            </div>
            <div className="control">
              <span className="tag is-danger is-large">Danger</span>
            </div>
            <div className="control">
              <span className="tag is-info is-large">Info</span>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="level-item">
          <div
            className="columns is-multiline is-centered cards-container"
            id="sectioncontainer"
          >
            <div className="column is-narrow">
              <article className="message is-black">
                <div className="message-header">
                  <p>Season 1</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>The Fort</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Fist Like a bullet</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>White Stork Spreads Wings</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Two Tigers Subdue Dragons</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Snake Creeps Down</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Hand of Five Poisons</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-narrow">
              <article className="message is-primary">
                <div className="message-header">
                  <p>Season 2</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Tiger Pushes Mountain</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Force of Eagle's Claw</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Red Sun, Silver Moon</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Palm of the Iron Fox</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Monkey Leaps Through Mist</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Leopard Stalks in Snow</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Black Heart, White Mountain</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Sting of the Scorpion's Tail</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Nightingale Sings No More</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Wolf's Breath, Dragon Fire</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-narrow">
              <article className="message is-link">
                <div className="message-header">
                  <p>Season 3</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Enter the Phoenix</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Moon Rises, Raven Seeks</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Leopard Snares Rabbit</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Blind Cannibal Assassins</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Carry Tiger to Mountain</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Black Wind Howls</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Dragonfly's Last Dance</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Leopard Catches Cloud</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Chamber of the Scorpion</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Raven's Feather, Phoenix Blood</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>The Boar And The Butterfly</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Cobra Fang, Panther Claw</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Black Lothus, White Rose</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Curse of the Red Rain</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Requiem for the Fallen</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Seven Strike as One</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-narrow">
              <article className="message is-info">
                <div className="message-header">
                  <p>Info</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Bronchy</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Aorta</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Alveolae</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>TALISMAN</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-narrow">
              <article className="message is-success">
                <div className="message-header">
                  <p>Success</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>signature</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>weasel</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>solana</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>hydro</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-narrow">
              <article className="message is-warning">
                <div className="message-header">
                  <p>Warning</p>
                  <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Ganimede</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Europa</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Tycho</span>
                    </div>
                  </div>
                  <div className="board-item">
                    <div className="board-item-content">
                      <span>Io</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div className="columns is-mobile is-centered">
        <div className="column is-half is-narrow"></div>
      </div>
      <footer>
        <div className="box cta">
          <div className="columns is-mobile is-centered">
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <a
                    className="tag is-link"
                    href="https://github.com/dansup/bulma-templates"
                  >
                    Bulma Templates
                  </a>
                  <span className="tag is-light">Daniel Supernault</span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons">
                  <a className="tag is-link">The source code is licensed</a>
                  <span className="tag is-light">
                    MIT <i className="fa fa-github"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default KanbanTemplate
