import React, { useState } from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Breadcrumb,
  BreadcrumbItem,
  DropDown,
  Column,
  Columns,
  Content,
  DropDownItem,
  DropDownMenu,
  DropDownDivider,
  FullColumn,
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
  useStyleSheet('./code.css')
  const items = [
    { name: 'First', id: 1 },
    { name: 'Second', id: 2 },
    { name: 'Third', id: 3 },
  ]
  const items2 = [
    { name: 'First', id: 1 },
    { name: 'Second', id: 2 },
    { name: 'Third', id: 3 },
    null,
    { name: 'Fourth', id: 3 },
  ]
  const [selected, setSelected] = useState('DropDownMenu - Choose')

  return (
    <Section className="App">
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/components">Components</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#/dropdown">DropDown</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Hero isPrimary isBold>
        <HeroBody>
          <Title>DropDown</Title>
          <SubTitle as="p" is="4">
            An interactive <strong>dropdown</strong> menu for discoverable
            content
          </SubTitle>
        </HeroBody>
      </Hero>
      <div style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <ComponentsTabs />
      </div>
      <FullColumn>
        <Content>
          <p>
            The <strong>DropDown</strong> component can take an array of objects
            with a name and id property set to the list attribute.
          </p>
          <p>
            The <strong>DropDownMenu</strong> component allows children
            components to be used.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf>
            <DropDown
              label="DropDown - Select Item"
              list={items}
              onSelect={item => {
                console.info('Selected Item', item)
              }}
            />
          </Column>
          <Column is isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { DropDown } from '@brightleaf/elements'
const items = [
  { name: 'First', id: 1 },
  { name: 'Second', id: 2 },
  { name: 'Third', id: 3 },
]

export default () => {
  return (
    <DropDown
      label="DropDown - Select Item"
      list={items}
      onSelect={item => {
        console.info('Selected Item', item)
      }}
  />
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
            When the list has a null value the <code>DropDown</code> will render
            the null entry as a divider.
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf>
            <DropDown
              label="DropDown with divider"
              list={items2}
              onSelect={item => {
                console.info('Selected Item', item)
              }}
            />
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React from 'react'
import { DropDown } from '@brightleaf/elements'
const items = [
  { name: 'First', id: 1 },
  { name: 'Second', id: 2 },
  { name: 'Third', id: 3 },
  null,
  { name: 'Fourth', id: 3 },
]

export default () => {
  return (
    <DropDown
      label="DropDown with divider"
      list={items}
      onSelect={item => {
        console.info('Selected Item', item)
      }}
  />
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
            The <code>DropDownMenu</code> component allows children:{' '}
            <code>DropDownItem</code> and <code>DropDownDivider</code>
          </p>
        </Content>
      </FullColumn>
      <Snippet>
        <Columns>
          <Column isHalf>
            <DropDownMenu label={selected}>
              <DropDownItem
                onClick={e => {
                  e.preventDefault()
                  setSelected('First')
                }}
              >
                First
              </DropDownItem>
              <DropDownDivider />
              <DropDownItem
                onClick={e => {
                  e.preventDefault()
                  setSelected('Second')
                }}
              >
                Second
              </DropDownItem>
            </DropDownMenu>
          </Column>
          <Column isHalf>
            <Highlight className="javascript" languages={['javascript']}>
              {`
import React, { useState } from 'react'
import { DropDownMenu, DropDownItem, DropDownDivider } from '@brightleaf/elements'


export default () => {
  const [selected, setSelected] = useState('Choose')
  return (
    <DropDownMenu label={selected}>
      <DropDownItem
        onClick={e => {
          e.preventDefault()
          setSelected('First')
        }}
      >
        First
      </DropDownItem>
      <DropDownDivider />
      <DropDownItem
        onClick={e => {
          e.preventDefault()
          setSelected('Second')
        }}
      >
        Second
      </DropDownItem>
    </DropDownMenu>
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
