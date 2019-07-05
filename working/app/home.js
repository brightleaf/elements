import React from 'react'
import { useStyles, useStyleSheet } from '@brightleaf/react-hooks'
import Highlight from 'react-highlight'
import {
  Box,
  Column,
  Columns,
  Content,
  Hero,
  HeroBody,
  Title,
  SubTitle,
} from '../../src/'
export default function Home() {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyles(`
  html,
  body {
      font-family: 'Open Sans';
  }
  `)
  useStyleSheet('code.css')
  return (
    <Content>
      <Columns>
        <Column isOneThird>
          <Hero isWarning>
            <HeroBody>
              <Title>Brightleaf Elements</Title>
              <SubTitle as="h4">Bulma Styled React Components</SubTitle>
            </HeroBody>
          </Hero>
        </Column>
        <Column isTwoThirds>
          <Highlight className="bash">
            {'npm install @brightleaf/elements'}
          </Highlight>
          <Highlight className="javascript">
            {`
import React from 'react'
import { Hero, HeroBody } from '@brightleaf/elements'

export default () => {
  return (
    <Hero isWarning>
      <HeroBody>
        <Title>Brightleaf Elements</Title>
        <SubTitle as="h4">Bulma Styled React Components</SubTitle>
      </HeroBody>
    </Hero>
  )
}
`}
          </Highlight>
        </Column>
      </Columns>
    </Content>
  )
}
