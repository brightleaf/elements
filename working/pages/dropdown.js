import React, { useState } from 'react'

import { Container, FullColumn, DropDown } from '../../src'
export default () => {
  const items = [
    { name: 'First', id: 1 },
    { name: 'Second', id: 2 },
    { name: 'Third', id: 3 },
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
    </Container>
  )
}
