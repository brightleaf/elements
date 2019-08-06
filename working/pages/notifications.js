/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable spellcheck/spell-checker */
import React, { useRef, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Columns,
  Column,
  FullColumn,
  Notification,
  Title,
  Section,
  Hero,
  HeroBody,
  SubTitle,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ElementsTabs } from '../components/tabs'

export default () => {
  const [showNotification, setShowNotification] = useState(false)
  const notifRef = useRef()

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
          <Title>Notification</Title>
          <SubTitle as="p" is="4">
            Bold <strong>notification</strong> blocks, to alert your users of
            something
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isOneThird>
            <Notification
              ref={notifRef}
              isPrimary
              isShown={showNotification}
              onDismissed={e => {
                console.log('onDismiss hit')
                setShowNotification(!showNotification)
              }}
            >
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
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
          </Column>
          <Column isTwoThirds>
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
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isOneThird>
            <Notification isPrimary isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isPrimary isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isInfo isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isInfo isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isWarning isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isWarning isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isSuccess isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isSuccess isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isDanger isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isDanger isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isLink isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isLink isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isLight isShown>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isLight isShown>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
        elit
      </Notification>
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
            <Notification isLight isShown isDismissible={false}>
              <Title as="p">{`isDismissible={false}`}</Title>
              ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
              placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
              fringilla. Nullam gravida purus diam, et dictum{' '}
              <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing
              elit
            </Notification>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Container, Notification } from '@brightleaf/elements'
export default () => {
  return (
    <Container>
      <Notification isLight isShown isDismissible={false}>
        <Title as="p">{'isDismissible={false}'}</Title>
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
        efficitur. Sit amet, consectetur adipiscing elit
      </Notification>
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
