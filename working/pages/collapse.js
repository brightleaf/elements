/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React, { useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardHeaderIcon,
  CardFooter,
  CardFooterItem,
  Columns,
  Column,
  Collapse,
  Content,
  Title,
  Section,
  Hero,
  HeroBody,
  SubTitle,
  Control,
  Icon,
  Panel,
  PanelBlock,
  PanelTabs,
  Button,
} from '../../src'
import { CodeCollapse } from '../components/collapse'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ElementsTabs } from '../components/tabs'

const Block = ({ children }) => {
  return <div className="block">{children}</div>
}

export default () => {
  const [showNotification, setShowNotification] = useState(false)
  const [showPanel, setShowPanel] = useState(true)
  const [showCard, setShowCard] = useState(true)

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
          <BreadcrumbItem>
            <a href="#/notifications">Notification</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Collapse</Title>
          <SubTitle as="p" is="4">
            Show/Hide <strong>Collapse</strong> blocks
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isOneThird>
            <Collapse isShown={showNotification}>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Collapse>
            {!showNotification && (
              <button
                className="button"
                onClick={e => {
                  setShowNotification(!showNotification)
                }}
              >
                Show
              </button>
            )}
            {showNotification && (
              <button
                className="button"
                onClick={e => {
                  setShowNotification(!showNotification)
                }}
              >
                Hide
              </button>
            )}
          </Column>
          <Column isTwoThirds>
            <CodeCollapse>
              <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  const [showNotification, setShowNotification] = useState(false)
  const notifRef = useRef()

  return (
    <Container isOneThird>
      <Notification
        ref={notifRef}
        isPrimary
        isShown={showNotification}
        onDismissed={e => {
          console.log('onDismiss hit')
          setShowNotification(!showNotification)
        }}
      > ... </Notification>
      {!showNotification && (
        <button
          className="button"
          onClick={e => {
            setShowNotification(!showNotification)
            notifRef.current.show()
          }}
        >
          Show
        </button>
      )}
      {showNotification && (
        <button
          className="button"
          onClick={e => {
            setShowNotification(!showNotification)
            notifRef.current.hide()
          }}
        >
          Hide
        </button>
      )}
    </Container>
  )
}
          `}</Highlight>
            </CodeCollapse>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Block>
              {!showPanel && (
                <Button
                  onClick={e => {
                    setShowPanel(!showPanel)
                  }}
                >
                  Show
                </Button>
              )}
              {showPanel && (
                <Button
                  onClick={e => {
                    setShowPanel(!showPanel)
                  }}
                >
                  Hide
                </Button>
              )}
            </Block>
            <Panel heading="repositories">
              <PanelBlock>
                <Control hasIconsLeft>
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="search"
                  />
                  <Icon isSmall isLeft fas icon="search"></Icon>
                </Control>
              </PanelBlock>

              <Collapse isPrimary isShown={showPanel}>
                <PanelTabs>
                  <a className="is-active">all</a>
                  <a>public</a>
                  <a>private</a>
                  <a>sources</a>
                  <a>forks</a>
                </PanelTabs>
                <PanelBlock as="a" isActive>
                  <Icon iconClassName="panel-icon" fas icon="book"></Icon>
                  bulma
                </PanelBlock>
                <PanelBlock as="a">
                  <Icon iconClassName="panel-icon" fas icon="book"></Icon>
                  marksheet
                </PanelBlock>
                <PanelBlock as="a">
                  <Icon iconClassName="panel-icon" fas icon="book"></Icon>
                  minireset.css
                </PanelBlock>
                <PanelBlock as="a">
                  <Icon iconClassName="panel-icon" fas icon="book"></Icon>
                  jgthms.github.io
                </PanelBlock>
                <PanelBlock as="a">
                  <Icon
                    iconClassName="panel-icon"
                    fas
                    icon="code-branch"
                  ></Icon>
                  daniellowtw/infboard
                </PanelBlock>
                <PanelBlock as="a">
                  <Icon
                    iconClassName="panel-icon"
                    fas
                    icon="code-branch"
                  ></Icon>
                  mojs
                </PanelBlock>
                <PanelBlock as="label">
                  <input type="checkbox"></input>
                  remember me
                </PanelBlock>
                <PanelBlock>
                  <Button isLink isOutlined isFullWidth>
                    reset all filters
                  </Button>
                </PanelBlock>
              </Collapse>
            </Panel>
          </Column>
          <Column isTwoThirds>
            <CodeCollapse>
              <Highlight className="javascript" languages={['javascript']}>{`
