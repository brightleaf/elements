/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import Highlight from '../components/highlighter'
import {
  ConfirmButton,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Buttons,
  Columns,
  Column,
  Container,
  FullColumn,
  Content,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'
const Callout = ({ children }) => {
  return <div className="callout is-primary">{children}</div>
}
export default () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyles(`
  html,
  body {
      font-family: 'Open Sans';
  }
  `)
  useStyleSheet('code.css')
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
            <a href="#/buttons">Buttons</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Button</Title>
          <SubTitle as="p" is="4">
            The classic <strong>button</strong>, in different colors, sizes, and
            states
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>
      <FullColumn>
        <Content>
          <p>
            The <strong>button</strong> is an essential element of any design.
            It&apos;s meant to look and behave as an{' '}
            <strong>interactive</strong> element of your page.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Container>
              <ConfirmButton>Button</ConfirmButton>
            </Container>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { ConfirmButton } from '@brightleaf/elements'

export default () => {
  return (
    <Container>
      <ConfirmButton>Button</ConfirmButton>
    </Container>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <FullColumn>
        <Content>
          <p>
            The <strong>button</strong> is an essential element of any design.
            It&apos;s meant to look and behave as an{' '}
            <strong>interactive</strong> element of your page.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Container>
              <ConfirmButton
                question="Are you sure you want to do this?"
                onConfirm={e => {
                  console.log('confirm button click')
                }}
                onCancel={() => {
                  console.log('cancelled')
                }}
              >
                Do It
              </ConfirmButton>
            </Container>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { ConfirmButton } from '@brightleaf/elements'

export default () => {
  return (
    <Container>
      <ConfirmButton
        question="Are you sure you want to do this?"
        onConfirm={e => {
          console.log('confirm button click')
        }}
        onCancel={() => {
          console.log('cancelled')
        }}
      >
        Do It
      </ConfirmButton>
    </Container>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
    </Section>
  )
}
