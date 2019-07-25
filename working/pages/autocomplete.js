import React, { useState } from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useStyles } from '@brightleaf/react-hooks/lib/use-styles'
import {
  Container,
  Column,
  Columns,
  AutoComplete,
  Hero,
  HeroBody,
  Section,
  SubTitle,
  Title,
} from '../../src'
import { Snippet } from '../components/snippet'
import Highlight from '../components/highlighter'
import { ComponentsTabs } from '../components/tabs'
export default () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans')
  useStyles(`
  html,
  body {
      font-family: 'Open Sans';
  }
  `)
  useStyleSheet('code.css')
  const items = [
    { name: 'First', id: 1 },
    { name: 'Second', id: 2 },
    { name: 'Third', id: 3 },
  ]
  const [filter, setFilter] = useState('')
  const filteredItems = items.filter(
    i => i.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  )
  return (
    <Section className="App">
      <Hero isLight isBold>
        <HeroBody>
          <Title>AutoComplete</Title>
          <SubTitle as="p" is="4">
            A simple <strong>autocomplete</strong>
          </SubTitle>
        </HeroBody>
      </Hero>
      <ComponentsTabs />
      <Snippet>
        <Columns>
          <Column isHalf className="snippet-preview">
            <AutoComplete
              list={filteredItems}
              onSelect={item => {
                console.info('Selected Item', item)
              }}
              onValueChange={e => {
                console.log('Target value', e.target.value)
                setFilter(e.target.value)
              }}
            />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { AutoComplete } from '@brightleaf/elements'
const items = [
  { name: 'First', id: 1 },
  { name: 'Second', id: 2 },
  { name: 'Third', id: 3 },
]

export default () => {
  const [filter, setFilter] = useState('')
  const filteredItems = items.filter(
    i => i.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  )
  return (
    <AutoComplete
      list={filteredItems}
      onSelect={item => {
        console.info('Selected Item', item)
      }}
      onValueChange={e => {
        console.log('Target value', e.target.value)
        setFilter(e.target.value)
      }}
    />
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