import React, { useState } from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  const [showPanel, setShowPanel] = useState(true)
  return (
    <Container>
      {!showPanel && (
        <Button
          onClick={e => {
            setShowPanel(!showPanel)
          }}
        >
          Show
        </Button>
      )}
      {showPanel && (
        <Button
          onClick={e => {
            setShowPanel(!showPanel)
          }}
        >
          Hide
        </Button>
      )}
      <Panel heading="repositories">
        <PanelBlock>
          <Control hasIconsLeft>
            <input
              className="input is-small"
              type="text"
              placeholder="search"
            />
            <Icon isSmall isLeft fas icon="search"></Icon>
          </Control>
        </PanelBlock>

        <Collapse isPrimary isShown={showPanel}>
          <PanelTabs>
            <a className="is-active">all</a>
            <a>public</a>
            <a>private</a>
            <a>sources</a>
            <a>forks</a>
          </PanelTabs>
          <PanelBlock as="a" isActive>
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            bulma
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            marksheet
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            minireset.css
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            jgthms.github.io
          </PanelBlock>
          <PanelBlock as="a">
            <Icon
              iconClassName="panel-icon"
              fas
              icon="code-branch"
            ></Icon>
            daniellowtw/infboard
          </PanelBlock>
          <PanelBlock as="a">
            <Icon
              iconClassName="panel-icon"
              fas
              icon="code-branch"
            ></Icon>
            mojs
          </PanelBlock>
          <PanelBlock as="label">
            <input type="checkbox"></input>
            remember me
          </PanelBlock>
          <PanelBlock>
            <Button isLink isOutlined isFullWidth>
              reset all filters
            </Button>
          </PanelBlock>
        </Collapse>
      </Panel>
    </Container>
  )
}
          `}</Highlight>
            </CodeCollapse>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Card>
              <CardHeader title="Component">
                <CardHeaderIcon
                  onClick={e => {
                    e.preventDefault()
                    console.info('show card thing', showCard)
                    setShowCard(!showCard)
                  }}
                >
                  <Icon icon={showCard ? 'angle-down' : 'angle-up'} fas />
                </CardHeaderIcon>
              </CardHeader>
              <Collapse isShown={showCard}>
                <CardBody>
                  <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
                    <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </Content>
                </CardBody>
                <CardFooter>
                  <CardFooterItem>
                    <a
                      href="#"
                      onClick={e => {
                        console.info('clicked')
                        e.preventDefault()
                      }}
                    >
                      Save
                    </a>
                  </CardFooterItem>
                  <CardFooterItem>
                    <a href="#">Edit</a>
                  </CardFooterItem>
                  <CardFooterItem>
                    <a href="#">Delete</a>
                  </CardFooterItem>
                </CardFooter>
              </Collapse>
            </Card>
          </Column>
          <Column isTwoThirds>
            <CodeCollapse>
              <Highlight className="javascript" languages={['javascript']}>{`
import React, { useState } from 'react'
import { Collapse, Container, Card, CardBody, CardHeader,
  CardHeaderIcon, CardFooter, CardFooterItem, Icon ,
} from '@brightleaf/elements'
export default () => {
  const [showCard, setShowCard] = useState(true)
  return (
    <Container>
      <Card>
        <CardHeader title="Component">
          <CardHeaderIcon
            onClick={e => {
              e.preventDefault()
              console.info('show card thing', showCard)
              setShowCard(!showCard)
            }}
          >
            <Icon icon={showCard ? 'angle-down' : 'angle-up'} fas />
          </CardHeaderIcon>
        </CardHeader>
        <Collapse isShown={showCard}>
          <CardBody>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
          </CardBody>
          <CardFooter>
            <CardFooterItem>
              <a
                href="#"
                onClick={e => {
                  console.info('clicked')
                  e.preventDefault()
                }}
              >
                Save
              </a>
            </CardFooterItem>
            <CardFooterItem>
              <a href="#">Edit</a>
            </CardFooterItem>
            <CardFooterItem>
              <a href="#">Delete</a>
            </CardFooterItem>
          </CardFooter>
        </Collapse>
      </Card>
    </Container>
  )
}
          `}</Highlight>
            </CodeCollapse>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}
