/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Column,
  Columns,
  Message,
  MessageBody,
  MessageHeader,
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src'
import { ComponentsTabs } from '../components/tabs'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'

export default () => {
  return (
    <Section>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/components">Components</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/messages">Message</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Message</Title>
          <SubTitle as="p" is="4">
            Colored <strong>message</strong> blocks, to emphasize part of your
            page
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>

      <Content>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message>
                <MessageHeader>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message>
      <MessageHeader>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isPrimary>
                <MessageHeader>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isPrimary>
      <MessageHeader>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isSuccess>
                <MessageHeader>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isSuccess>
      <MessageHeader>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isDanger>
                <MessageHeader>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isDanger>
      <MessageHeader>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isWarning>
                <MessageHeader>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isWarning>
      <MessageHeader>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message>
                <MessageHeader hasDelete={false}>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message>
      <MessageHeader hasDelete={false}>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isLarge>
                <MessageHeader hasDelete={false}>Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isLarge>
      <MessageHeader hasDelete={false}>Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isSmall>
                <MessageHeader hasDelete={false}>Small Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isSmall>
      <MessageHeader hasDelete={false}>Small Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isMedium>
                <MessageHeader hasDelete={false}>Medium Messages</MessageHeader>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isMedium>
      <MessageHeader hasDelete={false}>Medium Messages</MessageHeader>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>

          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isPrimary>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isPrimary>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isDanger>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isDanger>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
        <Columns>
          <Column isOneThird>
            <Box>
              <Message isWarning>
                <MessageBody>Message body</MessageBody>
              </Message>
            </Box>
          </Column>
          <Column isTwoThirds>
            <Highlight className="javascript" languages={['javascript']}>{`
import React from 'react'
import { Message, MessageHeader, MessageBody } from '@brightleaf/elements'
export default () => {
  return (
    <Message isWarning>
      <MessageBody>Message body</MessageBody>
    </Message>
  )
}
          `}</Highlight>
          </Column>
        </Columns>
      </Content>
    </Section>
  )
}
