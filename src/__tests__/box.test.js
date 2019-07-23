import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
import { Box } from '../box'

expect.extend({ toHaveClass })

describe('Box component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Box>
        <div>Trapped in a Box</div>
      </Box>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('box')
  })
  it('should render with extra classnames', () => {
    const { container } = render(
      <Box className="boxed-in">
        <div>Trapped in a Box</div>
      </Box>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('box')
    expect(container.firstChild).toHaveClass('boxed-in')
  })
})
