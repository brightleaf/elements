import React, { useState } from 'react'
import classnames from 'classnames'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'
import { useGet } from '@brightleaf/react-hooks/lib/use-get'
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
  Control,
  Field,
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
  NavBarBurger,
  NavBarDropDown,
  NavBarItem,
  NavBarDivider,
  Icon,
  Tile,
  Title,
  SubTitle,
  Tag,
  Tabs,
  TabItem,
} from '../../src/'

const MessageCard = ({ active, ...msg }) => {
  return (
    <Card onClick={msg.onClick} className={active ? 'active' : ''}>
      <CardBody>
        <div className="msg-header">
          <span className="msg-from">
            <small>From: {msg.from}</small>
          </span>
          <span className="msg-timestamp">
            {new Date(msg.timestamp).toDateString()}
          </span>
          <span className="msg-attachment">
            <i className="fa fa-paperclip"></i>
          </span>
        </div>
        <div className="msg-subject">
          <span className="msg-subject">
            <strong>{msg.subject}</strong>
          </span>
        </div>
        <div className="msg-snippet">
          <p>{msg.snippet}</p>
        </div>
      </CardBody>
    </Card>
  )
}
export const InboxTemplate = () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('inbox.css')
  useScript('font-awesome.js')
  const [message, setMessage] = useState({
    from: '',
    timestamp: null,
    subject: '',
    snippet: '',
    fullMail: '',
    email: '',
    picked: true,
  })

  const { data, error, loading, getUrl } = useGet(
    'https://kev-pi.herokuapp.com/api/mock/entities',
    {
      cors: 'no-cors',
      headers: {
        total: 200,
        page: 1,
        schema: JSON.stringify({
          from: '{{name.findName}}',
          timestamp: '{{date.recent}}',
          subject: '{{lorem.sentence}}',
          snippet: '{{lorem.lines}}',
          fullMail: '{{lorem.paragraphs}}',
          email: '{{internet.email}}',
        }),
      },
    }
  )
  const [menu, setMenu] = useState(false)
  if ((data === null || data.length === 0) && !loading) {
    getUrl()
  }
  let messages = <div className="loader"> </div>
  if (data && data.data) {
    messages = data.data.map((msg, index) => {
      return (
        <MessageCard
          active={msg == message}
          key={`key-${index}`}
          {...msg}
          onClick={() => {
            console.log('onclick')
            setMessage(msg)
          }}
        />
      )
    })
  }
  return (
    <>
      <NavBar className="has-shadow">
        <Container className="container">
          <NavBarBrand
            src="brightleafjs-logo.png"
            alt="Brightleat Elements: React and Bulma powered UI framework"
            onClick={e => {
              setMenu(!menu)
            }}
          />

          <NavBarMenu className={classnames({ 'is-active': menu })}>
            <NavBarEnd className="navbar-end">
              <NavBarDropDown title="Account">
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
      <Columns>
        <Column
          as="aside"
          is="2"
          isFullheight
          className="aside hero is-fullheight"
        >
          <div>
            <div className="compose has-text-centered">
              <Button isDanger isAnchor className="is-block is-bold" href="#">
                <span className="compose">Compose</span>
              </Button>
            </div>
            <div className="main">
              <a href="#" className="item active">
                <Icon fas icon="inbox" />
                <span className="name">Inbox</span>
              </a>
              <a href="#" className="item">
                <Icon fas icon="star" />
                <span className="name">Starred</span>
              </a>
              <a href="#" className="item">
                <Icon far icon="envelope" />
                <span className="name">Sent Mail</span>
              </a>
              <a href="#" className="item">
                <Icon far icon="folder" />
                <span className="name">Folders</span>
              </a>
              <a href="#HERO" className="item">
                <Icon fab icon="superpowers" />
                <span className="name">Hero</span>
              </a>
              <a href="#LANDING" className="item">
                <Icon fas icon="plane-arrival" />
                <span className="name">Landing</span>
              </a>
              <a href="#COVER" className="item">
                <Icon fas icon="book-open" />
                <span className="name">Cover</span>
              </a>
              <a href="#IMAGE_TIMELINE" className="item">
                <Icon far icon="images" />
                <span className="name">Insta</span>
              </a>
              <a href="#ADMIN" className="item">
                <Icon fas icon="cogs" />
                <span className="name">Admin</span>
              </a>
              <a href="#CHEATSHEET" className="item">
                <Icon fas icon="code" />
                <span className="name">CheatSheet</span>
              </a>
              <a href="#BLOG" className="item">
                <Icon fas icon="blog" />
                <span className="name">Blog</span>
              </a>
            </div>
          </div>
        </Column>
        <Column
          className="column is-4 messages hero is-fullheight"
          id="message-feed"
        >
          <Control className="action-buttons">
            <Control isGrouped className="control is-grouped">
              <Button isSmall isAnchor>
                <BaseIcon fa icon="chevron-down" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="sync" />
              </Button>
            </Control>
            <Control isGrouped>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="inbox" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="exclamation-circle" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="trash-alt" />
              </Button>
            </Control>
            <Control isGrouped>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="folder" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="tag" />
              </Button>
            </Control>
            <Control isGrouped className="pg">
              <Title as="div">1-10 of 100</Title>

              <Button isLink isAnchor>
                <BaseIcon fa icon="chevron-left" />
              </Button>
              <Button isLink isAnchor>
                <BaseIcon fa icon="chevron-right" />
              </Button>
            </Control>
          </Control>

          <div className="inbox-messages" id="inbox-messages">
            {messages}
          </div>
        </Column>
        <Column
          is="6"
          isHidden={message.picked}
          className="message hero is-fullheight"
          id="message-pane"
        >
          <div className="action-buttons">
            <Control isGrouped>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="inbox" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="exclamation-circle" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="trash-alt" />
              </Button>
            </Control>
            <Control isGrouped>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="exclamation-circle" />
              </Button>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="trash-alt" />
              </Button>
            </Control>
            <Control isGrouped>
              <Button isSmall isAnchor>
                <BaseIcon fa icon="folder" />
              </Button>
              <Button isSmall>
                <BaseIcon fa icon="tag" />
              </Button>
            </Control>
          </div>
          <Box className="message-preview">
            <div className="top">
              <div className="avatar">
                <img src="https://placehold.it/128x128" />
              </div>
              <div className="address">
                <div className="name">{message.from}</div>
                <div className="email">{message.email}</div>
              </div>
              <hr />
              <Content className="content">{message.fullMail}</Content>
            </div>
          </Box>
        </Column>
      </Columns>
      <Footer>
        <Container>
          <Content hasTextCentered>
            <p>
              <strong>Original Bulma Templates</strong> by{' '}
              <a href="https://github.com/dansup">Daniel Supernault</a>.
              <strong>Brightleaf/Elements</strong> by{' '}
              <a href="https://github.com/kevnz">Kevin Isom</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/brightleaf/elements">
                <BaseIcon fab icon="github" />
              </a>
            </p>
          </Content>
        </Container>
      </Footer>
    </>
  )
}

export default InboxTemplate
