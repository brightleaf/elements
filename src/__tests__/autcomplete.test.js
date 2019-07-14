import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { AutoComplete } from '../'

expect.extend({ toHaveClass })

describe('AutoComplete component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const items = [
      { name: 'First', id: 1 },
      { name: 'Second', id: 2 },
      { name: 'Third', id: 3 },
    ]
    const { container } = render(
      <AutoComplete
        list={items}
        onSelect={item => {}}
        onValueChange={e => {}}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('autocomplete')
  })
})
