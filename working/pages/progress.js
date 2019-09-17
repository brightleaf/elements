/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import Highlight from '../components/highlighter'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Columns,
  Column,
  Hero,
  HeroBody,
  Section,
  SubTitle,
  Title,
  ProgressBar,
} from '../../src'
import { Snippet } from '../components/snippet'
import { ElementsTabs } from '../components/tabs'

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
            <a href="#/box">Box</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Box</Title>
          <SubTitle as="p" is="4">
            A white <strong>box</strong> to contain other elements
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>

      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <ProgressBar value="15" />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Content, ProgressBar } from '@brightleaf/elements'


export default () => {

  return (
    <Content>
      <ProgressBar value="15" />
    </Content>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <ProgressBar isPrimary value="15" max="100">
              15%
            </ProgressBar>
            <ProgressBar isLink value="30" max="100">
              30%
            </ProgressBar>
            <ProgressBar isInfo value="45" max="100">
              45%
            </ProgressBar>
            <ProgressBar isSuccess value="60" max="100">
              60%
            </ProgressBar>
            <ProgressBar isWarning value="75" max="100">
              75%
            </ProgressBar>
            <ProgressBar isDanger value="90" max="100">
              90%
            </ProgressBar>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Content, ProgressBar } from '@brightleaf/elements'

export default () => {

  return (
    <Content>
      <ProgressBar isPrimary value="15" max="100">
        15%
      </ProgressBar>
      <ProgressBar isLink value="30" max="100">
        30%
      </ProgressBar>
      <ProgressBar isInfo value="45" max="100">
        45%
      </ProgressBar>
      <ProgressBar isSuccess value="60" max="100">
        60%
      </ProgressBar>
      <ProgressBar isWarning value="75" max="100">
        75%
      </ProgressBar>
      <ProgressBar isDanger value="90" max="100">
        90%
      </ProgressBar>
    </Content>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <ProgressBar value="15" max="100" isSmall>
              15%
            </ProgressBar>
            <ProgressBar value="30" max="100">
              30%
            </ProgressBar>
            <ProgressBar value="45" max="100" isMedium>
              45%
            </ProgressBar>
            <ProgressBar value="60" max="100" isLarge>
              60%
            </ProgressBar>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Content, ProgressBar } from '@brightleaf/elements'


export default () => {

  return (
    <Content>
      <ProgressBar value="15" />
    </Content>
  )
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <ProgressBar isSmall isPrimary />
            <ProgressBar isDanger />
            <ProgressBar isMedium isDark />
            <ProgressBar isLarge isInfo />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Content, ProgressBar } from '@brightleaf/elements'


export default () => {

  return (
    <Content>
      <ProgressBar  />
    </Content>
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
