import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import Highlight from '../components/highlighter'
import {
  Box,
  Column,
  Columns,
  Content,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Section,
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
    <Section>
      <br />
      <Columns>
        <Column isOneThird>
          <Hero isWarning>
            <HeroBody>
              <Title>Brightleaf Elements</Title>
              <SubTitle as="h4">Bulma Styled React Components</SubTitle>
            </HeroBody>
          </Hero>
          <br />
          <Content>
            <div>
              <p>
                <a href="https://bulma.io">Bulma</a> powered React elements to
                allow the creation of sites and apps
              </p>
            </div>
          </Content>
        </Column>
        <Column isTwoThirds>
          <Highlight className="bash" languages={['bash', 'javascript']}>
            {`npm install @brightleaf/elements @brightleaf/react-hooks`}
          </Highlight>
          <Highlight className="javascript" languages={['javascript']}>
            {`
import React from 'react'
import { Hero, HeroBody, Title, SubTitle  } from '@brightleaf/elements'
import { useStyleSheet , useScript } from '@brightleaf/react-hooks'

export default () => {
  useStyleSheet(
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'
  )
  useScript('https://kit.fontawesome.com/your-font-awesome-kit.js')
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
    </Section>
  )
}
