import React from 'react'
import { render, cleanup } from '@testing-library/react'
import {
  toHaveClass,
  toHaveAttribute,
  toContainElement,
} from '@testing-library/jest-dom'
import { Highlight } from '../'

expect.extend({ toHaveClass, toHaveAttribute, toContainElement })
describe('The Highlight Component', () => {
  afterEach(cleanup)
  it('should render a div with the class highlight', () => {
    const { container } = render(<Highlight> </Highlight>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('highlight')
  })
  it('should render a div with the class highlight and the className passed in', () => {
    const { container } = render(<Highlight className="highlight-test" />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('highlight')
    expect(container.firstChild).toHaveClass('highlight-test')
  })
  it('should render a p with the class highlight when as property is set to `p`', () => {
    const { container } = render(<Highlight as="p" />)
    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveClass('highlight')
    const p = document.querySelector('p.highlight')
    expect(container).toContainElement(p)
  })
})
