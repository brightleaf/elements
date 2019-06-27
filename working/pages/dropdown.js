import React, { useState } from 'react'

import { Container, FullColumn, DropDown, Column, Columns } from '../../src'
export default () => {
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

  return (
    <Container className="App content">
      <FullColumn>
        <DropDown
          list={items}
          onSelect={item => {
            console.info('Selected Item', item)
          }}
        />
      </FullColumn>
      <Columns>
        <Column isHalf>
          <FullColumn>
            <DropDown
              list={items2}
              onSelect={item => {
                console.info('Selected Item', item)
              }}
            />
          </FullColumn>
        </Column>
      </Columns>
    </Container>
  )
}
