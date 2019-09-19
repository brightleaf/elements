/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React, { useRef, useState } from 'react'
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Columns,
  Column,
  Notification,
  Title,
  Section,
  Hero,
  HeroBody,
  SubTitle,
  Container,
} from '../../src'
import { Notice } from '../../src/notice/notice'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ElementsTabs } from '../components/tabs'

export default () => {
  const [showDefaultNotification, setShowDefaultNotification] = useState(false)
  const [showNotification2, setShowNotification2] = useState(false)
  const [showTopNotification, setShowTopNotification] = useState(false)

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
            <a href="#/notifications">Notice</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Notice</Title>
          <SubTitle as="p" is="4">
            Show/Hide simple <strong>notice</strong> messages
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isOneThird>
            <Container>
              Show the notice and have it hide 3 seconds later.
            </Container>
            <Notice
              isPrimary
              isShown
              duration={3000}
              onHide={() => {
                console.log('on hide')
              }}
            >
              <b>Default</b> lorem ipsum dolor sit amet, consectetur adipiscing
              elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
            </Notice>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notice } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notice isPrimary isShown duration={3000}>
        <b>Default</b> lorem ipsum dolor sit amet, consectetur adipiscing
        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
      </Notice>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Container>
              Trigger the notice to show and have it dismiss after 3 seconds
              <Button
                disabled={showDefaultNotification}
                onClick={e => {
                  e.preventDefault()
                  console.info(
                    'showDefaultNotification',
                    showDefaultNotification
                  )
                  setShowDefaultNotification(!showDefaultNotification)
                }}
              >
                SHOW
              </Button>
            </Container>
            <Notice
              isPrimary
              isShown={showDefaultNotification}
              duration={3000}
              onHide={() => {
                console.log('on hide 2')
                setShowDefaultNotification(false)
              }}
            >
              <b>Show Hide</b> lorem ipsum dolor sit amet, consectetur
              adipiscing elit lorem ipsum dolor. <b>Pellentesque risus mi</b>,
              elit
            </Notice>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notice } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notice isPrimary isShown duration={3000}>
        <b>Default</b> lorem ipsum dolor sit amet, consectetur adipiscing
        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
      </Notice>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Container>
              <Button
                disabled={showNotification2}
                onClick={e => {
                  e.preventDefault()
                  console.info('showDefaultNotification', showNotification2)
                  setShowNotification2(!showNotification2)
                }}
              >
                SHOW
              </Button>
            </Container>
            <Notice
              isInfo
              isShown={showNotification2}
              duration={30000}
              onHide={() => {
                console.log('on hide 3')
                setShowNotification2(false)
              }}
              actionText="DO IT"
              onAction={e => {
                console.log('action', e)
                e.close()
              }}
            >
              <b>ACTION</b> lorem ipsum dolor sit amet, consectetur adipiscing
              elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
            </Notice>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React, { useState } from 'react'
import { Container, Notice } from '@brightleaf/elements'
export default () => {
  const [showNotice, setShowNotice] = useState(false)
  return (
    <Container>
      <Container>
        <Button
          disabled={showNotice}
          onClick={e => {
            e.preventDefault()
            console.info('showNotifice', showNotice)
            setShowNotice(!showNotifice)
          }}
        >
          SHOW
        </Button>
      </Container>
      <Notice
        isInfo
        isShown={showNotice}
        duration={30000}
        onHide={() => {
          console.log('on hide 3')
          setShowNotice(false)
        }}
        actionText="DO IT"
        onAction={e => {
          console.log('The action event payload', e)
          e.close()
        }}
      >
        <b>ACTION</b> lorem ipsum dolor sit amet, consectetur adipiscing
        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
      </Notice>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Container>
              <Button
                disabled={showTopNotification}
                onClick={e => {
                  e.preventDefault()

                  setShowTopNotification(!showTopNotification)
                }}
              >
                SHOW
              </Button>
            </Container>
            <Notice
              isPrimary
              isTop
              isShown={showTopNotification}
              duration={3000}
              onHide={() => {
                console.log('on hide top')
                setShowTopNotification(false)
              }}
            >
              <b>Show Top</b> lorem ipsum dolor sit amet, consectetur adipiscing
              elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
            </Notice>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notice } from '@brightleaf/elements'
export default () => {
  const [showTopNotification, setShowTopNotification] = useState(false)
  return (
    <Container>
      <Notice
        isPrimary
        isTop
        isShown={showTopNotification}
        duration={3000}
        onHide={() => {
          console.log('on hide top')
          setShowTopNotification(false)
        }}
      >
        <b>Show Top</b> lorem ipsum dolor sit amet, consectetur adipiscing
        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit
      </Notice>
    </Container>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}
