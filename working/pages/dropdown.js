import React, { useState } from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import {
  Container,
  DropDown,
  Column,
  Columns,
  DropDownItem,
  DropDownMenu,
  DropDownDivider,
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
  const [selected, setSelected] = useState('Choose')

  return (
    <Container className="App">
      <ComponentsTabs />
      <Snippet>
        <Columns>
          <Column isHalf>
            <DropDown
              label="Select Item"
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
      label="Select Item"
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
    </Container>
  )
}
