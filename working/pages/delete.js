/* eslint-disable spellcheck/spell-checker */
/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import Highlight from '../components/highlighter'
import {
  Breadcrumb,
  BreadcrumbItem,
  Columns,
  Column,
  Delete,
  Hero,
  HeroBody,
  Section,
  SubTitle,
  Title,
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
            <a href="#/delete">Delete</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>Delete</Title>
          <SubTitle as="p" is="4">
            A versatile <strong>delete</strong> cross
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ElementsTabs />
      </div>
      <Columns>
        <Column isFull>
          The <code>Delete</code> element is a stand-alone element that can be
          used in different contexts. On its own, it{"'"}s a simple circle with
          a cross:
        </Column>
      </Columns>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Delete />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Delete } from '@brightleaf/elements'

export default () => {
  return <Delete />
}
`}
            </Highlight>
          </Column>
        </Columns>
      </Snippet>
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <Delete isSmall /> <Delete /> <Delete isMedium /> <Delete isLarge />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { Delete } from '@brightleaf/elements'

export default () => {
  return (
    <>
      <Delete isSmall />
      <Delete />
      <Delete isMedium />
      <Delete isLarge />
    </>
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
