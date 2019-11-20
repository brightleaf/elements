import React from 'react'
import { render, cleanup } from '@testing-library/react'
import {
  toHaveClass,
  toHaveAttribute,
  toContainElement,
} from '@testing-library/jest-dom'
import { Heading } from '../'

expect.extend({ toHaveClass, toHaveAttribute, toContainElement })
describe('The Heading Component', () => {
  afterEach(cleanup)
  it('should render a div with the class heading', () => {
    const { container } = render(<Heading> </Heading>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('heading')
  })
  it('should render a div with the class heading and the className passed in', () => {
    const { container } = render(<Heading className="heading-test" />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('heading')
    expect(container.firstChild).toHaveClass('heading-test')
  })
  it('should render a p with the class heading when as property is set to `div`', () => {
    const { container } = render(<Heading as="div" />)
    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveClass('heading')
    const p = document.querySelector('div.heading')
    expect(container).toContainElement(p)
  })
})
