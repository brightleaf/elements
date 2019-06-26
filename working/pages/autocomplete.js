import React, { useRef, useState } from 'react'

import {
  Container,
  Columns,
  Column,
  FullColumn,
  AutoComplete,
} from '@brightleaf/elements'
export default () => {
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
    <Container className="App content">
      <FullColumn>
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
      </FullColumn>
    </Container>
  )
}
